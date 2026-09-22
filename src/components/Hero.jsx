import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-section">

            {/* Decoración superior */}
            <motion.div
                className="hero-crown"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                ♕
            </motion.div>

            <motion.p
                className="hero-small"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                MIS XV AÑOS
            </motion.p>

            <motion.div
                className="hero-line"
                initial={{ width: 0 }}
                animate={{ width: "180px" }}
                transition={{ delay: 0.6, duration: 1 }}
            ></motion.div>

            <motion.h1
                initial={{
                    opacity: 0,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 0.7,
                    duration: 1
                }}
            >
                Camila
            </motion.h1>

            <motion.p
                className="hero-date"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                16 · NOVIEMBRE · 2026
            </motion.p>

            <motion.p
                className="hero-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Hay momentos que permanecen
                para siempre en el corazón.
            </motion.p>

            <motion.div
                className="scroll-indicator"
                animate={{
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            >
                ↓
            </motion.div>

            

            <p className="scroll-text">
                DESLIZA PARA CONTINUAR
            </p>

        </section>
    );
}