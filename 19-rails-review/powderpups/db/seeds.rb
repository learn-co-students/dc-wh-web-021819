# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sled1 = Sled.create(name: "Cool Runnings")
sled2 = Sled.create(name: "Dastardly & Muttley")

# Dog.create(name: "", breed: "", sled: <sled>)
dog1 = Dog.create(name: "Buck", breed: "Schnauzer", sled: sled1)
dog2 = Dog.create(name: "Paw-l", breed: "Shiba Inu", sled: sled1)
dog3 = Dog.create(name: "Fast Lane", breed: "Chihuahua", sled: sled1)
dog4 = Dog.create(name: "Cuba Gooding Jr.", breed: "Boxer", sled: sled2)
dog5 = Dog.create(name: "Ein", breed: "Corgi", sled: sled2)
