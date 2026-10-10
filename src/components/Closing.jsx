import { motion, useReducedMotion } from "framer-motion";
import { Crown, Heart, Sparkles } from "lucide-react";
import "./ClosingCinematic.css";

const stars = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 43 + 9) % 96}%`,
  top: `${(i * 31 + 5) % 85}%`,
  size: i % 5 === 0 ? 3 : 2,
  delay: (i % 8) * 0.38,
}));

const ease = [0.22, 1, 0.36, 1];

function FlyingButterfly({ reduceMotion }) {
  if (reduceMotion) return null;
  return (
    <motion.div
      className="xv-final-butterfly-flight"
      aria-hidden="true"
      initial={{ x: "-110px", y: 35, opacity: 0 }}
      whileInView={{
        x: ["-110px", "25vw", "60vw", "110vw"],
        y: [35, -20, 5, -65],
        opacity: [0, 1, 1, 0],
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 11, delay: 1.2, ease: "easeInOut" }}
    >
      <div className="xv-final-butterfly-real">
        <motion.div className="xv-final-wing xv-final-wing-left"
          animate={{ rotateY: [0, 68, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}>
          <span>✦</span>
        </motion.div>
        <div className="xv-final-butterfly-center">
          <i className="xv-final-antenna left" />
          <i className="xv-final-antenna right" />
          <i className="xv-final-butterfly-head" />
          <i className="xv-final-butterfly-body" />
        </div>
        <motion.div className="xv-final-wing xv-final-wing-right"
          animate={{ rotateY: [0, -68, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}>
          <span>✦</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Closing() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 1.05, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section className="xv-cinematic-ending" aria-label="Agradecimiento de Camila">
      {/* La imagen original permanece intacta; el zoom ocurre detrás del texto. */}
      <div className="xv-cinema-background-clip" aria-hidden="true">
        <motion.div
          className="xv-cinema-background"
          initial={reduceMotion ? false : { scale: 1.09, opacity: 0.55 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reduceMotion ? 0 : 3.5, ease }}
        />
      </div>
      <div className="xv-cinema-overlay" aria-hidden="true" />
      <div className="xv-cinema-stars" aria-hidden="true">
        {stars.map((star, i) => (
          <motion.span key={i} style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
            animate={reduceMotion ? {} : { opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.35, 0.7] }}
            transition={{ duration: 3 + (i % 4), delay: star.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="xv-cinema-content">
        <motion.div className="xv-cinema-crown" {...reveal(0.1)}><Crown size={25} strokeWidth={1} /></motion.div>
        <motion.p className="xv-cinema-eyebrow" {...reveal(0.18)}>MIS XV AÑOS</motion.p>
        <motion.div className="xv-cinema-ornament" {...reveal(0.25)}><span /><Sparkles size={14} strokeWidth={1} /><span /></motion.div>
        <motion.h2 className="xv-cinema-title" {...reveal(0.35)}>
          Gracias por formar parte
          <span>de mi historia</span>
        </motion.h2>
        <motion.p className="xv-cinema-subtitle" {...reveal(0.45)}>
          Los momentos más hermosos se vuelven inolvidables cuando los compartimos con personas especiales.
        </motion.p>
        <motion.div className="xv-cinema-name" {...reveal(0.55)}>Camila</motion.div>
        <motion.div className="xv-cinema-royal-divider" {...reveal(0.6)}><span /><Heart size={13} strokeWidth={1} /><span /></motion.div>
        <motion.div className="xv-cinema-date" {...reveal(0.65)}>
          <span>16</span><i>·</i><span>NOVIEMBRE</span><i>·</i><span>2026</span>
        </motion.div>
        <motion.p className="xv-cinema-quote" {...reveal(0.72)}>
          Hay momentos que duran un instante,<br />pero viven para siempre en el corazón.
        </motion.p>
        <motion.div className="xv-cinema-heart" {...reveal(0.78)}>♡</motion.div>
      </div>
      <FlyingButterfly reduceMotion={reduceMotion} />
      <div className="xv-cinema-bottom-glow" aria-hidden="true" />
    </section>
  );
}
