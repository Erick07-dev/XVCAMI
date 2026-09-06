const express = require("express");
const router = express.Router();

const Confirmacion =
    require("../models/Confirmacion");


router.post("/", async (req, res) => {

    try {

        const {
            nombre,
            asistencia,
            invitados,
            mensaje
        } = req.body;

        if (!nombre || !asistencia) {

            return res.status(400).json({
                ok: false,
                mensaje:
                    "Nombre y asistencia son obligatorios"
            });

        }

        const nuevaConfirmacion =
            new Confirmacion({
                nombre,
                asistencia,
                invitados:
                    asistencia === "si"
                        ? Number(invitados)
                        : 0,
                mensaje
            });

        const confirmacionGuardada =
            await nuevaConfirmacion.save();

        return res.status(201).json({
            ok: true,
            mensaje:
                "Confirmación guardada correctamente",
            confirmacion:
                confirmacionGuardada
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            ok: false,
            mensaje:
                "Error al guardar la confirmación"
        });

    }

});


router.get("/", async (req, res) => {

    try {

        const confirmaciones =
            await Confirmacion.find()
                .sort({
                    createdAt: -1
                });

        return res.json({
            ok: true,
            confirmaciones
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            ok: false,
            mensaje:
                "Error al obtener confirmaciones"
        });

    }

});


module.exports = router;