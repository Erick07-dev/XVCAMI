const mongoose = require("mongoose");

const confirmacionSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        asistencia: {
            type: String,
            enum: ["si", "no"],
            required: true
        },

        invitados: {
            type: Number,
            default: 1,
            min: 0,
            max: 20
        },

        mensaje: {
            type: String,
            default: "",
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Confirmacion",
    confirmacionSchema
);