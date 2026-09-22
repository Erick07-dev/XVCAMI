import { motion } from "framer-motion";

const butterflies = [
    { left: "6%", top: "4%", delay: 0, duration: 8, size: 24, type: "lilac" },
    { left: "88%", top: "9%", delay: 1, duration: 10, size: 22, type: "gold" },

    { left: "16%", top: "17%", delay: 2, duration: 9, size: 20, type: "lilac" },
    { left: "78%", top: "23%", delay: 0, duration: 11, size: 27, type: "gold" },

    { left: "5%", top: "31%", delay: 3, duration: 10, size: 24, type: "gold" },
    { left: "92%", top: "37%", delay: 2, duration: 8, size: 21, type: "lilac" },

    { left: "20%", top: "44%", delay: 1, duration: 12, size: 23, type: "lilac" },
    { left: "82%", top: "50%", delay: 4, duration: 9, size: 26, type: "gold" },

    { left: "8%", top: "57%", delay: 2, duration: 11, size: 21, type: "gold" },
    { left: "90%", top: "64%", delay: 0, duration: 10, size: 25, type: "lilac" },

    { left: "18%", top: "71%", delay: 3, duration: 9, size: 22, type: "lilac" },
    { left: "75%", top: "77%", delay: 1, duration: 12, size: 24, type: "gold" },

    { left: "7%", top: "84%", delay: 2, duration: 10, size: 25, type: "lilac" },
    { left: "91%", top: "90%", delay: 1, duration: 9, size: 21, type: "gold" },

    { left: "28%", top: "95%", delay: 0, duration: 11, size: 20, type: "gold" },
    { left: "68%", top: "97%", delay: 3, duration: 10, size: 24, type: "lilac" },
];

const petals = [
    { left: "8%", top: "12%", delay: 0 },
    { left: "24%", top: "25%", delay: 1 },
    { left: "85%", top: "32%", delay: 2 },
    { left: "12%", top: "48%", delay: 3 },
    { left: "78%", top: "59%", delay: 1 },
    { left: "32%", top: "69%", delay: 2 },
    { left: "90%", top: "78%", delay: 4 },
    { left: "17%", top: "88%", delay: 1 },
];

const sparkles = Array.from({ length: 30 });

const crowns = [
    { left: "10%", top: "20%" },
    { left: "86%", top: "41%" },
    { left: "8%", top: "62%" },
    { left: "88%", top: "82%" },
];

export default function MagicDecorations() {
    return (
        <div className="magic-world" aria-hidden="true">

            {/* ==========================
                MARIPOSAS
            ========================== */}

            <div className="butterfly-layer">

                {butterflies.map((butterfly, index) => (

                    <motion.div
                        key={index}
                        className={`magic-butterfly ${butterfly.type}`}
                        style={{
                            left: butterfly.left,
                            top: butterfly.top,
                            fontSize: butterfly.size,
                        }}
                        animate={{
                            x: [0, 35, -25, 40, 0],
                            y: [0, -25, -60, -30, 0],
                            rotate: [-12, 15, -10, 12, -12],
                            scale: [1, 1.15, 0.9, 1.1, 1],
                        }}
                        transition={{
                            duration: butterfly.duration,
                            delay: butterfly.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        🦋
                    </motion.div>

                ))}

            </div>


            {/* ==========================
                DESTELLOS
            ========================== */}

            <div className="magic-sparkles">

                {sparkles.map((_, index) => (

                    <span
                        key={index}
                        className="magic-sparkle"
                        style={{
                            left: `${5 + ((index * 29) % 90)}%`,
                            top: `${3 + ((index * 17) % 94)}%`,
                            animationDelay: `${(index % 7) * 0.4}s`,
                        }}
                    >
                        ✦
                    </span>

                ))}

            </div>


            {/* ==========================
                PÉTALOS
            ========================== */}

            <div className="petals-layer">

                {petals.map((petal, index) => (

                    <motion.span
                        key={index}
                        className="magic-petal"
                        style={{
                            left: petal.left,
                            top: petal.top,
                        }}
                        animate={{
                            y: [0, 80, 160],
                            x: [0, 30, -20, 15],
                            rotate: [0, 90, 180, 270],
                            opacity: [0, 0.7, 0.7, 0],
                        }}
                        transition={{
                            duration: 9 + (index % 4),
                            delay: petal.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        ❀
                    </motion.span>

                ))}

            </div>


            {/* ==========================
                CORONAS
            ========================== */}

            {crowns.map((crown, index) => (

                <motion.div
                    key={index}
                    className="floating-crown"
                    style={{
                        left: crown.left,
                        top: crown.top,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        rotate: [-4, 4, -4],
                        opacity: [0.18, 0.45, 0.18],
                    }}
                    transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ♕
                </motion.div>

            ))}


            {/* ==========================
                CASTILLO
            ========================== */}

            <motion.div
                className="story-decoration magic-castle"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.12, 0.28, 0.12],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="castle-towers">
                    <span>♜</span>
                    <span className="castle-main">♜</span>
                    <span>♜</span>
                </div>

                <p>UN CUENTO DE HADAS</p>
            </motion.div>


            {/* ==========================
                ZAPATILLA DE CRISTAL
            ========================== */}

            <motion.div
                className="story-decoration crystal-shoe"
                animate={{
                    y: [0, -12, 0],
                    rotate: [-5, 5, -5],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span>♢</span>

                <div className="shoe-shape">
                    👠
                </div>

                <p>ZAPATILLA DE CRISTAL</p>
            </motion.div>


            {/* ==========================
                RELOJ
            ========================== */}

            <motion.div
                className="story-decoration antique-clock"
                animate={{
                    rotate: [-2, 2, -2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="clock-face">

                    <span className="clock-number clock-12">
                        XII
                    </span>

                    <span className="clock-number clock-3">
                        III
                    </span>

                    <span className="clock-number clock-6">
                        VI
                    </span>

                    <span className="clock-number clock-9">
                        IX
                    </span>

                    <span className="clock-hand hour"></span>

                    <motion.span
                        className="clock-hand minute"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <span className="clock-center"></span>

                </div>

                <p>LA NOCHE ES MÁGICA</p>

            </motion.div>


            {/* ==========================
                CARRUAJE
            ========================== */}

            <motion.div
                className="story-decoration magic-carriage"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.65, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <div className="carriage-crown">
                    ♕
                </div>

                <div className="carriage-body">
                    <span>✦</span>
                </div>

                <div className="carriage-wheels">
                    <span></span>
                    <span></span>
                </div>

                <p>
                    UN VIAJE INOLVIDABLE
                </p>

            </motion.div>


            {/* ==========================
                ROSAS
            ========================== */}

            <motion.div
                className="rose-decoration rose-left"
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span>❀</span>
                <span>❀</span>
                <span>❀</span>
                <span>❀</span>
            </motion.div>


            <motion.div
                className="rose-decoration rose-right"
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span>❀</span>
                <span>❀</span>
                <span>❀</span>
            </motion.div>


            {/* TEXTO DECORATIVO */}

            <motion.div
                className="fairytale-phrase phrase-one"
                animate={{
                    opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            >
                Érase una vez...
            </motion.div>


            <motion.div
                className="fairytale-phrase phrase-two"
                animate={{
                    opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
            >
                Una noche para recordar
            </motion.div>

        </div>
    );
}