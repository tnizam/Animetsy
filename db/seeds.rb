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

pro1 = Product.create({product_name: "Holographic haku sticker", description: "handmade Holographic haku sticker", price: 10, seller_id: 1});
pro1.photo.attach(io: File.open('app/assets/images/haku.jpg'), filename: 'haku.jpg');

pro2 = Product.create({product_name: "Haikyuu Custom Hightop", description: "handmade Haikyuu Custom Hightop", price: 60, seller_id: 2});
pro2.photo.attach(io: File.open('app/assets/images/hk.jpg'), filename: 'hk.jpg');

pro3 = Product.create({product_name: "Jujutsu Kaisen T-shirt", description: "Handmade Jujutsu Kaisen T-shirt", price: 30, seller_id: 3});
pro3.photo.attach(io: File.open('app/assets/images/jk.jpg'), filename: 'jk.jpg');

pro4 = Product.create({product_name: "Spirited Away Poster", description: "Printed Spirited Away Poster", price: 15, seller_id: 1});
pro4.photo.attach(io: File.open('app/assets/images/sa.jpg'), filename: 'sa.jpg');

pro5 = Product.create({product_name: "DIY Aqua Terrarium Kit", description: "Handmade DIY Aqua Terrarium Kit", price: 35, seller_id: 1});
pro5.photo.attach(io: File.open('app/assets/images/sa2.jpg'), filename: 'sa2.jpg');

pro6 = Product.create({product_name: "Spirited Away Bath House", description: "Handmade BATH HOUSE from Spirited Away -- paper model", price: 50, seller_id: 1});
pro6.photo.attach(io: File.open('app/assets/images/sa3.jpg'), filename: 'sa3.jpg');

pro7 = Product.create({product_name: "Bottled Spirit Pins", description: "Handmade Bottled Spirit Hard Enamel Pins", price: 15, seller_id: 1});
pro7.photo.attach(io: File.open('app/assets/images/sg.jpg'), filename: 'sg.jpg');

pro8 = Product.create({product_name: "Tokyo Ghoul Sticker", description: "Handmade Tokyo Ghoul Sticker", price: 5, seller_id: 1});
pro8.photo.attach(io: File.open('app/assets/images/tg22.jpg'), filename: 'tg22.jpg');

pro9 = Product.create({product_name: "Weathering with You Keychain", description: "Handmade Weathering with You Keychain", price: 10, seller_id: 1});
pro9.photo.attach(io: File.open('app/assets/images/wwy.jpg'), filename: 'wwy.jpg');

pro10 = Product.create({product_name: "Your Name poster", description: "Printed Your Name poster", price: 20, seller_id: 1});
pro10.photo.attach(io: File.open('app/assets/images/yn.jpg'), filename: 'yn.jpg');

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

pro17 = Product.create({product_name: "Your Name Pin", description: "Handmade Your Name Pin", price: 10, seller_id: 1});
pro17.photo.attach(io: File.open('app/assets/images/yn3.jpg'), filename: 'yn3.jpg');

pro18 = Product.create({product_name: "Pokemon Eevee Cap", description: "Handmade Embroidered Pixelated Pokemon Eevee Cap", price: 20, seller_id: 1});
pro18.photo.attach(io: File.open('app/assets/images/ec.jpg'), filename: 'ec.jpg');

pro19 = Product.create({product_name: "Pokemon Eevee pin", description: "Handmade Pokemon Eevee pin", price: 15, seller_id: 1});
pro19.photo.attach(io: File.open('app/assets/images/pk.jpg'), filename: 'pk.jpg');

pro20 = Product.create({product_name: "Kitty Boba Pin", description: "Handmade Kitty Boba Pin", price: 10, seller_id: 1});
pro20.photo.attach(io: File.open('app/assets/images/kb.jpg'), filename: 'kb.jpg');
