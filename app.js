const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');
require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');



app.use(cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://emotion-products-server-iii.vercel.app',
      changeOrigin: true,
    })
  );
  

app.use('/public', express.static('public'))

// import routes
const usersRoute = require('./v1/Routes/users.route');
const productsRoute = require('./v1/Routes/products.route');
const stripeRoute = require('./v1/Routes/stripe.route');
const ordersRoute = require('./v1/Routes/orders.route');
const appointmentsRoute = require('./v1/Routes/appointments.route');





// declare routes
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/stripe', stripeRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/appointments', appointmentsRoute);



app.get("/", (req, res) => {
    try {
        res.send("Welcome to Emotion Products Server !");
    } catch (error) {
        console.log(error.message);
    };
});


app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});


app.listen(PORT, () => {
    try {
        console.log(`server is successfully running on port ${PORT}!`.red.bold);
    } catch (error) {
        console.log(error.message);
    };
});

exports = app;