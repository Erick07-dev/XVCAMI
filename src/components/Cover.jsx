import { motion } from "framer-motion";

const stars = [
    { left: "6%", top: "12%", delay: 0.2, size: 8 },
    { left: "14%", top: "32%", delay: 1.1, size: 5 },
    { left: "22%", top: "15%", delay: 2.2, size: 7 },
    { left: "31%", top: "7%", delay: 0.7, size: 5 },
    { left: "40%", top: "22%", delay: 1.8, size: 8 },
    { left: "52%", top: "9%", delay: 0.4, size: 5 },
    { left: "63%", top: "18%", delay: 2.5, size: 7 },
    { left: "72%", top: "8%", delay: 1.3, size: 5 },
    { left: "82%", top: "25%", delay: 0.9, size: 8 },
    { left: "91%", top: "13%", delay: 2.1, size: 5 },
    { left: "9%", top: "62%", delay: 1.7, size: 6 },
    { left: "18%", top: "76%", delay: 0.5, size: 8 },
    { left: "78%", top: "70%", delay: 2.3, size: 6 },
    { left: "91%", top: "62%", delay: 1.2, size: 8 },
    { left: "96%", top: "79%", delay: 0.4, size: 5 }
];

export default function Cover({ onOpen }) {
    return (
        <section className="cover">

            {/* FONDO */}
            <div className="cover-background"></div>

            {/* RESPLANDOR CENTRAL */}
            <div className="cover-glow"></div>

            {/* LUNA */}
           <motion.div
                className="cover-moon"
                initial={{
                    opacity: 0,
                    scale: 0.6
                }}
                animate={{
                    opacity: [0.7, 1, 0.82, 1],
                    scale: [1, 1.035, 1, 1.02],
                    boxShadow: [
                        "0 0 30px rgba(255,228,160,.35)",
                        "0 0 80px rgba(255,228,160,.55)",
                        "0 0 45px rgba(255,228,160,.40)",
                        "0 0 80px rgba(255,228,160,.55)"
                    ]
                }}
                transition={{
                    opacity: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    scale: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    boxShadow: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            />

            {/* ESTRELLAS */}
            <div className="stars">
                {stars.map((star, index) => (
                    <motion.span
                        key={index}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            fontSize: `${star.size}px`
                        }}
                        animate={{
                            opacity: [0.25, 1, 0.25],
                            scale: [0.7, 1.35, 0.7]
                        }}
                        transition={{
                            duration: 3 + (index % 3),
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        ✦
                    </motion.span>
                ))}
            </div>

            {/* MARIPOSAS */}
            <motion.span
                className="cover-butterfly cover-butterfly-one"
                animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    rotate: [-8, 8, -8]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ♡
            </motion.span>

            <motion.span
                className="cover-butterfly cover-butterfly-two"
                animate={{
                    y: [0, -12, 0],
                    x: [0, -7, 0],
                    rotate: [8, -8, 8]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ♡
            </motion.span>

            {/* MARCO EXTERIOR */}
            <div className="royal-border"></div>

            {/* CASTILLO DEL FONDO */}
            <motion.div
                className="cover-castle"
                initial={{
                    opacity: 0,
                    y: 60
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 2,
                    delay: 0.5
                }}
            >
                <div className="cover-castle-tower tower-left">
                    <div className="cover-tower-roof"></div>
                    <div className="cover-window"></div>
                </div>

                <div className="cover-castle-main">
                    <div className="cover-main-roof"></div>

                    <div className="cover-window castle-window-left"></div>
                    <div className="cover-window castle-window-right"></div>

                    <div className="cover-door"></div>
                </div>

                <div className="cover-castle-tower tower-right">
                    <div className="cover-tower-roof"></div>
                    <div className="cover-window"></div>
                </div>
            </motion.div>

            {/* =========================================
    ESTRELLAS FUGACES
========================================= */}

<div className="shooting-stars">
    <span className="shooting-star shooting-star-1"></span>
    <span className="shooting-star shooting-star-2"></span>
    <span className="shooting-star shooting-star-3"></span>
</div>


{/* =========================================
    PARTÍCULAS MÁGICAS
========================================= */}

<div className="magic-particles">

    {Array.from({ length: 16 }).map((_, index) => (

        <motion.span
            key={index}

            style={{
                left: `${5 + ((index * 17) % 90)}%`,
                bottom: `${5 + ((index * 13) % 45)}%`
            }}

            animate={{
                y: [0, -60, -110],
                x: [0, index % 2 === 0 ? 15 : -15, 0],
                opacity: [0, 0.9, 0],
                scale: [0.5, 1.2, 0.4]
            }}

            transition={{
                duration: 5 + (index % 4),
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            ✦
        </motion.span>

        ))}

    </div>


    {/* =========================================
        MARIPOSAS LILA
    ========================================= */}

    <motion.div
        className="magic-cover-butterfly butterfly-left"

        animate={{
            x: [0, 35, 10, 45, 0],
            y: [0, -35, -60, -25, 0],
            rotate: [-10, 12, -5, 10, -10]
        }}

        transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <span className="butterfly-wing wing-left"></span>
        <span className="butterfly-body"></span>
        <span className="butterfly-wing wing-right"></span>
    </motion.div>


    <motion.div
        className="magic-cover-butterfly butterfly-right"

        animate={{
            x: [0, -30, -10, -45, 0],
            y: [0, -25, -65, -35, 0],
            rotate: [8, -12, 5, -8, 8]
        }}

        transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <span className="butterfly-wing wing-left"></span>
        <span className="butterfly-body"></span>
        <span className="butterfly-wing wing-right"></span>
    </motion.div>

            {/* CONTENIDO */}
            <motion.div
                className="cover-content"
                initial={{
                    opacity: 0,
                    y: 40
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut"
                }}
            >

                {/* CORONA */}
                <motion.div
                    className="crown"
                    initial={{
                        opacity: 0,
                        scale: 0.4,
                        y: -15
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 1
                    }}
                >
                    ♕
                </motion.div>

                {/* SUBTÍTULO */}
                <motion.p
                    className="cover-subtitle"
                    initial={{
                        opacity: 0,
                        letterSpacing: "2px"
                    }}
                    animate={{
                        opacity: 1,
                        letterSpacing: "7px"
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 1.2
                    }}
                >
                    MIS XV AÑOS
                </motion.p>

                {/* DIVISOR */}
                <motion.div
                    className="gold-line"
                    initial={{
                        opacity: 0,
                        scaleX: 0
                    }}
                    animate={{
                        opacity: 1,
                        scaleX: 1
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 1
                    }}
                >
                    <span>✦</span>
                    <div></div>
                    <span>♕</span>
                    <div></div>
                    <span>✦</span>
                </motion.div>

                {/* NOMBRE */}
                <motion.div
                    className="cover-name-container"
                    initial={{
                        opacity: 0,
                        scale: 0.85,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1,
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                >
                    <motion.span
                        className="cover-name-star star-left"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.7, 1.3, 0.7]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity
                        }}
                    >
                        ✦
                    </motion.span>

                    <br>

                    </br>

                    <h1>
                        Camila
                    </h1>

                    <motion.span
                        className="cover-name-star star-right"
                        animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1.2, 0.7, 1.2]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                    >
                        ✦
                    </motion.span>
                </motion.div>

                {/* FRASE */}
                <motion.p
                    className="cover-description"
                    initial={{
                        opacity: 0,
                        y: 15
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1.25,
                        duration: 1
                    }}
                >
                    Hay momentos que se convierten
                    <br />
                    en recuerdos para toda la vida...
                </motion.p>

                <motion.p
                    className="cover-invitation"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.45,
                        duration: 1
                    }}
                >
                    Te invito a celebrar conmigo
                    <br />
                    el comienzo de un nuevo capítulo.
                </motion.p>

                {/* BOTÓN */}
                <motion.button
                    className="open-button"
                    onClick={onOpen}
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1.7,
                        duration: 0.8
                    }}
                    whileHover={{
                        scale: 1.04,
                        y: -3
                    }}
                    whileTap={{
                        scale: 0.97
                    }}
                >
                    <span>✦</span>

                    ABRIR INVITACIÓN

                    <span>✦</span>
                </motion.button>

                {/* INDICACIÓN */}
                <motion.div
                    className="cover-enter"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 2,
                        duration: 1
                    }}
                >
                    <motion.span
                        animate={{
                            y: [0, 6, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        ↓
                    </motion.span>

                    <p className="touch-text">
                        TOCA PARA ENTRAR
                    </p>
                </motion.div>

            </motion.div>

            {/* NIEBLA / SUELO */}
            <div className="cover-bottom-fog"></div>

        </section>
    );
}