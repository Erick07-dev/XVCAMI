import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-section">

            {/* CORONA */}
            <motion.div
                className="hero-crown"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: -20
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
            >
                ♕
            </motion.div>


            {/* MIS XV AÑOS */}
            <motion.p
                className="hero-small"
                initial={{
                    opacity: 0,
                    y: 10
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.8
                }}
            >
                MIS XV AÑOS
            </motion.p>


            {/* LÍNEA DORADA SUPERIOR */}
            <motion.div
                className="hero-line"
                initial={{
                    width: 0,
                    opacity: 0
                }}
                animate={{
                    width: "180px",
                    opacity: 1
                }}
                transition={{
                    delay: 0.5,
                    duration: 1
                }}
            />


            {/* NOMBRE PRINCIPAL */}
            <motion.div
                className="hero-name-container"
                initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.92
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                transition={{
                    delay: 0.65,
                    duration: 1.2,
                    ease: "easeOut"
                }}
            >

                <motion.span
                    className="hero-name-sparkle sparkle-left"
                    animate={{
                        opacity: [0.25, 1, 0.25],
                        scale: [0.7, 1.25, 0.7],
                        rotate: [0, 45, 0]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    ✦
                </motion.span>


                <motion.h1
                    className="hero-name"
                    animate={{
                        textShadow: [
                            "0 4px 18px rgba(112,52,82,.18)",
                            "0 4px 28px rgba(181,120,205,.35)",
                            "0 4px 18px rgba(112,52,82,.18)"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Camila
                </motion.h1>


                <motion.span
                    className="hero-name-sparkle sparkle-right"
                    animate={{
                        opacity: [1, 0.25, 1],
                        scale: [1.2, 0.7, 1.2],
                        rotate: [45, 0, 45]
                    }}
                    transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    ✦
                </motion.span>

            </motion.div>


            {/* ADORNO DEBAJO DEL NOMBRE */}
            <motion.div
                className="hero-name-ornament"
                initial={{
                    opacity: 0,
                    scaleX: 0
                }}
                animate={{
                    opacity: 1,
                    scaleX: 1
                }}
                transition={{
                    delay: 1,
                    duration: 1
                }}
            >
                <span>✦</span>
                <div></div>
                <span>♕</span>
                <div></div>
                <span>✦</span>
            </motion.div>


            {/* FECHA */}
            <motion.p
                className="hero-date"
                initial={{
                    opacity: 0,
                    y: 10
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 1.1,
                    duration: 0.8
                }}
            >
                16 · NOVIEMBRE · 2026
            </motion.p>


            {/* MENSAJE */}
            <motion.p
                className="hero-message"
                initial={{
                    opacity: 0,
                    y: 15
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 1.3,
                    duration: 0.9
                }}
            >
                Hay momentos que permanecen
                <br />
                para siempre en el corazón.
            </motion.p>


            {/* INDICADOR DE SCROLL */}
            <motion.div
                className="scroll-indicator"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ↓
            </motion.div>


            <motion.p
                className="scroll-text"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    delay: 1.6,
                    duration: 1
                }}
            >
                DESLIZA PARA CONTINUAR
            </motion.p>

        </section>
    );
}