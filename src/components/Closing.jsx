import { motion } from "framer-motion";

const stars = [
    { left: "8%", top: "12%", delay: 0 },
    { left: "18%", top: "28%", delay: 1.2 },
    { left: "30%", top: "10%", delay: 0.5 },
    { left: "42%", top: "22%", delay: 1.8 },
    { left: "58%", top: "12%", delay: 0.8 },
    { left: "70%", top: "26%", delay: 2.1 },
    { left: "82%", top: "10%", delay: 1.4 },
    { left: "92%", top: "32%", delay: 0.3 },
    { left: "13%", top: "48%", delay: 2.4 },
    { left: "87%", top: "50%", delay: 1.1 }
];

export default function Closing() {
    return (
        <section className="cinematic-closing">

            {/* CIELO */}
            <div className="closing-night"></div>

            {/* LUNA */}
            <motion.div
                className="closing-moon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
            />

            {/* ESTRELLAS */}
            <div className="closing-stars">
                {stars.map((star, index) => (
                    <motion.span
                        key={index}
                        style={{
                            left: star.left,
                            top: star.top
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.7, 1.3, 0.7]
                        }}
                        transition={{
                            duration: 3,
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
                className="closing-butterfly butterfly-one"
                animate={{
                    y: [0, -18, 0],
                    x: [0, 10, 0],
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
                className="closing-butterfly butterfly-two"
                animate={{
                    y: [0, -14, 0],
                    x: [0, -8, 0],
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

            {/* CONTENIDO */}
            <motion.div
                className="closing-content"
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut"
                }}
            >

                <motion.div
                    className="closing-crown"
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}
                >
                    ♕
                </motion.div>

                <motion.p
                    className="closing-small"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.5,
                        duration: 1
                    }}
                >
                    MIS XV AÑOS
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.65,
                        duration: 1
                    }}
                >
                    Gracias por formar
                    <br />
                    parte de mi historia
                </motion.h2>

                <div className="closing-royal-divider">
                    <span>✦</span>
                    <div></div>
                    <span>♕</span>
                    <div></div>
                    <span>✦</span>
                </div>

                {/* FIRMA */}
                <motion.h1
                    className="closing-camila"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.9,
                        duration: 1.4,
                        ease: "easeOut"
                    }}
                >
                    Camila
                </motion.h1>

                <motion.div
                    className="closing-date-new"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 1.15,
                        duration: 1
                    }}
                >
                    <span>16</span>
                    <i>·</i>
                    <span>NOVIEMBRE</span>
                    <i>·</i>
                    <span>2026</span>
                </motion.div>

                <motion.p
                    className="closing-message-new"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 1.3,
                        duration: 1
                    }}
                >
                    Hay momentos que duran una noche,
                    <br />
                    pero viven para siempre en el corazón.
                </motion.p>

                <motion.div
                    className="closing-heart"
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity
                    }}
                >
                    ♡
                </motion.div>

            </motion.div>

            {/* CASTILLO DECORATIVO */}
            <motion.div
                className="closing-castle"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.7,
                    delay: 0.4
                }}
            >
                <div className="castle-tower castle-left">
                    <div className="castle-roof"></div>
                    <div className="castle-window"></div>
                </div>

                <div className="castle-main">
                    <div className="castle-roof-main"></div>
                    <div className="castle-door"></div>
                    <div className="castle-window window-left"></div>
                    <div className="castle-window window-right"></div>
                </div>

                <div className="castle-tower castle-right">
                    <div className="castle-roof"></div>
                    <div className="castle-window"></div>
                </div>
            </motion.div>

            {/* SUELO */}
            <div className="closing-ground"></div>

        </section>
    );
}