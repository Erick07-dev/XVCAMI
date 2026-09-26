import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
    Check,
    Heart,
    Send,
    Users,
    Sparkles
} from "lucide-react";


/* =========================================================
   PARTÍCULAS PARA LA CONFIRMACIÓN
========================================================= */

const particles = Array.from(
    { length: 18 },
    (_, index) => index
);


export default function RSVP() {

    const [formData, setFormData] = useState({
        nombre: "",
        asistencia: "si",
        invitados: 1,
        mensaje: ""
    });


    const [sent, setSent] =
        useState(false);


    const [loading, setLoading] =
        useState(false);


    const [error, setError] =
        useState("");


    const API_URL =
        import.meta.env.VITE_API_URL;


    /* =====================================================
       CAMBIOS DEL FORMULARIO
    ===================================================== */

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        setFormData({
            ...formData,
            [name]: value
        });
    };


    /* =====================================================
       GUARDAR CONFIRMACIÓN
    ===================================================== */

    const handleSubmit = async (event) => {

        event.preventDefault();


        try {

            setLoading(true);

            setError("");


            const datos = {

                nombre:
                    formData.nombre,

                asistencia:
                    formData.asistencia,

                invitados:
                    formData.asistencia === "si"
                        ? Number(formData.invitados)
                        : 0,

                mensaje:
                    formData.mensaje
            };


            /*
                IMPORTANTE:

                No mostramos la confirmación
                hasta que el backend responda
                correctamente.
            */

            const response =
                await axios.post(
                    `${API_URL}/api/confirmaciones`,
                    datos
                );


            console.log(
                "Guardado en MongoDB:",
                response.data
            );


            setSent(true);


        } catch (error) {

            console.error(
                "Error:",
                error
            );


            setError(
                error.response?.data?.error ||
                "No se pudo guardar la confirmación."
            );


        } finally {

            setLoading(false);

        }

    };


    /* =====================================================
       VOLVER AL FORMULARIO
    ===================================================== */

    const handleModify = () => {

        setSent(false);

        setError("");

    };


    /* =====================================================
       CONFIRMACIÓN PREMIUM
    ===================================================== */

    if (sent) {

        const attending =
            formData.asistencia === "si";


        return (

            <section className="rsvp-section rsvp-premium-result">


                {/* =========================================
                    PÉTALOS / DESTELLOS
                ========================================= */}

                <div className="rsvp-particles">

                    {particles.map((particle) => {

                        const left =
                            6 + ((particle * 17) % 88);

                        const delay =
                            (particle % 7) * 0.13;

                        const duration =
                            3.8 + (particle % 5) * 0.35;


                        return (

                            <motion.span
                                key={particle}

                                className={
                                    particle % 3 === 0
                                        ? "rsvp-particle rsvp-petal"
                                        : "rsvp-particle rsvp-spark"
                                }

                                style={{
                                    left: `${left}%`
                                }}

                                initial={{
                                    opacity: 0,
                                    y: -40,
                                    rotate: 0,
                                    scale: 0.5
                                }}

                                animate={{
                                    opacity: [
                                        0,
                                        0.8,
                                        0.8,
                                        0
                                    ],

                                    y: [
                                        -40,
                                        120,
                                        300,
                                        520
                                    ],

                                    x:
                                        particle % 2 === 0
                                            ? [0, 25, -15, 15]
                                            : [0, -25, 15, -15],

                                    rotate: [
                                        0,
                                        120,
                                        250,
                                        360
                                    ],

                                    scale: [
                                        0.5,
                                        1,
                                        0.9,
                                        0.6
                                    ]
                                }}

                                transition={{
                                    duration,
                                    delay,
                                    repeat: Infinity,
                                    repeatDelay: 1.5,
                                    ease: "easeInOut"
                                }}
                            >

                                {particle % 3 === 0
                                    ? ""
                                    : "✦"}

                            </motion.span>

                        );

                    })}

                </div>


                {/* =========================================
                    TARJETA
                ========================================= */}

                <motion.div
                    className="rsvp-premium-card"

                    initial={{
                        opacity: 0,
                        y: 45,
                        scale: 0.90
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >


                    {/* BRILLO */}

                    <motion.div
                        className="rsvp-success-glow"

                        initial={{
                            opacity: 0,
                            scale: 0
                        }}

                        animate={{
                            opacity: [
                                0,
                                0.7,
                                0.25
                            ],

                            scale: [
                                0,
                                1.5,
                                1
                            ]
                        }}

                        transition={{
                            duration: 1.3,
                            ease: "easeOut"
                        }}
                    />


                    {/* ICONO */}

                    <motion.div
                        className={
                            attending
                                ? "rsvp-premium-check"
                                : "rsvp-premium-heart"
                        }

                        initial={{
                            scale: 0,
                            rotate: -20
                        }}

                        animate={{
                            scale: 1,
                            rotate: 0
                        }}

                        transition={{
                            delay: 0.25,
                            duration: 0.65,
                            type: "spring",
                            stiffness: 160
                        }}
                    >

                        {attending ? (

                            <Check size={35} />

                        ) : (

                            <Heart size={31} />

                        )}

                    </motion.div>


                    {/* PEQUEÑO ENCABEZADO */}

                    <motion.p
                        className="rsvp-premium-small"

                        initial={{
                            opacity: 0,
                            y: 10
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.4
                        }}
                    >

                        {attending
                            ? "RESPUESTA REGISTRADA"
                            : "GRACIAS POR RESPONDER"}

                    </motion.p>


                    {/* TÍTULO */}

                    <motion.h2
                        className="rsvp-premium-title"

                        initial={{
                            opacity: 0,
                            y: 15
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.5
                        }}
                    >

                        {attending
                            ? "Asistencia confirmada"
                            : "Te tendremos presente"}

                    </motion.h2>


                    {/* DIVISOR */}

                    <motion.div
                        className="rsvp-premium-divider"

                        initial={{
                            opacity: 0,
                            scaleX: 0
                        }}

                        animate={{
                            opacity: 1,
                            scaleX: 1
                        }}

                        transition={{
                            delay: 0.65,
                            duration: 0.7
                        }}
                    >

                        <span />

                        <i>✦</i>

                        <span />

                    </motion.div>


                    {/* NOMBRE */}

                    <motion.p
                        className="rsvp-premium-name"

                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: 1
                        }}

                        transition={{
                            delay: 0.75
                        }}
                    >

                        {formData.nombre}

                    </motion.p>


                    {/* MENSAJE */}

                    <motion.p
                        className="rsvp-premium-message"

                        initial={{
                            opacity: 0,
                            y: 12
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.85
                        }}
                    >

                        {attending ? (
                            <>
                                Gracias por acompañarme
                                en este momento tan especial.
                                <br />

                                Será un día lleno de recuerdos
                                que guardaré para siempre.
                            </>
                        ) : (
                            <>
                                Gracias por tomarte el tiempo
                                de responder a mi invitación.
                                <br />

                                Aunque no puedas acompañarme,
                                agradezco mucho tus buenos deseos.
                            </>
                        )}

                    </motion.p>


                    {/* NÚMERO DE PERSONAS */}

                    {attending && (

                        <motion.div
                            className="rsvp-premium-guests"

                            initial={{
                                opacity: 0,
                                y: 10
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: 0.95
                            }}
                        >

                            <Users size={16} />

                            <span>

                                {Number(formData.invitados) === 1
                                    ? "1 persona confirmada"
                                    : `${formData.invitados} personas confirmadas`}

                            </span>

                        </motion.div>

                    )}


                    {/* FIRMA */}

                    <motion.div
                        className="rsvp-premium-signature"

                        initial={{
                            opacity: 0,
                            y: 10
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 1
                        }}
                    >

                        <Sparkles size={13} />

                        <strong>
                            Camila
                        </strong>

                        <span>
                            ♡
                        </span>

                    </motion.div>


                    {/* MODIFICAR */}

                    <motion.button
                        type="button"

                        className="rsvp-premium-modify"

                        onClick={handleModify}

                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: 1
                        }}

                        transition={{
                            delay: 1.1
                        }}

                        whileHover={{
                            scale: 1.03,
                            y: -2
                        }}

                        whileTap={{
                            scale: 0.97
                        }}
                    >

                        MODIFICAR RESPUESTA

                    </motion.button>


                </motion.div>

            </section>

        );

    }


    /* =====================================================
       FORMULARIO RSVP
    ===================================================== */

    return (

        <section className="rsvp-section">

            <motion.div
                className="rsvp-content"

                initial={{
                    opacity: 0,
                    y: 50
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: false,
                    amount: 0.15
                }}

                transition={{
                    duration: 0.9
                }}
            >


                <div className="rsvp-icon">

                    <Heart size={28} />

                </div>


                <p className="rsvp-small">

                    RSVP

                </p>


                <h2>

                    Confirma tu asistencia

                </h2>


                <div className="rsvp-divider">

                    <span>✦</span>

                    <div />

                    <span>✦</span>

                </div>


                <p className="rsvp-message">

                    Tu presencia hará este día
                    todavía más especial.
                    Por favor confirma tu asistencia.

                </p>


                <motion.form
                    className="rsvp-form"

                    onSubmit={handleSubmit}

                    initial={{
                        opacity: 0,
                        scale: 0.96
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: false,
                        amount: 0.1
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >


                    {/* NOMBRE */}

                    <div className="form-group">

                        <label htmlFor="nombre">

                            NOMBRE COMPLETO

                        </label>


                        <input
                            id="nombre"
                            type="text"
                            name="nombre"

                            placeholder="Escribe tu nombre"

                            value={
                                formData.nombre
                            }

                            onChange={
                                handleChange
                            }

                            required
                        />

                    </div>


                    {/* ASISTENCIA */}

                    <div className="form-group">

                        <label>

                            ¿ASISTIRÁS?

                        </label>


                        <div className="attendance-options">


                            <label
                                className={`attendance-card ${
                                    formData.asistencia === "si"
                                        ? "selected"
                                        : ""
                                }`}
                            >

                                <input
                                    type="radio"

                                    name="asistencia"

                                    value="si"

                                    checked={
                                        formData.asistencia === "si"
                                    }

                                    onChange={
                                        handleChange
                                    }
                                />


                                <span className="attendance-icon">

                                    ♡

                                </span>


                                <strong>

                                    Sí, asistiré

                                </strong>


                                <small>

                                    ¡Nos vemos ahí!

                                </small>

                            </label>


                            <label
                                className={`attendance-card ${
                                    formData.asistencia === "no"
                                        ? "selected"
                                        : ""
                                }`}
                            >

                                <input
                                    type="radio"

                                    name="asistencia"

                                    value="no"

                                    checked={
                                        formData.asistencia === "no"
                                    }

                                    onChange={
                                        handleChange
                                    }
                                />


                                <span className="attendance-icon">

                                    ✦

                                </span>


                                <strong>

                                    No podré asistir

                                </strong>


                                <small>

                                    Gracias por invitarme

                                </small>

                            </label>

                        </div>

                    </div>


                    {/* INVITADOS */}

                    {formData.asistencia === "si" && (

                        <div className="form-group">

                            <label htmlFor="invitados">

                                NÚMERO DE PERSONAS

                            </label>


                            <div className="guest-select">

                                <Users size={19} />


                                <select
                                    id="invitados"

                                    name="invitados"

                                    value={
                                        formData.invitados
                                    }

                                    onChange={
                                        handleChange
                                    }
                                >

                                    <option value="1">
                                        1 persona
                                    </option>

                                    <option value="2">
                                        2 personas
                                    </option>

                                    <option value="3">
                                        3 personas
                                    </option>

                                    <option value="4">
                                        4 personas
                                    </option>

                                    <option value="5">
                                        5 personas
                                    </option>

                                    <option value="6">
                                        6 personas
                                    </option>

                                </select>

                            </div>

                        </div>

                    )}


                    {/* MENSAJE */}

                    <div className="form-group">

                        <label htmlFor="mensaje">

                            MENSAJE PARA CAMILA

                        </label>


                        <textarea
                            id="mensaje"

                            name="mensaje"

                            placeholder="Escribe un mensaje bonito..."

                            rows="5"

                            value={
                                formData.mensaje
                            }

                            onChange={
                                handleChange
                            }
                        />

                    </div>


                    {/* ERROR */}

                    {error && (

                        <p className="rsvp-error">

                            {error}

                        </p>

                    )}


                    {/* BOTÓN */}

                    <button
                        type="submit"

                        className="rsvp-submit"

                        disabled={loading}
                    >

                        <Send size={17} />

                        {loading
                            ? "GUARDANDO..."
                            : "CONFIRMAR ASISTENCIA"}

                    </button>


                </motion.form>


                <p className="rsvp-final">

                    ✦ Esperamos compartir contigo
                    un día inolvidable ✦

                </p>

            </motion.div>

        </section>

    );

}