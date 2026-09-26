import { motion } from "framer-motion";

const sparkles = Array.from({ length: 18 });
const petals = Array.from({ length: 12 });

export default function OpeningTransition() {
    return (
        <motion.div
            className="opening-transition"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Luz central */}
            <motion.div
                className="opening-light"
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: [0, 1.2, 4],
                    opacity: [0, 0.9, 0]
                }}
                transition={{
                    duration: 1.8,
                    ease: "easeInOut"
                }}
            />

            {/* Anillo dorado */}
            <motion.div
                className="opening-ring"
                initial={{
                    scale: 0.3,
                    opacity: 0
                }}
                animate={{
                    scale: [0.3, 1, 2.2],
                    opacity: [0, 0.8, 0]
                }}
                transition={{
                    duration: 1.6,
                    ease: "easeOut"
                }}
            />

            {/* Corona */}
            <motion.div
                className="opening-crown"
                initial={{
                    opacity: 0,
                    scale: 0.4,
                    y: 20
                }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.4, 1.1, 1, 1.3],
                    y: [20, 0, 0, -20]
                }}
                transition={{
                    duration: 1.7,
                    ease: "easeInOut"
                }}
            >
                ♕
            </motion.div>

            {/* Nombre */}
            <motion.div
                className="opening-name"
                initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.9
                }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    y: [25, 0, 0, -15],
                    scale: [0.9, 1, 1, 1.05]
                }}
                transition={{
                    duration: 1.8,
                    ease: "easeInOut"
                }}
            >
                Camila
            </motion.div>

            {/* Destellos */}
            <div className="opening-sparkles">
                {sparkles.map((_, index) => (
                    <motion.span
                        key={index}
                        style={{
                            left: `${8 + index * 5}%`,
                            top: `${25 + (index % 6) * 10}%`
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.4, 0],
                            y: [0, -40 - (index % 5) * 15],
                            rotate: [0, 90, 180]
                        }}
                        transition={{
                            duration: 1.3,
                            delay: 0.15 + index * 0.025,
                            ease: "easeOut"
                        }}
                    >
                        ✦
                    </motion.span>
                ))}
            </div>

            {/* Pétalos */}
            <div className="opening-petals">
                {petals.map((_, index) => (
                    <motion.span
                        key={index}
                        className="opening-petal"
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 0.5
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            x:
                                index % 2 === 0
                                    ? [0, 80 + index * 8]
                                    : [0, -80 - index * 8],
                            y: [0, -60 - index * 8],
                            rotate: [0, 180, 360],
                            scale: [0.5, 1, 0.7]
                        }}
                        transition={{
                            duration: 1.7,
                            delay: index * 0.035,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}