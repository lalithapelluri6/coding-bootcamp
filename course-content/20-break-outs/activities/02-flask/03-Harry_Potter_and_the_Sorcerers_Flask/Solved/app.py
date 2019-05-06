from flask import Flask, jsonify

## Create a dictionary that holds a list of students at Hogwarts and what house they belong to

hogwarts_students = [
    {"student": "Harry Potter", "house": "Gryffindor"},
    {"student": "Ron Weasley", "house": "Gryffindor"},
    {"student": "Hermione Granger", "house": "Gryffindor"},
    {"student": "Draco Malfoy", "house": "Slytherin"},
    {"student": "Luna Lovegood", "house": "Ravenclaw"},
    {"student": "Neville Longbottom", "house": "Gryffndor"},
    {"student": "Cho Chang", "house": "Ravenclaw"}
]

#################################################
# Flask Setup
#################################################
# @TODO: Initialize your Flask app here
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
# @TODO: Complete the routes for your app here

# Create an API route that displays all students in the dictionary

@app.route("/api/v1.0/hogwarts-students")
def hogwarts():
    """Return the Hogwarts student data as json"""

    return jsonify(hogwarts_students)

# Create a root route that welcomes the user with all available routes. Create an API route for each house.

@app.route("/")
def welcome():
    return (
        f"Welcome to the Hogwarts Students API!<br/>"
        f"Available Routes:<br/>"
        f"<a href='/api/v1.0/hogwarts-students'>Students</a><br/>"
        f"<a href='/api/v1.0/hogwarts-students/house/gryffindor'>Gryffindor</a><br/>"
        f"<a href='/api/v1.0/hogwarts-students/house/ravenclaw'>Ravenclaw</a><br/>"
        f"<a href='/api/v1.0/hogwarts-students/house/hufflepuff'>Hufflepuff</a><br/>"
        f"<a href='/api/v1.0/hogwarts-students/house/slytherin'>Slytherin</a><br/>"
    )

# Handle API route with a variable path that will allow getting all students from a specific house
@app.route("/api/v1.0/hogwarts-students/house/<house>")
def hogwarts_houses(house):
    """Fetch all Hogwart students that match the house name.
       the path variable supplied by the user, or a 404 if not."""
    # Create a empty list to hold the house
    houses = []

    canonicalized = house.lower()
    for house in hogwarts_students:
        search_term = house["house"].lower()

        if search_term == canonicalized:
            # Add the student to the empty list
            houses.append(house)
    # if the houses has data return the houses list
    if len(houses):
        return jsonify(houses)
    # if the houses has no data return an error message
    if not houses:
        return jsonify({"error": f"No students are currently in this house"}), 404

# Handle API route with a variable path that will allow getting info for a specific character based on their name
@app.route("/api/v1.0/hogwarts-students/student/<name>")
def hogwarts_students_names(name):
    """Fetch Hogwarts student that matches the name
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = name.replace(" ", "").lower()
    for character in hogwarts_students:
        search_term = character["student"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": "Character not found."}), 404


if __name__ == "__main__":
    app.run(debug=True)
