import { motion } from "framer-motion";
import {
    Crown,
    Heart,
    Sparkles
} from "lucide-react";

import "./ClosingCinematic.css";


const stars = [
    { left: "5%", top: "9%", size: 5, delay: 0.2 },
    { left: "12%", top: "21%", size: 3, delay: 1.1 },
    { left: "19%", top: "8%", size: 4, delay: 0.7 },
    { left: "27%", top: "28%", size: 3, delay: 1.8 },
    { left: "34%", top: "13%", size: 5, delay: 0.4 },
    { left: "42%", top: "6%", size: 3, delay: 1.4 },
    { left: "50%", top: "20%", size: 4, delay: 0.9 },
    { left: "58%", top: "8%", size: 3, delay: 2.1 },
    { left: "66%", top: "24%", size: 5, delay: 0.5 },
    { left: "74%", top: "11%", size: 3, delay: 1.6 },
    { left: "82%", top: "27%", size: 4, delay: 0.8 },
    { left: "91%", top: "12%", size: 5, delay: 1.3 },

    { left: "8%", top: "43%", size: 3, delay: 2.2 },
    { left: "17%", top: "53%", size: 4, delay: 0.6 },
    { left: "88%", top: "45%", size: 3, delay: 1.7 },
    { left: "95%", top: "57%", size: 4, delay: 0.3 }
];


