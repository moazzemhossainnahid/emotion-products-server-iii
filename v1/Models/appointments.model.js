const mongoose = require("mongoose");
const validator = require("validator");


const appointmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "name is required"],
        },
        product: {
            type: String,
            required: [true, "product is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
        },
        phone: {
            type: String,
            required: [true, "phone is required"],
            trim: true,
        },
        address: {
            type: String,
            required: [true, "address is required"],
            trim: true,
        },
        message: {
            type: String,
            required: [true, "message is required"],
            trim: true,
        },

    },
    {
        timestamps: true,
    }

);


const Appointments = mongoose.model("appointments", appointmentSchema);

module.exports = Appointments;