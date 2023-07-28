const mongoose = require('mongoose');

const Products = mongoose.Schema({
    //name of the products must be unique...
name:{
    type:String,
    required:true,
    unique:true
},
quantity:{
    type:Number,
    required:true
}


});

module.exports = mongoose.model('Products', Products);