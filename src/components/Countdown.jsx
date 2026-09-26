import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CalendarPlus } from "lucide-react";

export default function Countdown() {

    const eventDate = new Date("2026-11-16T18:00:00");

    const calculateTimeLeft = () => {

        const now = new Date();

        const difference =
            eventDate.getTime() - now.getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days:
                Math.floor(
                    difference /
                    (1000 * 60 * 60 * 24)
                ),

            hours:
                Math.floor(
                    (difference /
                        (1000 * 60 * 60)) %
                    24
                ),

            minutes:
                Math.floor(
                    (difference /
                        (1000 * 60)) %
                    60
                ),

            seconds:
                Math.floor(
                    (difference / 1000) %
                    60
                )
        };
    };

    const [timeLeft, setTimeLeft] =
        useState(calculateTimeLeft());

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft(
                calculateTimeLeft()
            );

        }, 1000);

        return () =>
            clearInterval(timer);

    }, []);


    const items = [
        {
            value: timeLeft.days,
            label: "DÍAS"
        },
        {
            value: timeLeft.hours,
            label: "HORAS"
        },
        {
            value: timeLeft.minutes,
            label: "MINUTOS"
        },
        {
            value: timeLeft.seconds,
            label: "SEGUNDOS"
        }
    ];


    const addToCalendar = () => {

        const calendarContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//XV Camila//Invitacion Digital//ES",
            "CALSCALE:GREGORIAN",
            "METHOD:PUBLISH",

            "BEGIN:VEVENT",

            "DTSTART:20261116T180000",
            "DTEND:20261116T235900",

            "SUMMARY:Mis XV Años - Camila",

            "DESCRIPTION:Acompáñanos a celebrar los XV años de Camila.",

            "LOCATION:Monterrey\\, Nuevo León",

            "STATUS:CONFIRMED",

            "END:VEVENT",

            "END:VCALENDAR"
        ].join("\r\n");


        const blob =
            new Blob(
                [calendarContent],
                {
                    type:
                        "text/calendar;charset=utf-8"
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

        <section className="countdown-section">

            <motion.div
                className="countdown-content"

                initial={{
                    opacity: 0,
                    y: 50
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

               viewport={{
    once: false,
    amount: 0.2
}}

                transition={{
                    duration: 0.9
                }}
            >

                <div className="countdown-icon">

                    <CalendarDays
                        size={30}
                    />

                </div>


                <p className="countdown-small">
                    GUARDA LA FECHA
                </p>


                <h2>
                    Falta muy poco
                </h2>


                <div className="countdown-divider">

                    <span>✦</span>

                    <div></div>

                    <span>✦</span>

                </div>


                <p className="countdown-description">

                    Cada día nos acerca
                    un poquito más a
                    una noche inolvidable.

                </p>


                <div className="countdown-grid">

                    {items.map(
                        (item, index) => (

                            <motion.div
                                className="countdown-card"
                                key={item.label}

                                initial={{
                                    opacity: 0,
                                    scale: 0.85
                                }}

                                whileInView={{
                                    opacity: 1,
                                    scale: 1
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    delay:
                                        index * 0.12,
                                    duration: 0.5
                                }}
                            >

                                <span className="countdown-number">

                                    {String(
                                        item.value
                                    ).padStart(
                                        2,
                                        "0"
                                    )}

                                </span>


                                <span className="countdown-label">

                                    {item.label}

                                </span>

                            </motion.div>

                        )
                    )}

                </div>


                <motion.button
                    type="button"
                    className="countdown-calendar-button"

                    onClick={addToCalendar}

                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 0.6,
                        delay: 0.2
                    }}

                    whileHover={{
                        scale: 1.03
                    }}

                    whileTap={{
                        scale: 0.97
                    }}
                >

                    <CalendarPlus size={18} />

                    AGREGAR AL CALENDARIO

                </motion.button>


                <div className="event-date-card">

                    <span className="event-day">
                        16
                    </span>


                    <div className="event-date-info">

                        <span>
                            NOVIEMBRE
                        </span>

                        <strong>
                            2026
                        </strong>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}