"""
This is a multiline comment! You can say whatever you want in here.
It accounts for line breaks
"""

# Variables
###################################################################
# variables in python, unlike javascript, do not need variable assignment
# print() is equivalent to console.log()

# Creates a variable with a string "Frankfurter"
title = "Frankfurter"

# Creates a variable with an integer 80
years = 80

# Creates a variable with the boolean value of True
expert_status = True

# Prints a statement adding the variable
print("Nick is a professional " + title)

# Convert the integer years into a string and prints
print("He has been coding for " + str(years) + " years")

# Converts a boolean into a string and prints
print("Expert status: " + str(expert_status))

# An f-string accepts all data types without conversion
# f-strings are similar to template literals within javascript
print(f"Expert status: {expert_status}")

# Interesting stuff - operations

print(42 / 8) # normal division

print(42 // 8) # floor division

print(23 ** 2) # exponentiation

