import { motion } from "framer-motion";

const stars = Array.from({ length: 24 });

export default function Cover({ onOpen }) {
    return (
        <section className="cover">

            {/* Fondo oscuro */}
            <div className="cover-background"></div>

            {/* Destellos */}
            <div className="stars">
                {stars.map((_, index) => (
                    <span
                        key={index}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    >
                        ✦
                    </span>
                ))}
            </div>

            {/* Marco exterior */}
            <div className="royal-border"></div>

            {/* Contenido */}
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
                    duration: 1.5,
                    ease: "easeOut"
                }}
            >

                {/* Corona */}
                <motion.div
                    className="crown"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1
                    }}
                >
                    ♕
                </motion.div>

                <p className="cover-subtitle">
                    MIS XV AÑOS
                </p>

                <div className="gold-line">
                    <span>✦</span>
                    <div></div>
                    <span>✦</span>
                </div>

                <motion.h1
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 1
                    }}
                >
                    Camila
                </motion.h1>

                <p className="cover-description">
                    Hay momentos que se convierten
                    en recuerdos para toda la vida...
                </p>

                <p className="cover-invitation">
                    Te invito a celebrar conmigo
                    el comienzo de un nuevo capítulo.
                </p>

                <motion.button
                    className="open-button"
                    onClick={onOpen}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    <span>✦</span>
                    ABRIR INVITACIÓN
                    <span>✦</span>
                </motion.button>

                <p className="touch-text">
                    Toca para entrar
                </p>

            </motion.div>

        </section>
    );
}