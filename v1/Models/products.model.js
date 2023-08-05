const mongoose = require("mongoose");
const validator = require("validator");


const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "name is required"],
        },
        category: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            required: [false, "Description is required"],
            trim: true,
        },
        sku: {
            type: String,
            required: [true, "SKU is required"],
        },
        specifications: [{
            width: { type: String },
            height: { type: String },
        }],
        variants: [{
            size: { type: String },
            color: { type: String },
            material: { type: String },
        }],
        tags: [{ type: String }],
        description: {
            type: String,
            required: [true, "Description is Required"],
            trim: true,
        },
        image: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please Provide Product Image URL"],
        },
        gallery: {
            required: false,
            type: String,
            validate: [validator.isURL, "Please Provide More Product Image URL"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        stock: {
            type: Number,
            required: [true, "Stock is required"],
        },
        createdAt: {
            type: String,
            trim: true,
        },

    },
    {
        timestamps: true,
    }

);


const Products = mongoose.model("products", productSchema);

module.exports = Products;