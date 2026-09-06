import { motion } from "framer-motion";
import { CalendarPlus } from "lucide-react";

export default function AddToCalendar() {

    const addToCalendar = () => {

        const calendarContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//XV Camila//Invitacion Digital//ES",
            "CALSCALE:GREGORIAN",
            "METHOD:PUBLISH",
            "BEGIN:VEVENT",

            // 19 de noviembre de 2026
            // 6:00 PM a 11:59 PM
            "DTSTART:20261119T180000",
            "DTEND:20261119T235900",

            "SUMMARY:Mis XV Años - Camila",

            "DESCRIPTION:Acompáñanos a celebrar los XV años de Camila.",

            "LOCATION:Monterrey\\, Nuevo León",

            "STATUS:CONFIRMED",

            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob(
            [calendarContent],
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
            "XV-Camila-19-Noviembre-2026.ics";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };


    return (
        <section className="calendar-section">

            <motion.div
                className="calendar-content"
                initial={{
                    opacity: 0,
                    y: 40
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
                transition={{
                    duration: 0.8
                }}
            >

                <motion.div
                    className="calendar-icon"
                    initial={{
                        scale: 0.7,
                        opacity: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6
                    }}
                >

                    <CalendarPlus size={29} />

                </motion.div>


                <p className="calendar-small">
                    GUARDA ESTE DÍA
                </p>


                <h2>
                    Agéndalo
                </h2>


                <div className="calendar-divider">

                    <span>✦</span>

                    <div></div>

                    <span>✦</span>

                </div>


                <p className="calendar-message">
                    Nos encantará compartir contigo
                    este momento tan especial.
                    Guarda la fecha para que no te
                    pierdas esta celebración.
                </p>


                <div className="calendar-date-card">

                    <span className="calendar-day">
                        19
                    </span>

                    <div className="calendar-date-info">

                        <span>
                            NOVIEMBRE
                        </span>

                        <strong>
                            2026
                        </strong>

                    </div>

                </div>


                


                <p className="calendar-note">
                    ✦ Guarda este día para recordarlo siempre ✦
                </p>

            </motion.div>

        </section>
    );
}