class Wish < ActiveRecord::Base

   # This adds a validation to the Wish model that says it is required (i.e. presence => true) to add data into the 'text' column.
   validates :text, :presence => true

   # This is also where you'd normally define relationships between tables (like table associations with Sequelize)
end