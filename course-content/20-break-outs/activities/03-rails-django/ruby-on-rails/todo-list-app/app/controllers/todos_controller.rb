# This class is our Todos controller and is created when we run the command "rails generate controller Todos".

class TodosController < ApplicationController

   # This is a method defined on the Todos controller. It uses the Todo model to GET all of the data from the todos table and assigns that data to the @todoData variable. This @todoData variable will be used in our viewTemplate to dynamically generate some HTML similar to what we've done in Handlebars and React.
   def todoPage
      @todoData = Todo.all
   end

   # BONUS:
   # This is another method on the Todos controller. It uses the Todo model to GET all of the data from the todos table, converts it to JSON, and returns that JSON as a response to the client's request.
   def todosJSON
      render :json => Todo.all
   end
end


# With JavaScript, Node, Sequelize, and Handlebars, the todoPage method would look something like this (assume todoPage is a key on an object that is being exported from a controller file):

# todoPage: function() {
#    db.Todo.find({})
#       .then(todoData => {
#          res.render("todoPage", { todos: todoData });
#       })
#       .catch(error => {
#          res.json(error);
#       });
# }


# The todosJSON method would look something like this:

# todosJSON: function() {
#    db.Todo.find({})
#       .then(todoData => {
#          res.json(todoData);
#       })
#       .catch(error => {
#          res.json(error);
#       });
# }