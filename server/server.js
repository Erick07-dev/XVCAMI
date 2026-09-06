import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ==========================================
// CONFIGURACIÓN DE RUTAS
// ==========================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ==========================================
// CARGAR .ENV DESDE LA CARPETA SERVER
// ==========================================

dotenv.config({
    path: path.join(__dirname, ".env")
});


// ==========================================
// EXPRESS
// ==========================================

const app = express();


// ==========================================
// MIDDLEWARES
// ==========================================

app.use(cors());
app.use(express.json());


// ==========================================
// CONEXIÓN MONGODB
// ==========================================

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {

    console.error("");
    console.error("❌ ERROR: No se encontró MONGODB_URI");
    console.error("📁 Revisa que exista:");
    console.error(path.join(__dirname, ".env"));
    console.error("");

    process.exit(1);
}

mongoose
    .connect(MONGODB_URI)
    .then(() => {

        console.log("✅ MongoDB conectado correctamente");

    })
    .catch((error) => {

        console.error("❌ Error al conectar con MongoDB:");
        console.error(error.message);

    });


// ==========================================
// MODELO CONFIRMACIÓN
// ==========================================

const confirmacionSchema = new mongoose.Schema({

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
        default: 0,
        min: 0
    },

    mensaje: {
        type: String,
        default: "",
        trim: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }

});

const Confirmacion = mongoose.model(
    "Confirmacion",
    confirmacionSchema
);


// ==========================================
// RUTA PRINCIPAL
// ==========================================

app.get("/api", (req, res) => {

    res.json({

        mensaje: "API XV Camila funcionando 👑",

        estado: "OK"

    });

});


// ==========================================
// GUARDAR CONFIRMACIÓN
// ==========================================

app.post("/api/confirmaciones", async (req, res) => {

    try {

        const {
            nombre,
            asistencia,
            invitados,
            mensaje
        } = req.body;


        // ------------------------------
        // VALIDAR NOMBRE
        // ------------------------------

        if (!nombre || nombre.trim() === "") {

            return res.status(400).json({

                error: "El nombre es obligatorio"

            });

        }


        // ------------------------------
        // VALIDAR ASISTENCIA
        // ------------------------------

        if (!asistencia) {

            return res.status(400).json({

                error: "Debes indicar si asistirás"

            });

        }


        if (
            asistencia !== "si" &&
            asistencia !== "no"
        ) {

            return res.status(400).json({

                error:
                    "La asistencia debe ser 'si' o 'no'"

            });

        }


        // ------------------------------
        // CREAR CONFIRMACIÓN
        // ------------------------------

        const nuevaConfirmacion =
            new Confirmacion({

                nombre: nombre.trim(),

                asistencia,

                invitados:
                    asistencia === "si"
                        ? Math.max(Number(invitados) || 1, 1)
                        : 0,

                mensaje:
                    mensaje
                        ? mensaje.trim()
                        : ""

            });


        // ------------------------------
        // GUARDAR
        // ------------------------------

        const confirmacionGuardada =
            await nuevaConfirmacion.save();


        // ------------------------------
        // RESPUESTA
        // ------------------------------

        res.status(201).json({

            mensaje:
                "Confirmación registrada correctamente",

            confirmacion:
                confirmacionGuardada

        });


    } catch (error) {

        console.error(
            "❌ Error al guardar confirmación:",
            error
        );

        res.status(500).json({

            error:
                "Error al guardar la confirmación"

        });

    }

});


// ==========================================
// OBTENER CONFIRMACIONES
// ==========================================

app.get(
    "/api/confirmaciones",
    async (req, res) => {

        try {

            const confirmaciones =
                await Confirmacion
                    .find()
                    .sort({
                        fecha: -1
                    });


            res.json(confirmaciones);


        } catch (error) {

            console.error(
                "❌ Error al obtener confirmaciones:",
                error
            );

            res.status(500).json({

                error:
                    "Error al obtener las confirmaciones"

            });

        }

    }
);


// ==========================================
// ESTADÍSTICAS
// ==========================================

app.get(
    "/api/confirmaciones/estadisticas",
    async (req, res) => {

        try {

            const total =
                await Confirmacion.countDocuments();


            const asistentes =
                await Confirmacion.countDocuments({

                    asistencia: "si"

                });


            const noAsistentes =
                await Confirmacion.countDocuments({

                    asistencia: "no"

                });


            const confirmaciones =
                await Confirmacion.find({

                    asistencia: "si"

                });


            let totalInvitados = 0;


            confirmaciones.forEach(
                (confirmacion) => {

                    totalInvitados +=
                        confirmacion.invitados || 1;

                }
            );


            res.json({

                totalConfirmaciones: total,

                asistentes: asistentes,

                noAsistentes: noAsistentes,

                totalInvitados: totalInvitados

            });


        } catch (error) {

            console.error(
                "❌ Error al obtener estadísticas:",
                error
            );

            res.status(500).json({

                error:
                    "Error al obtener estadísticas"

            });

        }

    }
);


// ==========================================
// ERROR 404
// ==========================================

app.use((req, res) => {

    res.status(404).json({

        error: "Ruta no encontrada"

    });

});


// ==========================================
// SERVIDOR
// ==========================================

const PORT =
    process.env.PORT || 3001;


app.listen(PORT, () => {

    console.log("");

    console.log(
        "===================================="
    );

    console.log(
        "       👑 XV CAMILA - API 👑"
    );

    console.log(
        "===================================="
    );

    console.log("");

    console.log(
        `🚀 Servidor: http://localhost:${PORT}`
    );

    console.log(
        `🔗 API: http://localhost:${PORT}/api`
    );

    console.log(
        `💌 Confirmaciones: http://localhost:${PORT}/api/confirmaciones`
    );

    console.log("");

    console.log(
        "===================================="
    );

    console.log("");

});
