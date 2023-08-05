const express = require("express");
const appointmentController = require("../Controllers/appointments.controller");
const verifyToken = require("../Middlewares/verifyToken");
const uploader = require("../Middlewares/Uploader");
const multer  = require('multer')
const router = express.Router();


// publish a product
router.post("/", appointmentController.postAnAppointment);

// get all products
router.get("/", appointmentController.getAllAppointments);

// get single product
router.get("/:id", appointmentController.getSingleAppointment);

// delete a product
router.delete("/:id", appointmentController.deleteAnAppointment);




module.exports = router;