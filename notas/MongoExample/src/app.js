const mongoose = require('mongoose');

mongoose.connect('mongodb://ken:123@ds159129.mlab.com:59129/devf-example2')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Conectado!");
});

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Product = mongoose.model('Product', ProductSchema);



Product.find((err, products) => {
    if (err) return;
    console.log(products);
});
//5ae28934f1787d3d8cbb30d7

/*Product.findById("sadsadad",
    (err, product) => {
        if (err)
            return;
        else
            console.log(product);
    });*/

const nuevoGans = {
    name: "Gansito",
    description: "Recuerdame",
    price: 25
}

/*Product.findByIdAndUpdate("5ae28934f1787d3d8cbb30d7", nuevoGans,
    (err, product) => {
        if (err)
            return;
        else
            console.log(product);
    });*/

Product.findByIdAndRemove("5ae28934f1787d3d8cbb30d7", nuevoGans,
    (err, product) => {
        if (err)
            return;
        else
            console.log(product);
    });


/*Product.create(product1, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});*/