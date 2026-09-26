import { motion } from "framer-motion";
import {
    Church,
    Martini,
    UtensilsCrossed,
    Music,
    CakeSlice,
    Sparkles,
} from "lucide-react";

import "./ItineraryInteractive.css";


const events = [
    {
        time: "2:00 P.M HRS",
        title: "Ceremonia Religiosa",
        description:
            "Acompáñame a recibir la bendición en este día tan especial.",
        icon: Church,
    },
    {
        time: "4:00 P.M HRS",
        title: "Recepción",
        description:
            "Es momento de reunirnos y comenzar la celebración.",
        icon: Martini,
    },
    {
        time: "20:30 HRS",
        title: "Cena",
        description:
            "Disfrutemos juntos de una cena preparada para esta ocasión.",
        icon: UtensilsCrossed,
    },
    {
        time: "21:30 HRS",
        title: "Vals",
        description:
            "Uno de los momentos más especiales de la noche.",
        icon: Music,
    },
    {
        time: "22:00 HRS",
        title: "Pastel",
        description:
            "Compartamos un dulce momento para celebrar mis XV años.",
        icon: CakeSlice,
    },
    {
        time: "22:30 HRS",
        title: "¡A Bailar!",
        description:
            "Que comience la fiesta. ¡Disfrutemos juntos toda la noche!",
        icon: Sparkles,
    },
];


export default function Itinerary() {

    return (

        <section className="xv-itinerary">


            {/* =================================================
                DECORACIÓN DE FONDO
            ================================================= */}

            <div className="xv-itinerary-decoration xv-itinerary-decoration-one" />

            <div className="xv-itinerary-decoration xv-itinerary-decoration-two" />


            {/* =================================================
                ENCABEZADO
            ================================================= */}

            <motion.div
                className="xv-itinerary-header"

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
                    amount: 0.25
                }}

                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                <motion.div
                    className="xv-itinerary-crown"

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
                    ♕
                </motion.div>


                <p className="xv-itinerary-small">

                    NUESTRO GRAN DÍA

                </p>


                <h2>

                    Itinerario

                </h2>


                <div className="xv-itinerary-divider">

                    <span />

                    <i>
                        ✦
                    </i>

                    <span />

                </div>


                <p className="xv-itinerary-intro">

                    Cada momento ha sido preparado
                    con mucho cariño.

                    <br />

                    Acompáñame a disfrutar esta noche
                    inolvidable.

                </p>

            </motion.div>


            {/* =================================================
                TIMELINE
            ================================================= */}

            <div className="xv-timeline">

