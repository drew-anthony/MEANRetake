const mongoose = require("mongoose");

const ManagerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name: field is required"], minlength: 3, maxlength: 255}, 
    qty: {type: Number, required: [true, "qty: field is required"], min: 0},
    price: {type: Number, required: [true, "price: field is required"], min: 0},
    complete: {type: Boolean, default:false},
   }, {timestamps: true});

mongoose.model('Manager', ManagerSchema);

