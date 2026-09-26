import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function DressCode() {

    return (
        <section className="dress-section">

            <motion.div
                className="dress-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
    once: false,
    amount: 0.2
}}
                transition={{
                    duration: 0.9
                }}
            >

                {/* TÍTULO */}

                <motion.div
                    className="dress-top-icon"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.6
                    }}
                >
                    ♕
                </motion.div>

                <p className="dress-small">
                    CÓDIGO DE VESTIMENTA
                </p>

                <h2>
                    Elegante
                </h2>

                <div className="dress-divider">

                    <span>✦</span>

                    <div></div>

                    <span>✦</span>

                </div>

                <p className="dress-message">
                    Queremos que formes parte de esta
                    noche tan especial luciendo tu
                    mejor estilo.
                </p>


                

                


                {/* MUJERES / HOMBRES */}

                <div className="dress-options">

                    <motion.div
                        className="dress-option"
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <span className="dress-option-icon">
                            ✦
                        </span>

                        <p>
                            DAMAS
                        </p>

                        <h3>
                            Vestido Formal
                        </h3>

                    </motion.div>


                    <motion.div
                        className="dress-option"
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <span className="dress-option-icon">
                            ✦
                        </span>

                        <p>
                            CABALLEROS
                        </p>

                        <h3>
                            Traje Formal
                        </h3>

                    </motion.div>

                </div>


                {/* COLOR RESERVADO */}

                <motion.div
                    className="reserved-card"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.7
                    }}
                >

                    <Sparkles
                        size={22}
                        className="reserved-sparkle"
                    />

                    <p className="reserved-title">
                        COLOR RESERVADO
                    </p>

                    <div className="reserved-line"></div>

                    <strong>
                        LILA
                    </strong>

                    <p className="reserved-description">
                        Este color está reservado
                        especialmente para la quinceañera.
                        Agradecemos evitarlo en tu vestimenta.
                    </p>

                </motion.div>


                <p className="dress-final">
                    ✦ Gracias por ser parte de este día tan especial ✦
                </p>

            </motion.div>

        </section>
    );
}