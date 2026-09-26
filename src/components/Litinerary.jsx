import { motion } from "framer-motion";
import {
  Church,
  Martini,
  UtensilsCrossed,
  Music,
  CakeSlice,
  Sparkles,
} from "lucide-react";

const events = [
  {
    time: "18:00 HRS",
    title: "Ceremonia Religiosa",
    description: "Acompáñame a recibir la bendición en este día tan especial.",
    icon: Church,
  },
  {
    time: "19:30 HRS",
    title: "Recepción",
    description: "Es momento de reunirnos y comenzar la celebración.",
    icon: Martini,
  },
  {
    time: "20:30 HRS",
    title: "Cena",
    description: "Disfrutemos juntos de una cena preparada para esta ocasión.",
    icon: UtensilsCrossed,
  },
  {
    time: "21:30 HRS",
    title: "Vals",
    description: "Uno de los momentos más especiales de la noche.",
    icon: Music,
  },
  {
    time: "22:00 HRS",
    title: "Pastel",
    description: "Compartamos un dulce momento para celebrar mis XV años.",
    icon: CakeSlice,
  },
  {
    time: "22:30 HRS",
    title: "¡A Bailar!",
    description: "Que comience la fiesta. ¡Disfrutemos juntos toda la noche!",
    icon: Sparkles,
  },
];

export default function Itinerary() {
  return (
    <section className="itinerary-section">
      <motion.div
        className="itinerary-header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="itinerary-small">NUESTRO GRAN DÍA</p>

        <h2>Itinerario</h2>

        <div className="itinerary-divider">
          <span>✦</span>
          <div></div>
          <span>✦</span>
        </div>

        <p className="itinerary-intro">
          Cada momento ha sido preparado con mucho cariño.
          <br />
          Acompáñame a disfrutar esta noche inolvidable.
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <motion.div
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
              key={event.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -45 : 45,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
            >
              <div className="timeline-dot">
                <Icon size={22} strokeWidth={1.5} />
              </div>

              <div className="timeline-content">
                <span className="timeline-time">{event.time}</span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="itinerary-ending"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span>✦</span>
        <p>UNA NOCHE PARA RECORDAR</p>
        <span>✦</span>
      </motion.div>
    </section>
  );
}