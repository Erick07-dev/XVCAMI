import { motion } from "framer-motion";

const sparkles = [
    { left: "6%", top: "12%", delay: 0 },
    { left: "15%", top: "28%", delay: 1.2 },
    { left: "25%", top: "10%", delay: 2 },
    { left: "35%", top: "20%", delay: 0.7 },
    { left: "65%", top: "13%", delay: 1.6 },
    { left: "76%", top: "25%", delay: 0.4 },
    { left: "88%", top: "12%", delay: 2.3 },
    { left: "94%", top: "40%", delay: 1 },
    { left: "8%", top: "65%", delay: 1.8 },
    { left: "18%", top: "80%", delay: 0.5 },
    { left: "82%", top: "73%", delay: 2.1 },
    { left: "93%", top: "84%", delay: 1.4 },
];

const petals = Array.from({ length: 12 });

export default function Cover({ onOpen }) {
    return (
        <section className="garden-cover">

            {/* FONDOS */}
            <div className="garden-bg" />
            <div className="garden-light garden-light-left" />
            <div className="garden-light garden-light-right" />

            {/* MARCO */}
            <div className="garden-frame">
                <span className="garden-corner corner-1">✦</span>
                <span className="garden-corner corner-2">✦</span>
                <span className="garden-corner corner-3">✦</span>
                <span className="garden-corner corner-4">✦</span>
            </div>

            {/* DESTELLOS */}
            <div className="garden-sparkles">
                {sparkles.map((item, index) => (
                    <motion.span
                        key={index}
                        style={{
                            left: item.left,
                            top: item.top,
                        }}
                        animate={{
                            opacity: [0.15, 0.9, 0.15],
                            scale: [0.6, 1.35, 0.6],
                            rotate: [0, 45, 0],
                        }}
                        transition={{
                            duration: 3 + (index % 3),
                            delay: item.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ✦
                    </motion.span>
                ))}
            </div>

            {/* PÉTALOS FLOTANDO */}
            <div className="garden-petals">
                {petals.map((_, index) => (
                    <motion.span
                        key={index}
                        className={`garden-petal petal-${index + 1}`}
                        initial={{ y: "-15vh", opacity: 0 }}
                        animate={{
                            y: "115vh",
                            x: [0, 25, -18, 12],
                            rotate: [0, 120, 250, 360],
                            opacity: [0, 0.55, 0.45, 0],
                        }}
                        transition={{
                            duration: 11 + (index % 5),
                            delay: index * 1.1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* MARIPOSA IZQUIERDA */}
            <motion.div
                className="garden-butterfly butterfly-garden-left"
                animate={{
                    x: [0, 30, 15, 42, 0],
                    y: [0, -22, -48, -20, 0],
                    rotate: [-8, 10, -5, 8, -8],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span className="garden-wing garden-wing-left" />
                <span className="garden-butterfly-body" />
                <span className="garden-wing garden-wing-right" />
            </motion.div>

            {/* MARIPOSA DERECHA */}
            <motion.div
                className="garden-butterfly butterfly-garden-right"
                animate={{
                    x: [0, -30, -12, -42, 0],
                    y: [0, -28, -55, -25, 0],
                    rotate: [8, -10, 5, -8, 8],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span className="garden-wing garden-wing-left" />
                <span className="garden-butterfly-body" />
                <span className="garden-wing garden-wing-right" />
            </motion.div>

            {/* FLORES DECORATIVAS */}
            <motion.div
                className="garden-flower-decoration flower-decoration-left"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <span className="flower-big">❀</span>
                <span className="flower-medium">✿</span>
                <span className="flower-small">❀</span>
                <i className="garden-leaf leaf-1" />
                <i className="garden-leaf leaf-2" />
                <i className="garden-leaf leaf-3" />
            </motion.div>

            <motion.div
                className="garden-flower-decoration flower-decoration-right"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <span className="flower-big">❀</span>
                <span className="flower-medium">✿</span>
                <span className="flower-small">❀</span>
                <i className="garden-leaf leaf-1" />
                <i className="garden-leaf leaf-2" />
                <i className="garden-leaf leaf-3" />
            </motion.div>

            {/* ARCO CENTRAL */}
            <motion.div
                className="garden-arch"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
            >
                <div className="garden-arch-inner" />
            </motion.div>

            {/* CONTENIDO */}
            <div className="garden-content">

                <motion.div
                    className="garden-crown"
                    initial={{ opacity: 0, y: -20, scale: 0.6 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    ♕
                </motion.div>

                <motion.p
                    className="garden-xv"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.9 }}
                >
                    MIS XV AÑOS
                </motion.p>

                <motion.div
                    className="garden-divider"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.65, duration: 1 }}
                >
                    <div />
                    <span>✦</span>
                    <div />
                </motion.div>

                <motion.div
                    className="garden-name"
                    initial={{
                        opacity: 0,
                        scale: 0.82,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 1.3,
                        ease: "easeOut",
                    }}
                >
                    <motion.span
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.7, 1.3, 0.7],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                        }}
                    >
                        ✦
                    </motion.span>


                    <h1>Camila</h1>

                    <motion.span
                        animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1.3, 0.7, 1.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        ✦
                    </motion.span>
                </motion.div>

                {/* FECHA */}
                <motion.div
                    className="garden-date"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.05, duration: 1 }}
                >
                    <span>16</span>
                    <i />
                    <strong>NOVIEMBRE</strong>
                    <i />
                    <span>2026</span>
                </motion.div>

                <motion.p
                    className="garden-message"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25, duration: 1 }}
                >
                    Hay momentos que se convierten
                    <br />
                    en recuerdos para toda la vida.
                </motion.p>

                <motion.p
                    className="garden-invitation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.45, duration: 1 }}
                >
                    Te invito a compartir conmigo
                    <br />
                    este día tan especial.
                </motion.p>

                <motion.button
                    type="button"
                    className="garden-open-button"
                    onClick={onOpen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.65, duration: 0.8 }}
                    whileHover={{
                        scale: 1.045,
                        y: -3,
                    }}
                    whileTap={{ scale: 0.96 }}
                >
                    <span>✦</span>
                    <strong>ABRIR INVITACIÓN</strong>
                    <span>✦</span>
                </motion.button>

                <motion.div
                    className="garden-enter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9, duration: 1 }}
                >
                    <motion.span
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        ↓
                    </motion.span>

                    <p>TOCA PARA ENTRAR</p>
                </motion.div>
            </div>

            {/* BRUMA INFERIOR */}
            <div className="garden-bottom-glow" />
        </section>
    );
}