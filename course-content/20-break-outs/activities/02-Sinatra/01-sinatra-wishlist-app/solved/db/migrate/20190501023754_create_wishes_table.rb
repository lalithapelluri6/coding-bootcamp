class CreateWishesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :wishes do | t |
      t.string :text
      t.datetime :created_at
      t.datetime :updated_at 
    end
  end
end
