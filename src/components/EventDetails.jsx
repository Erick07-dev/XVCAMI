import { motion } from "framer-motion";
import {
    Church,
    MapPin,
    PartyPopper
} from "lucide-react";

export default function EventDetails() {

    const openMap = (url) => {
        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section className="events-section">

            <motion.div
                className="events-content"
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

                <p className="events-small">
                    ACOMPÁÑAME
                </p>

                <h2>
                    Ceremonia y celebración
                </h2>

                <div className="events-divider">
                    <span>✦</span>
                    <div></div>
                    <span>✦</span>
                </div>

                <p className="events-message">
                    Será un honor compartir contigo
                    este día tan especial.
                </p>

                <div className="events-grid">

                    {/* CEREMONIA */}

                    <motion.article
                        className="event-card"
                        initial={{
                            opacity: 0,
                            x: -40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <div className="event-icon">
                            <Church size={30} />
                        </div>

                        <p className="event-type">
                            CEREMONIA
                        </p>

                        <h3>
                            Parroquia de Nuestra Señora
                        </h3>

                        <p className="event-time">
                            6:00 P.M.
                        </p>

                        <div className="event-location">

                            <MapPin size={18} />

                            <p>
                                Av. Principal 123,
                                Monterrey, Nuevo León
                            </p>

                        </div>

                        <button
                            className="map-button"
                            onClick={() =>
                                openMap(
                                    "https://www.google.com/maps/search/?api=1&query=Monterrey+Nuevo+Leon"
                                )
                            }
                        >
                            <MapPin size={17} />

                            VER UBICACIÓN
                        </button>

                    </motion.article>


                    {/* RECEPCIÓN */}

                    <motion.article
                        className="event-card"
                        initial={{
                            opacity: 0,
                            x: 40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <div className="event-icon">
                            <PartyPopper size={30} />
                        </div>

                        <p className="event-type">
                            RECEPCIÓN
                        </p>

                        <h3>
                            Salón Jardín Real
                        </h3>

                        <p className="event-time">
                            8:00 P.M.
                        </p>

                        <div className="event-location">

                            <MapPin size={18} />

                            <p>
                                Calle de las Flores 456,
                                Monterrey, Nuevo León
                            </p>

                        </div>

                        <button
                            className="map-button"
                            onClick={() =>
                                openMap(
                                    "https://www.google.com/maps/search/?api=1&query=Monterrey+Nuevo+Leon"
                                )
                            }
                        >
                            <MapPin size={17} />

                            VER UBICACIÓN
                        </button>

                    </motion.article>

                </div>

            </motion.div>

        </section>
    );
}