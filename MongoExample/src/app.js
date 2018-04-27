const mongoose = require('mongoose');

//hola12345
mongoose.connect('mongodb://Senkar137:hola12345@ds259079.mlab.com:59079/devf-example-senkar');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Conectado.")
});

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

const Product = mongoose.model('Product', ProductSchema);

const newGansito = {
    name: "Gansito",
    description: 'Recuerdame',
    price: 23
};

const product2 = {
    name: "Mantecada",
    description: 'A quien no le gusta',
    price: 25
};

// Product.create(product1, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//   });

//   Product.create(product2, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//   });

  

// Product.find((err, products) =>{
//     if (err) return console.log(err)
//     console.log(products)
// });

Product.findByIdAndUpdate('5ae28f391d339f1098c9ea72',newGansito, (err, product) =>{
    if (err) return console.log(err)
    console.log(product)
});

Product.findByIdAndUpdate('5ae28f391d339f1098c9ea72', (err, product) =>{
    if (err) return console.log(err)
    console.log(product)
});
