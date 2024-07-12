const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name :{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, "Price must be provided"],

        },
        // highlighted to be true or false
        featured:{
            type: Boolean,
            default: false,
        },

        rating: {
            type: Number,
            default: 4.9,
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        },

        company: {
            type: String,
            enum: {
                values: ["apple", "samsung", "dell", "hp"],
                message: `{VALUE} is not supported`,
            },
        },

    });
// model method or constructor
    module.exports = mongoose.model("Product", productSchema);