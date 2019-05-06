# 1. import Flask
from flask import Flask

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

# 5. Run in Debug mode - similar to nodemon in Node.js. 
# The new school technique is to set an environment variable and run the app with 'flask run'. For simplicity, we will run it the old way and in debug mode
if __name__ == "__main__":
    app.run(debug=True)


# New Technique - in CLI

"""
The updated technique in Version 1.0.2 for initiating the Flask app is to set environment variables that exist as long as the terminal is open.

1.
    export FLASK_APP = app.py (MacOS)
    set FLASK_APP = app.py (Windows)

2.  
    flask run

3. For debug mode,

    export FLASK_DEBUG = 1 (MacOS)
    set FLASK_DEBUG = 1 (Windows)

With the technique above, we would run the server with `flask run` and would exclude lines 22-23.
"""