{/* Decoraciones en los espacios del itinerario */}
<div className="xv-timeline-decorations" aria-hidden="true">

    <motion.span
        className="xv-floating-decoration xv-deco-butterfly-1"
        animate={{
            y: [0, -12, 0],
            rotate: [-5, 7, -5]
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        ♡
    </motion.span>

    <motion.span
        className="xv-floating-decoration xv-deco-crown"
        animate={{
            y: [0, -8, 0],
            rotate: [-3, 3, -3]
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        ♕
    </motion.span>

    <motion.span
        className="xv-floating-decoration xv-deco-sparkle-1"
        animate={{
            opacity: [0.25, 0.8, 0.25],
            scale: [0.8, 1.15, 0.8]
        }}
        transition={{
            duration: 3,
            repeat: Infinity
        }}
    >
        ✦
    </motion.span>

    <motion.span
        className="xv-floating-decoration xv-deco-sparkle-2"
        animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.7, 1.1, 0.7]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1
        }}
    >
        ✧
    </motion.span>

    <motion.span
        className="xv-floating-decoration xv-deco-petal-1"
        animate={{
            y: [0, 18, 0],
            x: [0, 8, 0],
            rotate: [15, 70, 15]
        }}
        transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />

    <motion.span
        className="xv-floating-decoration xv-deco-petal-2"
        animate={{
            y: [0, -15, 0],
            x: [0, -7, 0],
            rotate: [-20, 40, -20]
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />

    <motion.div
        className="xv-fairy-stars xv-stars-left"
        animate={{
            opacity: [0.25, 0.65, 0.25]
        }}
        transition={{
            duration: 4,
            repeat: Infinity
        }}
    >
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
    </motion.div>

    <motion.div
        className="xv-fairy-stars xv-stars-right"
        animate={{
            opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.8
        }}
    >
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
    </motion.div>

</div>



                {/* Línea base */}

                <div className="xv-timeline-line-background" />


                {/* =================================================
                    LÍNEA DORADA ANIMADA
                ================================================= */}

                <motion.div
                    className="xv-timeline-line-progress"

                    initial={{
                        scaleY: 0
                    }}

                    whileInView={{
                        scaleY: 1
                    }}

                    viewport={{
                        once: false,
                        amount: 0.08
                    }}

                    transition={{
                        duration: 2.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />


                {/* =================================================
                    EVENTOS
                ================================================= */}

                {events.map((event, index) => {

                    const Icon = event.icon;

                    const isLeft =
                        index % 2 === 0;


                    return (

                        <motion.div
                            className={`
                                xv-timeline-item
                                ${
                                    isLeft
                                        ? "xv-timeline-left"
                                        : "xv-timeline-right"
                                }
                            `}

                            key={event.title}

                            initial={{
                                opacity: 0,
                                y: 35,
                                x: isLeft
                                    ? -35
                                    : 35
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                x: 0
                            }}

                            viewport={{
                                once: false,
                                amount: 0.45
                            }}

                            transition={{
                                duration: 0.75,
                                delay: 0.05,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >


                            {/* =====================================
                                PUNTO CENTRAL
                            ===================================== */}

                            <motion.div
                                className="xv-timeline-node"

                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}

                                whileInView={{
                                    scale: 1,
                                    opacity: 1
                                }}

                                viewport={{
                                    once: false,
                                    amount: 0.6
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 170,
                                    damping: 14,
                                    delay: 0.15
                                }}
                            >

                                <motion.div
                                    className="xv-timeline-node-inner"

                                    whileInView={{
                                        rotate: [0, 8, -8, 0]
                                    }}

                                    viewport={{
                                        once: false
                                    }}

                                    transition={{
                                        duration: 0.7,
                                        delay: 0.25
                                    }}
                                >

                                    <Icon
                                        size={21}
                                        strokeWidth={1.4}
                                    />

                                </motion.div>

                            </motion.div>


                            {/* =====================================
                                TARJETA DEL EVENTO
                            ===================================== */}

                            <motion.div
                                className="xv-timeline-card"

                                initial={{
                                    opacity: 0,
                                    scale: 0.96
                                }}

                                whileInView={{
                                    opacity: 1,
                                    scale: 1
                                }}

                                viewport={{
                                    once: false,
                                    amount: 0.45
                                }}

                                transition={{
                                    duration: 0.6,
                                    delay: 0.18
                                }}
                            >


                                {/* HORARIO */}

                                <motion.span
                                    className="xv-timeline-time"

                                    initial={{
                                        opacity: 0,
                                        y: 8
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    viewport={{
                                        once: false
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        delay: 0.25
                                    }}
                                >

                                    {event.time}

                                </motion.span>


                                {/* TÍTULO */}

                                <h3>

                                    {event.title}

                                </h3>


                                {/* DIVISOR PEQUEÑO */}

                                <div className="xv-timeline-card-divider">

                                    <span />

                                    <i>
                                        ✦
                                    </i>

                                </div>


                                {/* DESCRIPCIÓN */}

                                <p>

                                    {event.description}

                                </p>


                            </motion.div>


                        </motion.div>

                    );

                })}


                {/* =================================================
                    REMATE FINAL DE LA LÍNEA
                ================================================= */}

                <motion.div
                    className="xv-timeline-final-point"

                    initial={{
                        opacity: 0,
                        scale: 0
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: false,
                        amount: 0.8
                    }}

                    transition={{
                        duration: 0.7,
                        type: "spring"
                    }}
                >

                    ✦

                </motion.div>


            </div>


            {/* =================================================
                FINAL
            ================================================= */}

            <motion.div
                className="xv-itinerary-ending"

                initial={{
                    opacity: 0,
                    y: 25
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: false,
                    amount: 0.5
                }}

                transition={{
                    duration: 0.8
                }}
            >

                <span>
                    ✦
                </span>

                <p>
                    UNA NOCHE PARA RECORDAR
                </p>

                <span>
                    ✦
                </span>

            </motion.div>


        </section>

    );
}