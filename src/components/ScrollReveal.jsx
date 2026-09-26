import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
    className = "",
    delay = 0
}) {
    return (
        <motion.div
            className={`scroll-reveal ${className}`}

            initial={{
                opacity: 0,
                y: 45,
                scale: 0.98
            }}

            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}

            viewport={{
                once: false,
                amount: 0.12,
                margin: "0px 0px -40px 0px"
            }}

            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
}