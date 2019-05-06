# todoSeeds is an array of hashes containing the data that will be seeded into the database. Notice the structure of each hash matches the Todo model we created when we ran the command "rails generate model Todo text:string". Our model has one column called "text" that holds string values, and each hash has a key of "text" with a string value.

todoSeeds = [
   {text: "Buy groceries"},
   {text: "Do laundry"},
   {text: "Clean apartment"},
   {text: "Find holy grail"}
]


# This will loop through the todoSeeds array and create one row in the todos table for each item in the array.

todoSeeds.each do |todo|
   Todo.create(todo)
end


# With JavaScript, Node, and Sequelize, this would look something like this:

# todoSeeds.forEach(todo => {
#    db.Todo.create(todo)
#       .then(dbTodo => console.log(dbTodo))
#       .catch(error => console.log(error));
# });


