const express = require("express");
const Products = require('../Models/products.model');
require('dotenv').config();



// publish a product
exports.publishAProduct = async (req, res) => {
    try {
        const resource = req.file ? req.file.filename : null;
        const { title, category, subCategory, authorName, authorAvatar, authorEmail, description, createdAt, cover, } = req.body;
        // console.log(req.file);
        // console.log(req.body);
        const products = await Products.create({ title, category, subCategory, authorName, authorAvatar, authorEmail, description, createdAt, cover, resource });
        res.status(200).json({
            status: "Successful",
            message: "Data added Successfully",
            data: products
        });
    } catch (error) {
        res.json(error);
    }
}


// get single product
exports.getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const product = await Products.findOne(query);
        return res.status(200).json(product);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all products
exports.getAllproducts = async (req, res) => {
    const query = {};
    const products = await Products.find(query);
    res.send(products)
}


// delete a product
exports.deleteAProduct = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Products.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}


// update a product
exports.updateAProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const filter = { _id: id };
        const options = { upsert: true };
        const updateDoc = {
            $set: { status: 'approve' }
        };
        const result = await Products.updateOne(filter, updateDoc, options);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}

