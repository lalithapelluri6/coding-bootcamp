# Dependencies
# ============================
require "sinatra/base"
require 'sinatra/activerecord'
require "mysql2"
require "json"
# ============================


# Database Configuration
# =======================
ActiveRecord::Base.establish_connection adapter: 'mysql2', database: 'wishlist_db', host: 'localhost', username: 'root', password: 'password'
# =======================


# Require Models
# ==========================
require "./models/wishes.rb"
# ==========================


# Instantiate WishlistApp Class
# ===============================
class WishlistApp < Sinatra::Base
   
   # Routes
   
   # When user makes a GET request to the "/" route, renders the index.erb view.
   get "/" do
      erb :index
   end

   # When user makes a GET request to the "/wishlist" route, uses Wish model to get all data from the wishes table. Assigns that data to the @wishData variable. Renders the wishlist.erb view (and passes along the @wishData variable, which is used by the wishlist.erb template to generate HTML for each row of data retrieved from the database).
   get "/wishlist" do
      @wishData = Wish.all

      erb :wishlist
   end
   
end
# ===============================