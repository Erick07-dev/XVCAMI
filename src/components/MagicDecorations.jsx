import { motion } from "framer-motion";

const butterflies = [
  { left: "6%", delay: 0, duration: 15, size: 25 },
  { left: "18%", delay: 4, duration: 18, size: 18 },
  { left: "38%", delay: 7, duration: 16, size: 23 },
  { left: "58%", delay: 2, duration: 20, size: 20 },
  { left: "78%", delay: 8, duration: 17, size: 26 },
  { left: "91%", delay: 5, duration: 19, size: 17 },
];

const sparkles = Array.from({ length: 18 });

export default function MagicDecorations() {
  return (
    <div className="magic-world" aria-hidden="true">

      {/* MARIPOSAS */}
      <div className="butterfly-layer">
        {butterflies.map((butterfly, index) => (
          <motion.div
            key={index}
            className={`magic-butterfly butterfly-${index + 1}`}
            style={{
              left: butterfly.left,
              fontSize: butterfly.size,
            }}
            initial={{
              y: "110vh",
              opacity: 0,
              rotate: -10,
            }}
            animate={{
              y: "-20vh",
              x: [0, 35, -25, 45, 0],
              rotate: [-8, 12, -12, 8, -8],
              opacity: [0, 0.8, 1, 0.8, 0],
            }}
            transition={{
              duration: butterfly.duration,
              delay: butterfly.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🦋
          </motion.div>
        ))}
      </div>

      {/* DESTELLOS */}
      <div className="magic-sparkles">
        {sparkles.map((_, index) => (
          <span
            key={index}
            className={`magic-sparkle magic-sparkle-${index + 1}`}
          >
            ✦
          </span>
        ))}
      </div>

      {/* DETALLE IZQUIERDO */}
      <motion.div
        className="fairytale-decoration fairytale-left"
        animate={{
          y: [0, -8, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="fairytale-symbol">♕</span>
        <span className="fairytale-text">Érase una vez...</span>
      </motion.div>

      {/* DETALLE DERECHO */}
      <motion.div
        className="fairytale-decoration fairytale-right"
        animate={{
          y: [0, 8, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="glass-slipper">👠</span>
        <span className="fairytale-text">Una noche mágica</span>
      </motion.div>

      {/* CARRUAJE */}
      <motion.div
        className="magic-carriage"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.25, 0.65, 0.25],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="carriage-crown">♕</div>

        <div className="carriage-body">
          <span>✦</span>
        </div>

        <div className="carriage-wheels">
          <span></span>
          <span></span>
        </div>
      </motion.div>

    </div>
  );
}