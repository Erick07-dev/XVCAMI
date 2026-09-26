import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";

import "./PremiumCountdown.css";

const EVENT_DATE = new Date("2026-11-16T18:00:00");

export default function PremiumCountdown() {

    const calculateTime = () => {

        const difference =
            EVENT_DATE.getTime() - new Date().getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),

            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (difference / 1000) % 60
            )
        };
    };


    const [time, setTime] =
        useState(calculateTime());


    useEffect(() => {

        const interval = setInterval(() => {

            setTime(calculateTime());

        }, 1000);

        return () => clearInterval(interval);

    }, []);


    const format = (value) =>
        String(value).padStart(2, "0");


    const units = [
        {
            value: time.days,
            label: "DÍAS"
        },
        {
            value: time.hours,
            label: "HORAS"
        },
        {
            value: time.minutes,
            label: "MINUTOS"
        },
        {
            value: time.seconds,
            label: "SEGUNDOS"
        }
    ];


    const addToCalendar = () => {

        const calendarData = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//XV Camila//ES",
            "BEGIN:VEVENT",
            "DTSTART:20261116T180000",
            "DTEND:20261116T235900",
            "SUMMARY:Mis XV Años - Camila",
            "DESCRIPTION:Celebración de los XV años de Camila.",
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");


        const blob = new Blob(
            [calendarData],
            {
                type: "text/calendar;charset=utf-8"
            }
        );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "XV-Camila-16-Noviembre-2026.ics";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };


    return (

        <section className="xv-premium-countdown">

            {/* FONDOS DECORATIVOS */}

            <div className="xv-countdown-glow xv-glow-one" />

            <div className="xv-countdown-glow xv-glow-two" />


            {/* DESTELLOS */}

            <motion.span
                className="xv-countdown-sparkle xv-sparkle-one"

                animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.7, 1.3, 0.7],
                    rotate: [0, 90, 180]
                }}

                transition={{
                    duration: 3,
                    repeat: Infinity
                }}
            >
                ✦
            </motion.span>


            <motion.span
                className="xv-countdown-sparkle xv-sparkle-two"

                animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.7, 1]
                }}

                transition={{
                    duration: 4,
                    repeat: Infinity
                }}
            >
                ✧
            </motion.span>


            <motion.span
                className="xv-countdown-sparkle xv-sparkle-three"

                animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0]
                }}

                transition={{
                    duration: 3.5,
                    repeat: Infinity
                }}
            >
                ✦
            </motion.span>


            {/* CONTENIDO */}

            <motion.div
                className="xv-countdown-container"

                initial={{
                    opacity: 0,
                    y: 45
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: false,
                    amount: 0.15
                }}

                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                {/* ICONO */}

                <motion.div
                    className="xv-countdown-icon"

                    animate={{
                        y: [0, -5, 0]
                    }}

                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >

                    <Sparkles size={22} />

                </motion.div>


                {/* SUBTÍTULO */}

                <p className="xv-countdown-eyebrow">

                    CADA VEZ FALTA MENOS

                </p>


                {/* TÍTULO */}

                <h2 className="xv-countdown-heading">

                    Para celebrar
                    <br />

                    <span>
                        un día inolvidable
                    </span>

                </h2>


                {/* DIVISOR */}

                <div className="xv-countdown-divider">

                    <span />

                    <i>✦</i>

                    <span />

                </div>


                {/* CONTADOR */}

                <div className="xv-countdown-grid">

                    {units.map((unit) => (

                        <div
                            className="xv-countdown-card"
                            key={unit.label}
                        >

                            <div className="xv-countdown-number">

                                <AnimatePresence
                                    mode="popLayout"
                                >

                                    <motion.strong
                                        key={unit.value}

                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.9
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}

                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.9
                                        }}

                                        transition={{
                                            duration: 0.3
                                        }}
                                    >

                                        {format(unit.value)}

                                    </motion.strong>

                                </AnimatePresence>

                            </div>


                            <span className="xv-countdown-label">

                                {unit.label}

                            </span>

                        </div>

                    ))}

                </div>


                {/* FECHA */}

                <div className="xv-countdown-date">

                    <span />

                    <p>
                        16 · NOVIEMBRE · 2026
                    </p>

                    <span />

                </div>


                {/* MENSAJE */}

                <p className="xv-countdown-message">

                    ♡ Camila espera compartir
                    este momento contigo ♡

                </p>


                {/* BOTÓN */}

                <motion.button
                    type="button"

                    className="xv-calendar-button"

                    onClick={addToCalendar}

                    whileHover={{
                        scale: 1.04,
                        y: -2
                    }}

                    whileTap={{
                        scale: 0.96
                    }}
                >

                    <CalendarDays size={17} />

                    <span>
                        AGREGAR AL CALENDARIO
                    </span>

                </motion.button>

            </motion.div>

        </section>
    );
}