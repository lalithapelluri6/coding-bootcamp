Rails.application.routes.draw do

  # When a user makes a GET request to the '/' route, it will render the index.html.erb template from the app/views/todos directory.
  get '/' => 'todos#index'

  # When a user makes a GET request to the '/todos' route, it will first execute the todoPage method in the Todos controller, which retrieves data from our database. It will then pass this data to the view template of the same name - todoPage.html.erb.
  get '/todos' => 'todos#todoPage'


  # BONUS:
  # This route will execute the todosJSON method on the Todos controller, which returns JSON data instead of rendering one of the view templates. This could be used to build a decoupled app with a React front end :o
  get '/api/todos' => 'todos#todosJSON'

end
