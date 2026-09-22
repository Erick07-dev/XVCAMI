import { motion } from "framer-motion";

const butterflies = [
    { left: "6%",  delay: 0, duration: 8, size: 24 },
    { left: "88%", delay: 1, duration: 10, size: 20 },

    { left: "16%", delay: 2, duration: 9, size: 18 },
    { left: "75%", delay: 0, duration: 11, size: 25 },

    { left: "5%",  delay: 3, duration: 10, size: 22 },
    { left: "92%", delay: 2, duration: 8, size: 19 },

    { left: "20%", delay: 1, duration: 12, size: 21 },
    { left: "82%", delay: 4, duration: 9, size: 24 },

    { left: "8%",  delay: 2, duration: 11, size: 18 },
    { left: "90%", delay: 0, duration: 10, size: 22 },

    { left: "28%", delay: 3, duration: 9, size: 17 },
    { left: "68%", delay: 1, duration: 12, size: 20 },
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
                top: `${5 + index * 8}%`,
            }}

            animate={{
                x: [0, 35, -25, 45, 0],
                y: [0, -40, -80, -40, 0],
                rotate: [-10, 12, -12, 10, -10],
                scale: [1, 1.1, .9, 1.05, 1],
                opacity: [.25, .8, 1, .7, .25],
            }}

            transition={{
                duration: butterfly.duration,
                delay: butterfly.delay,
                repeat: Infinity,
                ease: "easeInOut",
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