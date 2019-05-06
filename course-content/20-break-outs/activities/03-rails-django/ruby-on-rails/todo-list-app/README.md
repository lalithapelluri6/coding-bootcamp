# Ruby on Rails Walkthrough

## Step 1: Create a new rails app.

Run the following command in Terminal or Gitbash:

```
rails new <appName>
```

This will create a new Rails app located at the directory where you executed the command. Open the app in VS code.

<hr>


## Step 2: Add any needed dependencies and install.

Just like with Node, Ruby on Rails allows you to add dependencies to your app. With Node, your dependencies are listed in the package.json file, but in rails they're listed in the Gemfile, which is located in the root directory of a Rails app.

For this demo, we are only adding one dependency. Add the following line to your Gemfile:

```ruby
gem 'mysql2'
```

In Terminal or Gitbash, navigate to the root directory of your Rail's app. Install your dependencies by running the following command:

```
bundle install
```

*If you see this error - `Your Ruby version is 2.6.0, but your Gemfile specified 2.3.7` - or something similar, navigate to your Gemfile, and change the version specified at the top to the one you have on your device.*

Finally, start up your app by running:

```
rails server
```

*If you see this error - `You must use Bundler 2 or greater with this lockfile.` - run the command: "gem update --system"*

Just like in Node, you can stop your app from running by pressing `control + c` in Terminal or Gitbash.

<hr>


## Step 3: Configure the app's database.

Open `/config/database.yml`. This is where you configure settings related to your Rails app's database.

Scroll down to the 'development' key and alter the existing code to look like this:

```ruby
development:
  adapter: mysql2
  database: todo_db
  host: localhost
  username: root
  password: password #You will have to change this password if you do not have your MySQL password set to 'password'.
```

Next, open MySQL Workbench, and create the 'todo_db' database. You can use the following:

```sql
CREATE DATABASE todo_db;
```

<hr>


## Step 4: Create a model for the data.

In Terminal or Gitbash, navigate to the root directory of your Rails app. Run the following command: 

```
rails generate model Todo text:string
```

This will create a model for Todo data with a "text" column that holds strings. Active Record, the ORM used by Ruby on Rails, will automatically create additional columns for id, created_at, and updated_at.

To update your databse with your new model, run the following command in Terminal or Gitbash:

```
rake db:migrate
```

<hr>


## Step 5: Seed your database.

Open the file `db/seeds.rb`.

Copy and paste the following code into the seeds.rb file:

```ruby
todoSeeds = [
   {text: "Buy groceries"},
   {text: "Do laundry"},
   {text: "Clean apartment"},
   {text: "Find holy grail"}
]

todoSeeds.each do |todo|
   Todo.create(todo)
end
```

Save the changes you made to the seeds.rb file, navigate to the root directory of your app in Terminal or Gitbash, and run the following command:

```
rake db:seed
```

Open MySQL Workbench. If you look at the todos table in your todo_db, then you should see the todo data has been added to the database.

<hr>


## Step 6: Create a controller.

To create a controller for Todos, run the following command in Terminal or Gitbash:

```
rails generate controller Todos
```

This created a new file - `/app/controllers/todos_controller.rb` - where you will define methods for querying your database and passing the retrieved data to your view templates.

Open todos_controller.rb and add the following code inside of the Todos controller:

```ruby
# getTodoData is a name I chose. It could be "def farley", "def bacon", or "def chicken".

def todoPage
   @todoData = Todo.all
end
```

This method uses the 'Todo' model to GET 'all' of the rows of data from the todos table. It assigns this data to the '@todoData' variable, which will be used in our view template to generate HTML for each row of data.

<hr>


## Step 7: Create a view template.

If you look inside the /app/views directory, you should see another directory named "/todos". This was created at the same time as your controller when you ran the `rails generate controller Todos` command.

Inside the /app/views/todos directory, create two new files:

1. index.html.erb
2. todoPage.html.erb

Copy and paste the following code into index.html.erb:

```erb
<div>
   <h1>Hello my name is Jacob Moore</h1>
   <p>I make Rails apps.</p>
   <hr>
   <a href="/todos">See my todos!</a>
</div>
```

Next, copy and paste the following code into todoPage.html.erb:

```erb
<div>
   <h1>Todos</h1>
   <ul>
      <% @todoData.each do |item| %>
         <li><%= item.text %></li>
      <% end %>
   </ul>
   <hr>
   <a href="/">Return home!</a>
</div>
```

<hr>


## Step 8: Define your routes.

Open `/config/routes.rb`. This is where you define routes for requests that are made to your server. Copy and paste the following code into routes.rb:

```ruby
  get '/' => 'todos#index'

  get '/todos' => 'todos#todoPage'
```

The first line can be read like so:

"When a user makes a `get` request to the `/` (root) route, the app should render the `index.html.erb` template from the /app/views/`todos` directory."

The second line can be read like so:

"When a user makes a `get` request to the `/todos` route, the app should run the `todoPage` method on the Todos controller and render the `todoPage.html.erb` template from the /app/views/`todos` directory." In this case the `#todoPage` segment of the route refers to both the todoPage method in the controller *and* the todoPage view template; these names must match if you want the controller method to interact with the view template.

<hr>


## Step 9: Start up your app!

Run the following command in Terminal or Gitbash:

```
rails server
```

You should be able to visit your site at `localhost:3000`.

<hr>


## BONUS: build api route that returns JSON data.

Copy and paste the following code into the Todos controller:

```ruby
   def todosJSON
      render :json => Todo.all
   end
```

The todosJSON method (which could be named Farley, bacon, or chicken) uses the `Todo` model to GET `all` rows of data from the todos table in the database. It then converts that data to `:json` and sends it as the response.

Add an api endpoint that will trigger the todosJSON method. Copy and paste the following code into `/config/routes.rb` file:

```ruby
  get '/api/todos' => 'todos#todosJSON'
```

Just like with our other routes, the segement following the `#` (in this case todosJSON) must match the name of the controller method you want to trigger when a request is made to that route.