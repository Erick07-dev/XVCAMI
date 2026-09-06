import { motion } from "framer-motion";
import {
    Gift,
    CreditCard,
    HeartHandshake
} from "lucide-react";

export default function Gifts() {

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Datos copiados");
        } catch {
            alert("No se pudo copiar automáticamente");
        }
    };

    return (
        <section className="gifts-section">

            <motion.div
                className="gifts-content"
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
                    duration: 0.9
                }}
            >

                <div className="gifts-icon">
                    <Gift size={30} />
                </div>

                <p className="gifts-small">
                    MESA DE REGALOS
                </p>

                <h2>
                    Tu presencia es mi mejor regalo
                </h2>

                <div className="gifts-divider">

                    <span>✦</span>

                    <div></div>

                    <span>✦</span>

                </div>

                <p className="gifts-message">
                    Lo más importante para mí es compartir
                    este día contigo. Si deseas obsequiarme
                    algo adicional, aquí encontrarás algunas
                    opciones.
                </p>


                <div className="gifts-grid">

                    {/* LLUVIA DE SOBRES */}

                    <motion.div
                        className="gift-card"
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <div className="gift-card-icon">
                            <HeartHandshake size={27} />
                        </div>

                        <p className="gift-label">
                            OPCIÓN 01
                        </p>

                        <h3>
                            Lluvia de sobres
                        </h3>

                        <p className="gift-description">
                            Si deseas hacerme un obsequio,
                            puedes hacerlo mediante un sobre
                            el día de la celebración.
                        </p>

                        <div className="gift-decoration">
                            ✦
                        </div>

                    </motion.div>


                    {/* TRANSFERENCIA */}

                    <motion.div
                        className="gift-card"
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <div className="gift-card-icon">
                            <CreditCard size={27} />
                        </div>

                        <p className="gift-label">
                            OPCIÓN 02
                        </p>

                        <h3>
                            Transferencia
                        </h3>

                        <p className="gift-description">
                            También puedes realizar una
                            transferencia si así lo prefieres.
                        </p>

                        <div className="bank-data">

                            <span>
                                BANCO DE EJEMPLO
                            </span>

                            <strong>
                                0123 4567 8901 2345
                            </strong>

                            <small>
                                A nombre de Mariana González
                            </small>

                        </div>

                        <button
                            type="button"
                            className="copy-button"
                            onClick={() =>
                                copyText(
                                    "0123456789012345"
                                )
                            }
                        >
                            COPIAR DATOS
                        </button>

                    </motion.div>

                </div>


                <p className="gifts-final">
                    ♡ Gracias por acompañarme en este momento tan especial ♡
                </p>

            </motion.div>

        </section>
    );
}