# Wish Seeds
# =============================
wishes = [
   {text: "Win lottery"},
   {text: "Find Holy Grail"},
   {text: "Free Genie"}
]
 
# Loops through the wishes array and uses the Wish model to create a new row in the database for each item in the array. Note that the key/value pairs match the columns defined for the Wishes table.
wishes.each do |wish|
   Wish.create(wish)
end