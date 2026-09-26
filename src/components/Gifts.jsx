import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Gift,
    Heart,
    Sparkles,
    CreditCard,
    ChevronDown,
    Copy,
    Check,
    Crown
} from "lucide-react";

import "./GiftsPremium.css";


export default function Gifts() {

    const [boxOpen, setBoxOpen] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);
    const [copied, setCopied] = useState(false);


    /* =====================================================
       CAMBIA ESTOS DATOS POR LOS REALES
    ===================================================== */

    const bankData = {
        bank: "NOMBRE DEL BANCO",
        beneficiary: "NOMBRE DEL BENEFICIARIO",
        clabe: "TU CLABE AQUÍ"
    };


    /* =====================================================
       COPIAR CLABE
    ===================================================== */

    const copyClabe = async () => {

        try {

            await navigator.clipboard.writeText(
                bankData.clabe.replace(/\s/g, "")
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);

        } catch (error) {

            console.log(
                "No se pudo copiar la CLABE:",
                error
            );

        }

    };


    return (

        <section className="xv-wish-section">


            {/* ==========================================
                LUCES DE FONDO
            ========================================== */}

            <div className="xv-wish-glow xv-wish-glow-one" />
            <div className="xv-wish-glow xv-wish-glow-two" />


            {/* ==========================================
                PARTÍCULAS DE FONDO
            ========================================== */}

            <div className="xv-wish-background-stars">

                <span>✦</span>
                <span>♡</span>
                <span>✧</span>
                <span>✦</span>
                <span>♡</span>
                <span>✧</span>

            </div>



            {/* ==========================================
                ENCABEZADO
            ========================================== */}

            <motion.div
                className="xv-wish-header"

                initial={{
                    opacity: 0,
                    y: 35
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
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                <motion.div
                    className="xv-wish-crown"

                    animate={{
                        y: [0, -5, 0],
                        rotate: [0, -2, 2, 0]
                    }}

                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >

                    <Crown
                        size={27}
                        strokeWidth={1.2}
                    />

                </motion.div>


                <p className="xv-wish-small">
                    UN DETALLE PARA MÍ
                </p>


                <h2>
                    Lluvia de sobres
                </h2>


                <div className="xv-wish-divider">

                    <span />

                    <i>✦</i>

                    <span />

                </div>


                <p className="xv-wish-intro">
                    Tu presencia en este día tan especial
                    es el regalo más importante para mí.
                </p>

            </motion.div>



            {/* ==========================================
                EXPERIENCIA PRINCIPAL
            ========================================== */}

            <motion.div
                className={`xv-wish-card ${
                    boxOpen
                        ? "xv-wish-card-open"
                        : ""
                }`}

                initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.97
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}

                viewport={{
                    once: false,
                    amount: 0.12
                }}

                transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >


                {/* ESQUINAS */}

                <span className="xv-wish-corner xv-wish-tl">
                    ✦
                </span>

                <span className="xv-wish-corner xv-wish-tr">
                    ✦
                </span>

                <span className="xv-wish-corner xv-wish-bl">
                    ✦
                </span>

                <span className="xv-wish-corner xv-wish-br">
                    ✦
                </span>



                {/* ======================================
                    ESCENA 3D
                ====================================== */}

                <div className="xv-gift-scene">


                    {/* LUZ MÁGICA */}

                    <motion.div
                        className="xv-box-light"

                        animate={{
                            opacity:
                                boxOpen ? -185 : 75,

                            scale:
                                boxOpen ? 1.08 : 0.65,
                        }}

                        transition={{
                            duration: 1.3
                        }}
                    />



                    {/* PARTÍCULAS AL ABRIR */}

                    <AnimatePresence>

                        {boxOpen && (

                            <motion.div
                                className="xv-box-magic"

                                initial={{
                                    opacity: 0
                                }}

                                animate={{
                                    opacity: 1
                                }}

                                exit={{
                                    opacity: 0
                                }}
                            >

                                {[...Array(18)].map((_, index) => {

                                    const angle =
                                        (index / 18) *
                                        Math.PI *
                                        2;

                                    const distance =
                                        75 +
                                        (index % 4) * 20;

                                    return (

                                        <motion.span
                                            key={index}

                                            initial={{
                                                x: 0,
                                                y: 30,
                                                opacity: 0,
                                                scale: 0
                                            }}

                                            animate={{
                                                x:
                                                    Math.cos(angle) *
                                                    distance,

                                                y:
                                                    Math.sin(angle) *
                                                        distance -
                                                    60,

                                                opacity: [
                                                    0,
                                                    1,
                                                    1,
                                                    0
                                                ],

                                                scale: [
                                                    0,
                                                    1.2,
                                                    0.8
                                                ],

                                                rotate:
                                                    index * 30
                                            }}

                                            transition={{
                                                duration:
                                                    2 +
                                                    (index % 4) *
                                                        0.2,

                                                delay:
                                                    index * 0.035,

                                                ease:
                                                    "easeOut"
                                            }}
                                        >

                                            {
                                                index % 4 === 0
                                                    ? "♡"
                                                    : index % 5 === 0
                                                        ? "🦋"
                                                        : "✦"
                                            }

                                        </motion.span>

                                    );

                                })}

                            </motion.div>

                        )}

                    </AnimatePresence>



                    {/* ======================================
                        TARJETA QUE SALE DE LA CAJA
                    ====================================== */}

                    <motion.div
                        className="xv-wish-letter"

                        animate={{

                            y:
                                boxOpen
                                    ? -145
                                    : 40,

                            opacity:
                                boxOpen
                                    ? 1
                                    : 0,

                            scale:
                                boxOpen
                                    ? 1
                                    : 0.75,

                            rotate:
                                boxOpen
                                    ? 0
                                    : -3

                        }}

                        transition={{
                            duration: 0.85,
                            delay:
                                boxOpen
                                    ? 0.25
                                    : 0,

                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <Crown
                            size={16}
                            strokeWidth={1.1}
                        />

                        <small>
                            PARA
                        </small>

                        <strong>
                            Camila
                        </strong>

                        <div className="xv-letter-divider">
                            <span />
                            <Heart size={10} />
                            <span />
                        </div>

                        <p>
                            Con mucho cariño
                        </p>

                    </motion.div>



                    {/* ======================================
                        CAJA COMPLETA
                    ====================================== */}

                    <motion.button
                        type="button"

                        className={`xv-gift-box ${
                            boxOpen
                                ? "is-open"
                                : ""
                        }`}

                        onClick={() =>
                            setBoxOpen(
                                (current) => !current
                            )
                        }

                        whileHover={{
                            scale: 1.025
                        }}

                        whileTap={{
                            scale: 0.97
                        }}

                        aria-label={
                            boxOpen
                                ? "Cerrar caja"
                                : "Abrir caja"
                        }
                    >


                        {/* SOMBRA */}

                        <div className="xv-box-shadow" />


                        {/* TAPA */}

                        <div className="xv-box-lid">

                            <div className="xv-lid-top" />

                            <div className="xv-lid-front" />

                            <div className="xv-lid-ribbon" />

                            <div className="xv-bow">

                                <span className="xv-bow-left" />
                                <span className="xv-bow-center" />
                                <span className="xv-bow-right" />

                            </div>

                        </div>



                        {/* CUERPO */}

                        <div className="xv-box-body">

                            <div className="xv-box-side-left" />

                            <div className="xv-box-side-right" />

                            <div className="xv-box-front">

                                <div className="xv-box-ribbon-vertical" />


                                {/* PLACA */}

                                <div className="xv-box-plaque">

                                    <span>
                                        ♡
                                    </span>

                                    <strong>
                                        C
                                    </strong>

                                    <small>
                                        MIS XV
                                    </small>

                                </div>

                            </div>

                        </div>


                    </motion.button>



                    {/* ======================================
                        BOTÓN / INDICACIÓN
                    ====================================== */}

                    <motion.div
                        className="xv-box-instruction"

                        animate={{
                            opacity: [
                                0.55,
                                1,
                                0.55
                            ]
                        }}

                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >

                        <Sparkles
                            size={12}
                            strokeWidth={1.2}
                        />

                        <span>
                            {boxOpen
                                ? "TOCA PARA CERRAR"
                                : "TOCA PARA ABRIR"}
                        </span>

                        <Sparkles
                            size={12}
                            strokeWidth={1.2}
                        />

                    </motion.div>

                </div>



                {/* ======================================
                    MENSAJE DESPUÉS DE ABRIR
                ====================================== */}

                <AnimatePresence>

                    {boxOpen && (

                        <motion.div
                            className="xv-wish-message"

                            initial={{
                                opacity: 0,
                                y: 25
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                y: 15
                            }}

                            transition={{
                                duration: 0.65,
                                delay: 0.3
                            }}
                        >

                            <Heart
                                className="xv-wish-heart"
                                size={17}
                                strokeWidth={1.2}
                            />


                            <p>
                                Si deseas tener un detalle conmigo,
                                contaremos con lluvia de sobres
                                durante la celebración.
                            </p>


                            <div className="xv-wish-signature">
                                Camila
                            </div>


                            <span className="xv-wish-date">
                                16 · NOVIEMBRE · 2026
                            </span>


                            {/* ==================================
                                TRANSFERENCIA
                            ================================== */}

                            <div className="xv-digital-gift">

                                <div className="xv-digital-divider">

                                    <span />

                                    <Heart
                                        size={10}
                                        strokeWidth={1.2}
                                    />

                                    <span />

                                </div>


                                <p className="xv-digital-question">
                                    ¿Prefieres dejar tu detalle
                                    de manera digital?
                                </p>


                                <p className="xv-digital-description">
                                    También contamos con opción
                                    de transferencia.
                                </p>


                                <motion.button
                                    type="button"

                                    className={`xv-digital-button ${
                                        showTransfer
                                            ? "active"
                                            : ""
                                    }`}

                                    onClick={() =>
                                        setShowTransfer(
                                            (current) => !current
                                        )
                                    }

                                    whileTap={{
                                        scale: 0.97
                                    }}
                                >

                                    <CreditCard
                                        size={15}
                                        strokeWidth={1.3}
                                    />

                                    <span>
                                        {showTransfer
                                            ? "OCULTAR DATOS"
                                            : "VER TRANSFERENCIA"}
                                    </span>


                                    <motion.div
                                        animate={{
                                            rotate:
                                                showTransfer
                                                    ? 180
                                                    : 0
                                        }}

                                        transition={{
                                            duration: 0.3
                                        }}
                                    >

                                        <ChevronDown
                                            size={15}
                                        />

                                    </motion.div>

                                </motion.button>



                                {/* ==============================
                                    TARJETA BANCARIA
                                ============================== */}

                                <AnimatePresence initial={false}>

                                    {showTransfer && (

                                        <motion.div
                                            className="xv-glass-bank"

                                            initial={{
                                                opacity: 0,
                                                height: 0,
                                                y: -10
                                            }}

                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                                y: 0
                                            }}

                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                                y: -10
                                            }}

                                            transition={{
                                                duration: 0.5,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ]
                                            }}
                                        >

                                            <div className="xv-glass-bank-inner">

                                                <motion.div
                                                    className="xv-bank-sparkle"

                                                    animate={{
                                                        x: [
                                                            "-120%",
                                                            "250%"
                                                        ]
                                                    }}

                                                    transition={{
                                                        duration: 3.5,
                                                        repeat: Infinity,
                                                        repeatDelay: 2
                                                    }}
                                                />


                                                <div className="xv-bank-title">

                                                    <CreditCard
                                                        size={20}
                                                        strokeWidth={1.2}
                                                    />

                                                    <span>
                                                        DETALLE DIGITAL
                                                    </span>

                                                </div>


                                                <div className="xv-bank-item">

                                                    <small>
                                                        BANCO
                                                    </small>

                                                    <strong>
                                                        {bankData.bank}
                                                    </strong>

                                                </div>


                                                <div className="xv-bank-item">

                                                    <small>
                                                        BENEFICIARIO
                                                    </small>

                                                    <strong>
                                                        {bankData.beneficiary}
                                                    </strong>

                                                </div>


                                                <div className="xv-bank-item xv-bank-clabe">

                                                    <small>
                                                        CLABE
                                                    </small>

                                                    <strong>
                                                        {bankData.clabe}
                                                    </strong>

                                                </div>


                                                <motion.button
                                                    type="button"

                                                    className={`xv-bank-copy ${
                                                        copied
                                                            ? "copied"
                                                            : ""
                                                    }`}

                                                    onClick={copyClabe}

                                                    whileTap={{
                                                        scale: 0.96
                                                    }}
                                                >

                                                    {copied ? (

                                                        <>
                                                            <Check size={15} />
                                                            COPIADO
                                                        </>

                                                    ) : (

                                                        <>
                                                            <Copy size={14} />
                                                            COPIAR CLABE
                                                        </>

                                                    )}

                                                </motion.button>


                                                <p className="xv-bank-note">
                                                    Gracias por tu cariño
                                                    y por acompañarme en
                                                    este día tan especial.
                                                </p>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </motion.div>



            {/* ==========================================
                FINAL
            ========================================== */}

            <motion.div
                className="xv-wish-ending"

                initial={{
                    opacity: 0
                }}

                whileInView={{
                    opacity: 1
                }}

                viewport={{
                    once: false
                }}

                transition={{
                    duration: 0.9
                }}
            >

                <span>✦</span>

                <p>
                    GRACIAS POR SER PARTE DE ESTE DÍA
                </p>

                <span>✦</span>

            </motion.div>

        </section>

    );
}