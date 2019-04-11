# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create([
  {name: "Purrfect", breed: 'cat', fluffiness: 0, image:'https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/08/ugly-cat-sphynx-2.jpg'},
  {name: "Shadow", breed: 'Calico', fluffiness: 3, image:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {name: "Scratchy", breed: 'Cartoon', fluffiness: 2, image:'https://img.freepik.com/free-vector/cute-animal-doing-dabbing_23-2147850532.jpg?size=338&ext=jpg'},
  {name: "Jones", breed: 'Tabby', fluffiness: 5, image:'https://images-na.ssl-images-amazon.com/images/I/81bBUCHtQzL._SL1500_.jpg'}
  ])

Hobby.create([
  {name: "Dabbing" , category:"cool cats"},
  {name: "Swimming" , category:"athletics"},
  {name: "Lounging" , category:'restful'}
  ])

CatHobby.create([
  {cat_id: 1, hobby_id: 1},
  {cat_id: 2, hobby_id: 1},
  {cat_id: 3, hobby_id: 1},
  {cat_id: 4, hobby_id: 2},
  {cat_id: 1, hobby_id: 3},
  {cat_id: 3, hobby_id: 2},
  {cat_id: 2, hobby_id: 3},
  {cat_id: 4, hobby_id: 1}
  ])
