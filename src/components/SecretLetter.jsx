import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Heart,
    Sparkles,
    Send,
    X,
    UserRound
} from "lucide-react";

import "./SecretLetter.css";

export default function SecretLetter() {

    const [opened, setOpened] = useState(false);

    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const abrirSobre = () => {
        setOpened(true);
    };

    const cerrarSobre = () => {
        setOpened(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre.trim() || !mensaje.trim()) {
            return;
        }

        setEnviando(true);

        /*
        ============================================
        POR AHORA SIMULAMOS EL ENVÍO.

        En el siguiente paso conectaremos esto
        con MongoDB usando tu backend de Render.
        ============================================
        */

        setTimeout(() => {
            setEnviando(false);
            setEnviado(true);
        }, 1300);
    };


    return (

        <section className="xv-wish-section">

            {/* =====================================
                DECORACIONES
            ====================================== */}

            <motion.span
                className="xv-wish-floating xv-wish-star-one"
                animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity
                }}
            >
                ✦
            </motion.span>


            <motion.span
                className="xv-wish-floating xv-wish-star-two"
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity
                }}
            >
                ✧
            </motion.span>


            <motion.span
                className="xv-wish-floating xv-wish-heart-floating"
                animate={{
                    y: [0, -7, 0],
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity
                }}
            >
                ♡
            </motion.span>


            {/* =====================================
                ENCABEZADO
            ====================================== */}

            <motion.div
                className="xv-wish-heading"
                initial={{
                    opacity: 0,
                    y: 30
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: false,
                    amount: 0.2
                }}
                transition={{
                    duration: 0.8
                }}
            >

                <Sparkles
                    size={18}
                    strokeWidth={1.2}
                />

                <p className="xv-wish-eyebrow">
                    UN DETALLE PARA RECORDAR
                </p>

                <h2>
                    Déjame un deseo
                </h2>


                <div className="xv-wish-heading-divider">

                    <span />

                    <Heart
                        size={11}
                        strokeWidth={1}
                    />

                    <span />

                </div>


                <p className="xv-wish-intro">
                    Quiero guardar un pequeño recuerdo
                    de las personas que forman parte
                    de este día tan especial.
                </p>

            </motion.div>


            {/* =====================================
                SOBRE CERRADO
            ====================================== */}

            <AnimatePresence mode="wait">

                {!opened && (

                    <motion.div
                        key="closed-envelope"
                        className="xv-wish-envelope-area"
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92
                        }}
                        transition={{
                            duration: 0.6
                        }}
                    >

                        <motion.button
                            type="button"
                            className="xv-wish-envelope-button"
                            onClick={abrirSobre}
                            whileHover={{
                                y: -5,
                                scale: 1.02
                            }}
                            whileTap={{
                                scale: 0.97
                            }}
                            aria-label="Abrir sobre para dejar un deseo"
                        >

                            <div className="xv-wish-envelope">

                                {/* CARTA INTERIOR */}

                                <div className="xv-wish-preview">

                                    <span className="xv-wish-preview-small">
                                        PARA CAMILA
                                    </span>

                                    <span className="xv-wish-preview-title">
                                        Un deseo
                                    </span>

                                    <span className="xv-wish-preview-heart">
                                        ♡
                                    </span>

                                </div>


                                {/* CUERPO */}

                                <div className="xv-wish-envelope-base" />


                                {/* PLIEGUES */}

                                <div className="xv-wish-envelope-left" />

                                <div className="xv-wish-envelope-right" />

                                <div className="xv-wish-envelope-bottom" />


                                {/* SOLAPA */}

                                <div className="xv-wish-envelope-flap" />


                                {/* SELLO */}

                                <motion.div
                                    className="xv-wish-seal"
                                    animate={{
                                        scale: [1, 1.06, 1]
                                    }}
                                    transition={{
                                        duration: 2.4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    C
                                </motion.div>

                            </div>


                            <div className="xv-wish-open-label">

                                <span>✦</span>

                                TOCA PARA DEJAR TU DESEO

                                <span>✦</span>

                            </div>

                        </motion.button>

                    </motion.div>

                )}


                {/* =================================
                    FORMULARIO
                ================================== */}

                {opened && !enviado && (

                    <motion.div
                        key="wish-form"
                        className="xv-wish-letter-container"
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.92
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: 20
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <div className="xv-wish-letter">

                            {/* CERRAR */}

                            <button
                                type="button"
                                className="xv-wish-close"
                                onClick={cerrarSobre}
                                aria-label="Cerrar"
                            >
                                <X
                                    size={17}
                                    strokeWidth={1.4}
                                />
                            </button>


                            {/* ESQUINAS */}

                            <span className="xv-wish-corner xv-wish-tl" />
                            <span className="xv-wish-corner xv-wish-tr" />
                            <span className="xv-wish-corner xv-wish-bl" />
                            <span className="xv-wish-corner xv-wish-br" />


                            {/* CABECERA */}

                            <motion.div
                                className="xv-wish-letter-icon"
                                initial={{
                                    scale: 0
                                }}
                                animate={{
                                    scale: 1
                                }}
                                transition={{
                                    delay: 0.3,
                                    type: "spring"
                                }}
                            >
                                ♡
                            </motion.div>


                            <p className="xv-wish-letter-small">
                                UN RECUERDO PARA CAMILA
                            </p>


                            <h3>
                                Escribe unas palabras
                            </h3>


                            <p className="xv-wish-letter-description">
                                Tu mensaje se convertirá en un pequeño
                                recuerdo de este día tan especial.
                            </p>


                            <div className="xv-wish-letter-divider">

                                <span />

                                <Heart
                                    size={11}
                                    strokeWidth={1}
                                />

                                <span />

                            </div>


                            {/* FORMULARIO */}

                            <form
                                className="xv-wish-form"
                                onSubmit={handleSubmit}
                            >

                                {/* NOMBRE */}

                                <label
                                    className="xv-wish-field"
                                >

                                    <span className="xv-wish-field-label">

                                        <UserRound
                                            size={14}
                                            strokeWidth={1.3}
                                        />

                                        TU NOMBRE

                                    </span>


                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                        placeholder="Escribe tu nombre"
                                        maxLength={60}
                                        required
                                    />

                                </label>


                                {/* MENSAJE */}

                                <label
                                    className="xv-wish-field"
                                >

                                    <span className="xv-wish-field-label">

                                        <Heart
                                            size={14}
                                            strokeWidth={1.3}
                                        />

                                        TU DESEO PARA CAMILA

                                    </span>


                                    <textarea
                                        value={mensaje}
                                        onChange={(e) =>
                                            setMensaje(e.target.value)
                                        }
                                        placeholder="Escribe aquí unas palabras para Camila..."
                                        maxLength={500}
                                        required
                                    />


                                    <span className="xv-wish-counter">
                                        {mensaje.length}/500
                                    </span>

                                </label>


                                {/* BOTÓN */}

                                <motion.button
                                    type="submit"
                                    className="xv-wish-send"
                                    disabled={enviando}
                                    whileHover={{
                                        scale: 1.02
                                    }}
                                    whileTap={{
                                        scale: 0.97
                                    }}
                                >

                                    {enviando ? (

                                        <>
                                            <span className="xv-wish-loader" />

                                            GUARDANDO DESEO...
                                        </>

                                    ) : (

                                        <>
                                            <Send
                                                size={15}
                                                strokeWidth={1.4}
                                            />

                                            ENVIAR MI DESEO
                                        </>

                                    )}

                                </motion.button>

                            </form>


                            <p className="xv-wish-private">
                                ♡ Tu mensaje será guardado como
                                un recuerdo especial.
                            </p>

                        </div>

                    </motion.div>

                )}


                {/* =================================
                    MENSAJE ENVIADO
                ================================== */}

                {enviado && (

                    <motion.div
                        key="wish-success"
                        className="xv-wish-success"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        {/* DESTELLOS */}

                        <motion.span
                            className="xv-success-magic magic-one"
                            animate={{
                                scale: [0, 1.3, 0],
                                rotate: [0, 90, 180]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity
                            }}
                        >
                            ✦
                        </motion.span>


                        <motion.span
                            className="xv-success-magic magic-two"
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: 0.8
                            }}
                        >
                            ✧
                        </motion.span>


                        <motion.div
                            className="xv-success-heart"
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: [0, 1.15, 1]
                            }}
                            transition={{
                                duration: 0.8
                            }}
                        >
                            ♡
                        </motion.div>


                        <p className="xv-success-small">
                            CON MUCHO CARIÑO
                        </p>


                        <h3>
                            Tu deseo ha sido guardado
                        </h3>


                        <div className="xv-success-divider">

                            <span />

                            <Sparkles
                                size={13}
                                strokeWidth={1.2}
                            />

                            <span />

                        </div>


                        <p className="xv-success-message">
                            Gracias por dejarme unas palabras
                            que podré guardar como recuerdo
                            de este día tan especial.
                        </p>


                        <p className="xv-success-signature">
                            Camila
                        </p>


                        <motion.div
                            className="xv-success-last-heart"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity
                            }}
                        >
                            ♡
                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}