export default function Closing() {

    return (

        <section className="xv-cinematic-ending">


            {/* ==========================================
                CIELO
            ========================================== */}

            <motion.div
                className="xv-cinema-sky"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.15
                }}
                transition={{
                    duration: 2.4
                }}
            />


            {/* ==========================================
                RESPLANDOR CENTRAL
            ========================================== */}

            <motion.div
                className="xv-cinema-center-glow"
                initial={{
                    opacity: 0,
                    scale: 0.7
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                viewport={{
                    once: true,
                    amount: 0.15
                }}
                transition={{
                    duration: 2.5,
                    delay: 0.5
                }}
            />


            {/* ==========================================
                LUNA
            ========================================== */}

            <motion.div
                className="xv-cinema-moon"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    amount: 0.15
                }}
                transition={{
                    duration: 2,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                <div className="xv-cinema-moon-inner" />

            </motion.div>


            {/* ==========================================
                ESTRELLAS
            ========================================== */}

            <div className="xv-cinema-stars">

                {stars.map((star, index) => (

                    <motion.span
                        key={index}

                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size
                        }}

                        initial={{
                            opacity: 0,
                            scale: 0
                        }}

                        whileInView={{
                            opacity: [0.2, 1, 0.3],
                            scale: [0.7, 1.4, 0.8]
                        }}

                        viewport={{
                            once: true,
                            amount: 0.1
                        }}

                        transition={{
                            opacity: {
                                duration: 3.2,
                                delay:
                                    0.8 +
                                    star.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },

                            scale: {
                                duration: 3.2,
                                delay:
                                    0.8 +
                                    star.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />

                ))}

            </div>


            {/* ==========================================
                ESTRELLAS GRANDES
            ========================================== */}

            <motion.span
                className="xv-cinema-big-star xv-star-one"
                animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1.25, 0.8],
                    rotate: [0, 20, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✦
            </motion.span>


            <motion.span
                className="xv-cinema-big-star xv-star-two"
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.7, 1.2, 0.7],
                    rotate: [0, -20, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✧
            </motion.span>


            {/* ==========================================
                CONTENIDO PRINCIPAL
            ========================================== */}

            <div className="xv-cinema-content">


                {/* CORONA */}

                <motion.div
                    className="xv-cinema-crown"

                    initial={{
                        opacity: 0,
                        y: -20,
                        scale: 0.6
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 1.3,
                        delay: 1.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <Crown
                        size={28}
                        strokeWidth={1}
                    />

                </motion.div>


                {/* MIS XV */}

                <motion.p
                    className="xv-cinema-eyebrow"

                    initial={{
                        opacity: 0,
                        letterSpacing: "8px"
                    }}

                    whileInView={{
                        opacity: 1,
                        letterSpacing: "4px"
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 1.6,
                        delay: 1.4
                    }}
                >
                    MIS XV AÑOS
                </motion.p>


                {/* DECORACIÓN */}

                <motion.div
                    className="xv-cinema-ornament"

                    initial={{
                        opacity: 0,
                        scaleX: 0
                    }}

                    whileInView={{
                        opacity: 1,
                        scaleX: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1.2,
                        delay: 1.7
                    }}
                >

                    <span />

                    <Sparkles
                        size={14}
                        strokeWidth={1}
                    />

                    <span />

                </motion.div>


                {/* ======================================
                    MENSAJE PRINCIPAL
                ====================================== */}

                <motion.h2
                    className="xv-cinema-title"

                    initial={{
                        opacity: 0,
                        y: 35,
                        filter: "blur(8px)"
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 1.7,
                        delay: 1.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    Gracias por formar parte
                    <br />

                    <span>
                        de mi historia
                    </span>

                </motion.h2>


                {/* ======================================
                    FIRMA
                ====================================== */}

                <motion.div
                    className="xv-cinema-name"

                    initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.8
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1.8,
                        delay: 2.5,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >

                    Camila

                </motion.div>


                {/* ======================================
                    DIVISOR REAL
                ====================================== */}

                <motion.div
                    className="xv-cinema-royal-divider"

                    initial={{
                        opacity: 0,
                        scaleX: 0.3
                    }}

                    whileInView={{
                        opacity: 1,
                        scaleX: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1.2,
                        delay: 2.8
                    }}
                >

                    <span />

                    <Heart
                        size={12}
                        strokeWidth={1}
                    />

                    <span />

                </motion.div>


                {/* ======================================
                    FECHA
                ====================================== */}

                <motion.div
                    className="xv-cinema-date"

                    initial={{
                        opacity: 0,
                        y: 15
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1.2,
                        delay: 3
                    }}
                >

                    <span>16</span>

                    <i>·</i>

                    <span>NOVIEMBRE</span>

                    <i>·</i>

                    <span>2026</span>

                </motion.div>


                {/* ======================================
                    FRASE FINAL
                ====================================== */}

                <motion.p
                    className="xv-cinema-quote"

                    initial={{
                        opacity: 0,
                        y: 15
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1.3,
                        delay: 3.3
                    }}
                >

                    Hay momentos que duran un instante,
                    <br />

                    pero viven para siempre en el corazón.

                </motion.p>


                <motion.div
                    className="xv-cinema-heart"

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    animate={{
                        scale: [1, 1.12, 1]
                    }}

                    transition={{
                        opacity: {
                            duration: 1,
                            delay: 3.6
                        },

                        scale: {
                            duration: 2.5,
                            repeat: Infinity
                        }
                    }}
                >
                    ♡
                </motion.div>

            </div>


            {/* ==========================================
                MARIPOSA FINAL
            ========================================== */}

            <motion.div
                className="xv-final-butterfly"

                initial={{
                    left: "-15%",
                    bottom: "30%",
                    opacity: 0,
                    rotate: -18,
                    scale: 0.7
                }}

                whileInView={{
                    left: "115%",
                    bottom: "67%",
                    opacity: [
                        0,
                        1,
                        1,
                        1,
                        0
                    ],

                    rotate: [
                        -18,
                        8,
                        -6,
                        12
                    ],

                    scale: [
                        0.7,
                        1,
                        0.9,
                        1.05
                    ]
                }}

                viewport={{
                    once: true,
                    amount: 0.3
                }}

                transition={{
                    duration: 7,
                    delay: 4,
                    ease: "easeInOut"
                }}
            >

                <div className="xv-butterfly-wing xv-wing-left">
                    ♡
                </div>

                <div className="xv-butterfly-body" />

                <div className="xv-butterfly-wing xv-wing-right">
                    ♡
                </div>

            </motion.div>


            {/* ==========================================
                CASTILLO
            ========================================== */}

            <motion.div
                className="xv-cinema-castle"

                initial={{
                    opacity: 0,
                    y: 100
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true,
                    amount: 0.1
                }}

                transition={{
                    duration: 2.2,
                    delay: 1.2,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >


                {/* TORRE IZQUIERDA */}

                <div className="xv-castle-tower xv-castle-left">

                    <div className="xv-castle-roof" />

                    <div className="xv-castle-spire" />

                    <div className="xv-castle-window" />

                </div>


                {/* TORRE CENTRAL */}

                <div className="xv-castle-center">

                    <div className="xv-castle-main-roof" />

                    <div className="xv-castle-center-star">
                        ✦
                    </div>

                    <div className="xv-castle-window xv-center-window" />

                    <div className="xv-castle-door" />

                </div>


                {/* TORRE DERECHA */}

                <div className="xv-castle-tower xv-castle-right">

                    <div className="xv-castle-roof" />

                    <div className="xv-castle-spire" />

                    <div className="xv-castle-window" />

                </div>


                {/* TORRES PEQUEÑAS */}

                <div className="xv-castle-small-tower xv-small-left">
                    <div />
                </div>

                <div className="xv-castle-small-tower xv-small-right">
                    <div />
                </div>

            </motion.div>


            {/* ==========================================
                NIEBLA
            ========================================== */}

            <div className="xv-cinema-fog xv-fog-one" />
            <div className="xv-cinema-fog xv-fog-two" />


            {/* ==========================================
                SUELO
            ========================================== */}

            <div className="xv-cinema-ground" />

        </section>

    );
}