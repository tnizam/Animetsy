# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

demo = User.create(
    first_name: 'Demo User',
    email: 'demoUser@gmail.com',
    password: 'password'
)

pro1 = Product.create({product_name: "Pokemon Terrarium", description: "handmade pokemon terrarium", price: 30, seller_id: 1});
pro1.photo.attach(io: File.open('app/assets/images/totoro-terr.jpg'), filename: 'totoro-terr.jpg');

pro2 = Product.create({product_name: "Totoro Terrarium", description: "handmade totoro terrarium", price: 30, seller_id: 2});
pro2.photo.attach(io: File.open('app/assets/images/poke-terr.jpg'), filename: 'poke-terr.jpg');

pro3 = Product.create({product_name: "Pokeball Espeon Terrarium", description: "Handmade Pokeball Espeon Terrarium", price: 50, seller_id: 3});
pro3.photo.attach(io: File.open('app/assets/images/espeon.jpg'), filename: 'espeon.jpg');

pro4 = Product.create({product_name: "Pokeball Flareon Terrarium", description: "Handmade Pokeball Flareon Terrarium", price: 50, seller_id: 1});
pro4.photo.attach(io: File.open('app/assets/images/flareon.jpg'), filename: 'flareon.jpg');

pro5 = Product.create({product_name: "Pokeball glaceon Terrarium", description: "Handmade Pokeball glaceon Terrarium", price: 50, seller_id: 1});
pro5.photo.attach(io: File.open('app/assets/images/glaceon.jpg'), filename: 'glaceon.jpg');

pro6 = Product.create({product_name: "Pokeball jolteon Terrarium", description: "Handmade Pokeball jolteon Terrarium", price: 50, seller_id: 1});
pro6.photo.attach(io: File.open('app/assets/images/jolteon.jpg'), filename: 'jolteon.jpg');

pro7 = Product.create({product_name: "Pokeball leafeon Terrarium", description: "Handmade Pokeball leafeon Terrarium", price: 50, seller_id: 1});
pro7.photo.attach(io: File.open('app/assets/images/leafeon.jpg'), filename: 'leafeon.jpg');

pro8 = Product.create({product_name: "Pokeball sylveon Terrarium", description: "Handmade Pokeball sylveon Terrarium", price: 50, seller_id: 1});
pro8.photo.attach(io: File.open('app/assets/images/sylveon.jpg'), filename: 'sylveon.jpg');

pro9 = Product.create({product_name: "Pokeball umbreon Terrarium", description: "Handmade Pokeball umbreon Terrarium", price: 50, seller_id: 1});
pro9.photo.attach(io: File.open('app/assets/images/umbreon.jpg'), filename: 'umbreon.jpg');

pro10 = Product.create({product_name: "Pokeball vaporeon Terrarium", description: "Handmade Pokeball vaporeon Terrarium", price: 50, seller_id: 1});
pro10.photo.attach(io: File.open('app/assets/images/vaporeon.jpg'), filename: 'vaporeon.jpg');

pro11 = Product.create({product_name: "My Hero Academia Face Mask", description: "Handmade My Hero Academia Face Mask", price: 15, seller_id: 1});
pro11.photo.attach(io: File.open('app/assets/images/mha.jpg'), filename: 'mha.jpg');

pro12 = Product.create({product_name: "Haikyu Lamp", description: "LED Haikyu Lamp", price: 60, seller_id: 1});
pro12.photo.attach(io: File.open('app/assets/images/haikyu1.jpg'), filename: 'haikyu1.jpg');

pro13 = Product.create({product_name: "HunterxHunter Stickers", description: "Handmade HunterXHunter Stickers", price: 10, seller_id: 1});
pro13.photo.attach(io: File.open('app/assets/images/hh.jpg'), filename: 'hh.jpg');

pro14 = Product.create({product_name: "Naruto Air Pod Case", description: "Naruto Air Pod Case", price: 50, seller_id: 1});
pro14.photo.attach(io: File.open('app/assets/images/naruto-ipod.jpg'), filename: 'naruto-ipod.jpg');

pro15 = Product.create({product_name: "Tokyo Ghoul Sweatshirt", description: "Handmade Tokyo Ghoul Sweatshirt", price: 50, seller_id: 1});
pro15.photo.attach(io: File.open('app/assets/images/tg.jpg'), filename: 'tg.jpg');

pro16 = Product.create({product_name: "One Piece Pin", description: "Handmade One Piece Pin", price: 10, seller_id: 1});
pro16.photo.attach(io: File.open('app/assets/images/op.jpg'), filename: 'op.jpg');
