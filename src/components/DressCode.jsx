import { motion } from "framer-motion";
import {
    Sparkles,
    Heart
} from "lucide-react";

import "./DressCodePremium.css";

export default function DressCode() {

    return (
        <section className="xv-dress-section">

            {/* =========================================
                DECORACIONES DEL FONDO
            ========================================= */}

            <motion.span
                className="xv-dress-floating xv-floating-one"
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 12, 0],
                    opacity: [0.25, 0.75, 0.25]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✦
            </motion.span>


            <motion.span
                className="xv-dress-floating xv-floating-two"
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, -10, 0],
                    opacity: [0.2, 0.7, 0.2]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ♡
            </motion.span>


            <motion.span
                className="xv-dress-floating xv-floating-three"
                animate={{
                    scale: [0.8, 1.25, 0.8],
                    opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✧
            </motion.span>


            <motion.span
                className="xv-dress-floating xv-floating-four"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.2, 0.65, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✦
            </motion.span>


            {/* =========================================
                CONTENIDO
            ========================================= */}

            <motion.div
                className="xv-dress-content"
                initial={{
                    opacity: 0,
                    y: 45
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
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                {/* ORNAMENTO SUPERIOR */}

                <div className="xv-dress-top-decoration">

                    <span />

                    <Heart
                        size={12}
                        strokeWidth={1}
                    />

                    <span />

                </div>


                {/* CORONA */}

                <motion.div
                    className="xv-dress-crown"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 10
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    viewport={{
                        once: false
                    }}
                    transition={{
                        duration: 0.7
                    }}
                >
                    ♕
                </motion.div>


                {/* TÍTULO */}

                <motion.p
                    className="xv-dress-eyebrow"
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
                        duration: 0.7,
                        delay: 0.1
                    }}
                >
                    CÓDIGO DE
                </motion.p>


                <motion.h2
                    className="xv-dress-title"
                    initial={{
                        opacity: 0,
                        y: 18
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: false
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15
                    }}
                >
                    VESTIMENTA
                </motion.h2>


                {/* DIVISOR */}

                <div className="xv-dress-title-divider">

                    <span />

                    <Sparkles
                        size={15}
                        strokeWidth={1.2}
                    />

                    <span />

                </div>


                {/* FORMAL */}

                <motion.p
                    className="xv-dress-formal"
                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{
                        once: false
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25
                    }}
                >
                    Formal
                </motion.p>


                <p className="xv-dress-description">
                    Queremos que formes parte de este día tan especial
                    luciendo tu mejor estilo.
                </p>


                {/* =========================================
                    DAMAS / CABALLEROS
                ========================================= */}

                <div className="xv-dress-options">

                    {/* DAMAS */}

                    <motion.div
                        className="xv-dress-option"
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: false,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.75
                        }}
                    >

                        <motion.div
                            className="xv-dress-icon-circle"
                            whileHover={{
                                scale: 1.08,
                                rotate: -4
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250
                            }}
                        >
                            👗
                        </motion.div>


                        <span className="xv-dress-option-label">
                            DAMAS
                        </span>


                        <h3>
                            Vestido Formal
                        </h3>


                        <p>
                            Elegante y especial
                        </p>

                    </motion.div>


                    {/* SEPARADOR CENTRAL */}

                    <div className="xv-dress-middle">

                        <span />

                        <Heart
                            size={13}
                            strokeWidth={1}
                        />

                        <span />

                    </div>


                    {/* CABALLEROS */}

                    <motion.div
                        className="xv-dress-option"
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: false,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.75
                        }}
                    >

                        <motion.div
                            className="xv-dress-icon-circle"
                            whileHover={{
                                scale: 1.08,
                                rotate: 4
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250
                            }}
                        >
                            🤵
                        </motion.div>


                        <span className="xv-dress-option-label">
                            CABALLEROS
                        </span>


                        <h3>
                            Traje Formal
                        </h3>


                        <p>
                            Clásico y elegante
                        </p>

                    </motion.div>

                </div>


                {/* =========================================
                    SEPARADOR
                ========================================= */}

                <div className="xv-dress-section-divider">

                    <span />

                    <div>
                        ✦
                    </div>

                    <span />

                </div>


                {/* =========================================
                    COLOR RESERVADO
                ========================================= */}

                <motion.div
                    className="xv-reserved-area"
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
                        className="xv-reserved-icon"
                        size={20}
                        strokeWidth={1.2}
                    />


                    <p className="xv-reserved-small">
                        CON MUCHO CARIÑO
                    </p>


                    <h3 className="xv-reserved-title">
                        Color reservado
                    </h3>


                    <p className="xv-reserved-text">
                        Les pedimos reservar este color
                        especialmente para la quinceañera.
                    </p>


                    {/* MUESTRA LILA */}

                    <motion.div
                        className="xv-lilac-color"
                        whileHover={{
                            scale: 1.03
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250
                        }}
                    >

                        <motion.div
                            className="xv-lilac-swatch"
                            animate={{
                                boxShadow: [
                                    "0 4px 15px rgba(143, 97, 165, 0.18)",
                                    "0 4px 28px rgba(143, 97, 165, 0.40)",
                                    "0 4px 15px rgba(143, 97, 165, 0.18)"
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >

                            <span />

                        </motion.div>


                        <div className="xv-lilac-info">

                            <strong>
                                LILA
                            </strong>

                            <small>
                                Color de la quinceañera
                            </small>

                        </div>

                    </motion.div>


                    {/* AVISO */}

                    <div className="xv-reserved-warning">

                        <span>
                            ♡
                        </span>

                        <p>
                            Agradecemos evitar lila, lavanda
                            y tonos similares en su vestimenta.
                        </p>

                        <span>
                            ♡
                        </span>

                    </div>

                </motion.div>


                {/* =========================================
                    FINAL
                ========================================= */}

                <div className="xv-dress-bottom-divider">

                    <span />

                    <Heart
                        size={11}
                        strokeWidth={1}
                    />

                    <span />

                </div>


                <p className="xv-dress-thanks">
                    Gracias por acompañarme en este
                    día tan especial
                </p>


                <motion.div
                    className="xv-dress-last-sparkle"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.15, 0.8]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    ✦
                </motion.div>

            </motion.div>

        </section>
    );
}