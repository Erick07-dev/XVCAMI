import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Closing() {
    return (
        <section className="closing-section">

            <div className="closing-stars">
                <span>✦</span>
                <span>✧</span>
                <span>✦</span>
                <span>✧</span>
            </div>

            <motion.div
                className="closing-content"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    amount: 0.2
                }}
                transition={{
                    duration: 1
                }}
            >

                <motion.div
                    className="closing-crown"
                    initial={{
                        opacity: 0,
                        scale: 0.6
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8
                    }}
                >
                    ♕
                </motion.div>

                <p className="closing-small">
                    GRACIAS POR SER PARTE
                </p>

                <h2>
                    De este momento tan especial
                </h2>

                <div className="closing-divider">
                    <span>✦</span>
                    <div></div>
                    <span>✦</span>
                </div>

                <p className="closing-message">
                    Hay momentos en la vida que se vuelven
                    inolvidables gracias a las personas que
                    los comparten con nosotros.
                </p>

                <p className="closing-message">
                    Gracias por acompañarme en el inicio
                    de esta nueva etapa y por formar parte
                    de uno de los días más importantes
                    de mi vida.
                </p>

                <div className="closing-date">

                    <span>
                        19
                    </span>

                    <div>
                        <p>
                            NOVIEMBRE
                        </p>

                        <strong>
                            2026
                        </strong>
                    </div>

                </div>

                <motion.div
                    className="closing-heart"
                    animate={{
                        scale: [1, 1.08, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                >
                    <Heart size={26} />
                </motion.div>

                <p className="closing-wait">
                    TE ESPERAMOS
                </p>

                <h3>
                    Camila
                </h3>

                <p className="closing-final-text">
                    ✦ Mis XV Años ✦
                </p>

            </motion.div>

        </section>
    );
}