const express = require("express");
const Appointments = require('../Models/appointments.model');
require('dotenv').config();



// publish an appointment
exports.postAnAppointment = async (req, res) => {
    try {
        const data = req.body;
        const appointment = await Appointments.create(data);
        res.status(200).json({
            status: "Successful",
            message: "Data added Successfully",
            data: appointment
        });
    } catch (error) {
        res.json(error);
    }
}


// get single appointment
exports.getSingleAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const appointment = await Appointments.findOne(query);
        return res.status(200).json(appointment);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all appointments
exports.getAllAppointments = async (req, res) => {
    const query = {};
    const appointments = await Appointments.find(query);
    res.send(appointments);
}


// delete an appointment
exports.deleteAnAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Appointments.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}

