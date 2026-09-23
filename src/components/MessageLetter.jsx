import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function MessageLetter() {
    return (
        <section className="letter-section">

            {/* Destellos decorativos */}
            <motion.span
                className="letter-floating-sparkle letter-sparkle-1"
                animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.25, 0.8],
                    rotate: [0, 45, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✦
            </motion.span>

            <motion.span
                className="letter-floating-sparkle letter-sparkle-2"
                animate={{
                    opacity: [1, 0.25, 1],
                    scale: [1.2, 0.8, 1.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✦
            </motion.span>

            <motion.div
                className="letter-wrapper"
                initial={{
                    opacity: 0,
                    y: 60
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
                    duration: 1,
                    ease: "easeOut"
                }}
            >

                {/* Encabezado */}

                <motion.div
                    className="letter-crown"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8
                    }}
                >
                    ♕
                </motion.div>

                <p className="letter-small">
                    DESDE MI CORAZÓN
                </p>

                <h2>
                    Un mensaje para ti
                </h2>

                <div className="letter-title-divider">
                    <span>✦</span>
                    <div></div>
                    <span>♥</span>
                    <div></div>
                    <span>✦</span>
                </div>


                {/* Carta */}

                <motion.div
                    className="royal-letter"
                    initial={{
                        opacity: 0,
                        scale: 0.96
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                    transition={{
                        delay: 0.25,
                        duration: 0.9
                    }}
                >

                    {/* Adornos esquinas */}

                    <span className="letter-corner letter-corner-tl">
                        ❦
                    </span>

                    <span className="letter-corner letter-corner-tr">
                        ❦
                    </span>

                    <span className="letter-corner letter-corner-bl">
                        ❦
                    </span>

                    <span className="letter-corner letter-corner-br">
                        ❦
                    </span>


                    {/* Sello */}

                    <motion.div
                        className="letter-seal"
                        whileInView={{
                            rotate: [0, -5, 5, 0],
                            scale: [0.9, 1.05, 1]
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.7,
                            duration: 1
                        }}
                    >
                        <Heart
                            size={22}
                            strokeWidth={1.4}
                        />
                    </motion.div>


                    <p className="letter-opening">
                        Querida familia y amigos:
                    </p>


                    <p className="letter-text">
                        Hoy estoy por comenzar una de las etapas
                        más bonitas de mi vida, y no podría imaginar
                        este momento sin las personas que han formado
                        parte de mi historia.
                    </p>


                    <p className="letter-text">
                        Cada sonrisa, cada consejo, cada abrazo y
                        cada recuerdo compartido me han acompañado
                        hasta llegar a este día tan especial.
                    </p>


                    <p className="letter-highlight">
                        Por eso, mi mayor regalo será poder celebrar
                        mis XV años junto a ustedes.
                    </p>


                    <p className="letter-text">
                        Deseo que esta noche esté llena de alegría,
                        momentos inolvidables y recuerdos que podamos
                        guardar para siempre en el corazón.
                    </p>


                    <p className="letter-thanks">
                        Gracias por formar parte de mi historia.
                    </p>


                    {/* Firma */}

                    <div className="letter-signature">

                        <p>
                            Con cariño,
                        </p>

                        <motion.h3
                            initial={{
                                opacity: 0,
                                y: 15
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.8,
                                duration: 1
                            }}
                        >
                            Camila
                        </motion.h3>

                        <span>
                            Mis XV Años
                        </span>

                    </div>


                    {/* Adorno inferior */}

                    <div className="letter-bottom-decoration">
                        <span>✦</span>
                        <div></div>
                        <span>♕</span>
                        <div></div>
                        <span>✦</span>
                    </div>

                </motion.div>

            </motion.div>

        </section>
    );
}