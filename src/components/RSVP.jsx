import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Heart,
    Send,
    Users
} from "lucide-react";

export default function RSVP() {

    const [formData, setFormData] = useState({
        nombre: "",
        asistencia: "si",
        invitados: 1,
        mensaje: ""
    });

    const [sent, setSent] = useState(false);

    const [loading, setLoading] =
    useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    const [error, setError] =
    useState("");

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


        const API_URL =
            import.meta.env.VITE_API_URL;


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

    if (sent) {

        return (
            <section className="rsvp-section">

                <motion.div
                    className="rsvp-success"
                    initial={{
                        opacity: 0,
                        scale: 0.85
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.6
                    }}
                >

                    <CheckCircle2
                        size={55}
                    />

                    <p>
                        CONFIRMACIÓN RECIBIDA
                    </p>

                    <h2>
                        ¡Gracias!
                    </h2>

                    <div className="rsvp-divider">

                        <span>✦</span>

                        <div></div>

                        <span>✦</span>

                    </div>

                    <p className="rsvp-success-message">

                        Tu respuesta ha sido registrada.
                        Será un gusto compartir contigo
                        este día tan especial.

                    </p>

                    <button
                        type="button"
                        className="rsvp-again"
                        onClick={() =>
                            setSent(false)
                        }
                    >
                        MODIFICAR RESPUESTA
                    </button>

                </motion.div>

            </section>
        );
    }

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
                    once: true,
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

                    <div></div>

                    <span>✦</span>

                </div>

                <p className="rsvp-message">
                    Tu presencia hará esta noche
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
                        once: true
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

                                <Users
                                    size={19}
                                />

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

                    {error && (
                        <p className="rsvp-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="rsvp-submit"
                        disabled={loading}
                    >

                        <Send size={17} />

                        {loading
                            ? "GUARDANDO..."
                            : "CONFIRMAR ASISTENCIA"
                        }

                    </button>

                </motion.form>


                <p className="rsvp-final">
                    ✦ Esperamos compartir contigo una noche inolvidable ✦
                </p>

            </motion.div>

        </section>
    );
}