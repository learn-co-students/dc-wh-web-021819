# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all
Retailer.destroy_all

Snack.create(name: "Chicken Fingers", calories: 500, deliciousness: 5)
Snack.create(name: "Tater Tots", calories: 400, deliciousness: 3)
Snack.create(name: "Mozzarella Sticks", calories: 600, deliciousness: 7)

gs = Retailer.create(name: "Girl Scouts", year_established: 1912)
hostess = Retailer.create(name: "Hostess", year_established: 1927)

trefoils = Snack.create(name: "Trefoils", calories: 350, deliciousness: 5, retailer: gs)
thin_mints = Snack.create(name: "Thin Mints", calories: 500, deliciousness: 1, retailer: gs)

twinkies = Snack.create(name: "Twinkies", calories: 400, deliciousness: 4, retailer: hostess)