import { motion } from "framer-motion";
import {
    Church,
    MapPin,
    PartyPopper,
    Navigation,
    Sparkles
} from "lucide-react";

import "./EventDetailsPremium.css";


export default function EventDetails() {

    const openMap = (url) => {
        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    };


    const locations = [
        {
            type: "CEREMONIA",
            title: "Santuario del Señor de Las Maravillas",
            time: "2:00 P.M.",
            address: "Av. 16 de Enero s/n, El Arenal, Hidalgo",
            icon: Church,
            map: "https://maps.app.goo.gl/VwvdKBH4m5rBtzYw6"
        },
        {
            type: "RECEPCIÓN",
            title: "Casa. Fam. Gonzalez Pineda",
            time: "4:00 P.M.",
            address: "Av. Mina, El Arenal, Hidalgo",
            icon: PartyPopper,
            map: "https://maps.app.goo.gl/mPT8jEa33TLFz2Dy7"
        }
    ];


    return (

        <section className="xv-locations-section">


            {/* Fondos decorativos */}

            <div className="xv-location-glow xv-location-glow-one" />
            <div className="xv-location-glow xv-location-glow-two" />


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <motion.div
                className="xv-locations-header"

                initial={{
                    opacity: 0,
                    y: 35
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: false,
                    amount: 0.3
                }}

                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                <motion.div
                    className="xv-location-top-icon"

                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: false
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >
                    <MapPin size={23} strokeWidth={1.3} />
                </motion.div>


                <p className="xv-locations-small">
                    ACOMPÁÑAME
                </p>


                <h2>
                    Ceremonia y celebración
                </h2>


                <div className="xv-locations-divider">

                    <span />

                    <i>
                        ✦
                    </i>

                    <span />

                </div>


                <p className="xv-locations-message">
                    Será un honor compartir contigo
                    este día tan especial.
                </p>

            </motion.div>


            {/* =================================================
                MAPA / RECORRIDO
            ================================================= */}

            <div className="xv-location-route">


                {/* Línea de fondo */}

                <div className="xv-location-route-line" />


                {/* Línea dorada animada */}

                <motion.div
                    className="xv-location-route-progress"

                    initial={{
                        scaleY: 0
                    }}

                    whileInView={{
                        scaleY: 1
                    }}

                    viewport={{
                        once: false,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />


                {/* Luz que viaja por la ruta */}

                <motion.div
                    className="xv-location-traveler"

                    initial={{
                        top: "10%",
                        opacity: 0
                    }}

                    whileInView={{
                        top: ["10%", "90%"],
                        opacity: [0, 1, 1, 0]
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 2.3,
                        delay: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    <Navigation
                        size={14}
                        strokeWidth={1.5}
                    />
                </motion.div>


                {/* =================================================
                    UBICACIONES
                ================================================= */}

                {locations.map((location, index) => {

                    const Icon = location.icon;

                    const isLeft =
                        index % 2 === 0;


                    return (

                        <motion.div
                            key={location.type}

                            className={`
                                xv-location-item
                                ${
                                    isLeft
                                        ? "xv-location-left"
                                        : "xv-location-right"
                                }
                            `}

                            initial={{
                                opacity: 0,
                                x: isLeft ? -45 : 45,
                                y: 20
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                                y: 0
                            }}

                            viewport={{
                                once: false,
                                amount: 0.35
                            }}

                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >


                            {/* NODO CENTRAL */}

                            <motion.div
                                className="xv-location-node"

                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}

                                whileInView={{
                                    scale: 1,
                                    opacity: 1
                                }}

                                viewport={{
                                    once: false
                                }}

                                transition={{
                                    delay: 0.2 + index * 0.15,
                                    type: "spring",
                                    stiffness: 160,
                                    damping: 13
                                }}
                            >

                                <div className="xv-location-node-inner">

                                    <Icon
                                        size={22}
                                        strokeWidth={1.4}
                                    />

                                </div>

                            </motion.div>


                            {/* TARJETA */}

                            <motion.article
                                className="xv-location-card"

                                whileHover={{
                                    y: -5
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            >


                                {/* Número */}

                                <span className="xv-location-number">
                                    0{index + 1}
                                </span>


                                {/* Tipo */}

                                <p className="xv-location-type">
                                    {location.type}
                                </p>


                                {/* Nombre */}

                                <h3>
                                    {location.title}
                                </h3>


                                {/* Hora */}

                                <div className="xv-location-time">

                                    <span>
                                        {location.time}
                                    </span>

                                </div>


                                {/* Separador */}

                                <div className="xv-location-card-divider">

                                    <span />

                                    <Sparkles
                                        size={11}
                                        strokeWidth={1.3}
                                    />

                                    <span />

                                </div>


                                {/* Dirección */}

                                <div className="xv-location-address">

                                    <MapPin
                                        size={17}
                                        strokeWidth={1.4}
                                    />

                                    <p>
                                        {location.address}
                                    </p>

                                </div>


                                {/* Botón */}

                                <motion.button
                                    type="button"

                                    className="xv-location-button"

                                    onClick={() =>
                                        openMap(location.map)
                                    }

                                    whileHover={{
                                        scale: 1.03
                                    }}

                                    whileTap={{
                                        scale: 0.97
                                    }}
                                >

                                    <Navigation
                                        size={15}
                                        strokeWidth={1.6}
                                    />

                                    CÓMO LLEGAR

                                </motion.button>


                            </motion.article>

                        </motion.div>

                    );

                })}


                {/* =================================================
                    FINAL DE RUTA
                ================================================= */}

                <motion.div
                    className="xv-location-route-end"

                    initial={{
                        opacity: 0,
                        scale: 0
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: false
                    }}

                    transition={{
                        type: "spring",
                        delay: 0.4
                    }}
                >
                    ✦
                </motion.div>


            </div>


            {/* =================================================
                MENSAJE FINAL
            ================================================= */}

            <motion.div
                className="xv-location-ending"

                initial={{
                    opacity: 0,
                    y: 15
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: false
                }}

                transition={{
                    duration: 0.7
                }}
            >

                <span>✦</span>

                <p>
                    TE ESPERAMOS
                </p>

                <span>✦</span>

            </motion.div>


        </section>

    );
}