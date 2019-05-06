# Ruby with Sinatra Walkthrough

## Step 1: Install bundle, create a Gemfile, and install dependencies.

* Run `Gem install bundle`. It does not matter where this command is run. This is a package manager like npm or yarn.

* Navigate to the wishlist-app folder in Terminal or Gitbash and run `bundle init`. This will create a `Gemfile`. Similar to a package.json, the Gemfile is where you will list your app's dependencies.

* Copy and paste the code into the Gemfile you created:

```ruby
# DEPENDENCIES

# With Sinatra, you can easily set up your routes. Think of it as Express for Ruby
gem "sinatra"
# Database
gem "mysql2"
# ORM - like Sequelize
gem 'sinatra-activerecord'
# Task-automater
gem 'rake'
# Sends responses as JSON
gem "json"
```

* To install the dependencies, run `bundle install`. You shoulde see `Gemfile.lock` in your app's root once this command has run.

<hr>


## Step 2: General setup.

* Copy and paste the following code into the `config.ru` file. This code will allow you to start your app from the WishlistApp class you will define soon:

```ruby
require "./app"

run WishlistApp
```

* Require all the dependencies you installed. Copy and paste the following code into the `app.rb` file:

```ruby
require "sinatra/base"
require 'sinatra/activerecord'
require "mysql2"
require "json"
```

* Also paste the following WishlistApp class into the `app.rb` file. It will instantiate the classs that will contain all of the routes.

```ruby
# This is making a new class called WishlistApp (it does not need to be called that), and building it on top of Sinatra's Base class.

class WishlistApp < Sinatra::Base
   
   # Put routes here

end
```

<hr>


## Step 3: Create the views.

* Copy and paste the following HTML into `/views/index.erb`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wishlist</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">

</head>
<body>

   <div>   
      <h1>My name's Jacob Moore</h1>
      <p>I'm a ruby expert<sup>*</sup></p>
      <hr>
      <a href="/wishlist">View my wishlist!</a>
      
      <p class="footer"><sup>*</sup>not really an expert...</p>
   </div>

   <!-- Client-Side JavaScript -->
   <script src="/assets/javascript/index.js"></script>
</body>
</html>
```


* Copy and paste the following HTML into `/views/wishlist.erb`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Wishlist</title>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">

</head>
<body>

   <div>   
      <h1>Wishes</h1>
      <hr>
      <ul>
         <% @wishData.each do |wish| %>
            <li><%= wish.text %></li>
         <% end %>
      </ul>
      
   </div>

   <!-- Client-Side JavaScript -->
   <script src="/assets/javascript/index.js"></script>
</body>
</html>
```

*In the above HTML, the `<link>` tags for the local stylesheet and the `<script>` tags for client-side javascript do not have the proper relative paths from the erb files. This is because Sinatra serves up our `public` folder as static assets. This is similar to serving static assets from the public folder when working with Express. Note that the folder must be named "public" if you want Sinatra to make this happen.*

<hr>


## Step 4: Set up the database.

* Open MySQL workbench and use the following to create your database:

```sql
CREATE DATABASE wishlist_db;
```

* Add the following to the Rakefile:

```ruby
require './app'
require 'sinatra/activerecord/rake'
```

* To configure your app's database, copy and paste the following code under your dependencies in `app.rb`:

```ruby
ActiveRecord::Base.establish_connection adapter: 'mysql2', database: 'wishlist_db', host: 'localhost', username: 'root', password: 'password'
```

* Next, set up tables in your database. You'll do this in the command line using the 'rake' task automater. Navigate to the root directory of your app in Terminal or Gitbash and run the following command:

```
rake db:create_migration NAME=create_wishes_table
```

* If the previous step succeeded, you'll see that a `/migrate` directory was created inside the `/db` directory. Next, you'll define the columns on the "wishes" table. Copy and paste the following code into the file thats inside `/db/migrate`:

```ruby
def change

   # Add this code into the 'def change' method
   # ==========================================
   create_table :wishes do | t |
      t.string :text
      t.datetime :created_at
      t.datetime :updated_at 
   end
   # ==========================================

end
```

* Set up your model. Copy and paste the following code into `/models/wishes.rb`:

```ruby
class Wish < ActiveRecord::Base

   # This adds a validation to the Wish model that says it is required (i.e. presence => true) to add data into the 'text' column.
   validates :text, :presence => true

   # This is also where you'd normally define relationships between tables (like table associations with Sequelize)
end
```

* Finally, run the following commands to update your local database and add seed data:

```
rake db:migrate
rake db:seed
```

<hr>


## Step 5: Add routes.

* Add your routes to the WishlistApp class that you added to `app.rb` earlier. Copy and paste the following code:

```ruby
# When user makes a GET request to the "/" route, renders the index.erb view.
get "/" do
   erb :index
end

# When user makes a GET request to the "/wishlist" route, uses Wish model to get all data from the wishes table. Assigns that data to the @wishData variable. Renders the wishlist.erb view (and passes along the @wishData variable, which is used by the wishlist.erb template to generate HTML for each row of data retrieved from the database).
get "/wishlist" do
   @wishData = Wish.all

   erb :wishlist
end
```

<hr>


## Step 6: Start up your app!

* Navigate to the root directory of your app in Terminal or Gitbash and run the following command:

```
rackup
```

You will be able to visit your app at `http://localhost:9292`