import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Family() {

    return (
        <section className="family-section">

            <motion.div
                className="family-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9 }}
            >

                <motion.div
                    className="family-icon"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        type: "spring"
                    }}
                >
                    <Heart size={28} />
                </motion.div>

                <p className="family-small">
                    CON LA BENDICIÓN DE DIOS
                </p>

                <h2>
                    Y el amor de mi familia
                </h2>

                <div className="family-divider">
                    <span>✦</span>
                    <div></div>
                    <span>✦</span>
                </div>

                <p className="family-message">
                    Hay personas que hacen de cada momento
                    algo especial. Gracias por acompañarme,
                    guiarme y ser parte de este sueño.
                </p>


                {/* PADRES */}

                <div className="family-group">

                    <p className="family-title">
                        MIS PADRES
                    </p>

                    <div className="family-names">

                        <motion.div
                            className="family-name-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span>✦</span>

                            <h3>
                                Alejandro Martínez
                            </h3>

                            <p>
                                Papá
                            </p>
                        </motion.div>


                        <motion.div
                            className="family-name-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span>✦</span>

                            <h3>
                                Mariana González
                            </h3>

                            <p>
                                Mamá
                            </p>
                        </motion.div>

                    </div>

                </div>


                {/* PADRINOS */}

                <div className="family-group padrinos">

                    <p className="family-title">
                        MIS PADRINOS
                    </p>

                    <div className="family-names">

                        <motion.div
                            className="family-name-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span>♕</span>

                            <h3>
                                Carlos Hernández
                            </h3>

                            <p>
                                Padrino
                            </p>
                        </motion.div>


                        <motion.div
                            className="family-name-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15
                            }}
                        >
                            <span>♕</span>

                            <h3>
                                Daniela Ramírez
                            </h3>

                            <p>
                                Madrina
                            </p>
                        </motion.div>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}