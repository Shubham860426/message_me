# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(username: "shivam", password: "password1")
User.create(username: "deepak", password: "password2")
User.create(username: "rohit", password: "password3")
User.create(username: "manish", password: "password4")
User.create(username: "sumita", password: "password5")
User.create(username: "John", password: "password6")