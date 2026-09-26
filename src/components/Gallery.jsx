import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Heart,
    Sparkles
} from "lucide-react";

import "./GalleryPremium.css";


const photos = [
    {
        src: "/images/gallery/camila1.png",
        alt: "Recuerdo de Camila"
    },
    {
        src: "/images/gallery/camila2.png",
        alt: "Recuerdo de Camila"
    },
    {
        src: "/images/gallery/camila3.png",
        alt: "Recuerdo de Camila"
    },
    {
        src: "/images/gallery/camila4.png",
        alt: "Recuerdo de Camila"
    },
    {
        src: "/images/gallery/camila5.png",
        alt: "Recuerdo de Camila"
    },
    {
        src: "/images/gallery/camila6.png",
        alt: "Recuerdo de Camila"
    }
];


const rotations = [-4, 3, -2, 4, -3, 2];


export default function Gallery() {

    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectedPhoto =
        selectedIndex !== null
            ? photos[selectedIndex]
            : null;


    const openPhoto = (index) => {

        setSelectedIndex(index);

        setTimeout(() => {

            document
                .querySelector(".xv-album-open")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 120);
    };


    const closePhoto = () => {
        setSelectedIndex(null);
    };


    const previousPhoto = () => {

        setSelectedIndex((current) => {

            if (current === null) return 0;

            return current === 0
                ? photos.length - 1
                : current - 1;

        });
    };


    const nextPhoto = () => {

        setSelectedIndex((current) => {

            if (current === null) return 0;

            return current === photos.length - 1
                ? 0
                : current + 1;

        });
    };


    return (

        <section className="xv-gallery-section">

            {/* Fondos */}

            <div className="xv-gallery-glow xv-gallery-glow-1" />
            <div className="xv-gallery-glow xv-gallery-glow-2" />


            {/* PÉTALOS DE FONDO */}

            <div
                className="xv-gallery-background-petals"
                aria-hidden="true"
            >

                {[...Array(8)].map((_, index) => (

                    <motion.span
                        key={index}
                        className={`xv-gallery-petal petal-${index + 1}`}

                        animate={{
                            y: [0, -10, 0],
                            rotate: [
                                index * 10,
                                index * 10 + 12,
                                index * 10
                            ]
                        }}

                        transition={{
                            duration: 5 + (index % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.25
                        }}
                    />

                ))}

            </div>


            <div className="xv-gallery-content">


                {/* =========================================
                    ENCABEZADO
                ========================================= */}

                <motion.div
                    className="xv-gallery-header"

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
                        duration: 0.8
                    }}
                >

                    <motion.div
                        className="xv-gallery-crown"

                        animate={{
                            y: [0, -5, 0]
                        }}

                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        ♕
                    </motion.div>


                    <p className="xv-gallery-small">
                        MIS RECUERDOS
                    </p>


                    <h2>
                        Momentos especiales
                    </h2>


                    <div className="xv-gallery-divider">

                        <span />

                        <i>✦</i>

                        <span />

                    </div>


                    <p className="xv-gallery-message">
                        Cada fotografía guarda una historia,
                        una sonrisa y un momento que siempre
                        vivirá en mi corazón.
                    </p>

                </motion.div>



                {/* =========================================
                    ÁLBUM ABIERTO
                ========================================= */}

                <AnimatePresence mode="wait">

                    {selectedPhoto && (

                        <motion.div
                            className="xv-album-open"

                            initial={{
                                opacity: 0,
                                rotateY: -40,
                                scale: 0.92,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                rotateY: 0,
                                scale: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                rotateY: 35,
                                scale: 0.94,
                                y: -20
                            }}

                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >


                            {/* ESQUINAS */}

                            <span className="xv-album-corner xv-album-tl">
                                ✦
                            </span>

                            <span className="xv-album-corner xv-album-tr">
                                ✦
                            </span>

                            <span className="xv-album-corner xv-album-bl">
                                ✦
                            </span>

                            <span className="xv-album-corner xv-album-br">
                                ✦
                            </span>


                            {/* CERRAR */}

                            <motion.button
                                type="button"
                                className="xv-album-close"

                                onClick={closePhoto}

                                whileHover={{
                                    rotate: 90,
                                    scale: 1.08
                                }}

                                whileTap={{
                                    scale: 0.9
                                }}

                                aria-label="Cerrar fotografía"
                            >
                                <X size={19} />
                            </motion.button>


                            {/* DECORACIÓN SUPERIOR */}

                            <div className="xv-album-heading">

                                <span />

                                <p>
                                    RECUERDOS DE MIS XV
                                </p>

                                <span />

                            </div>


                            {/* FOTO PRINCIPAL */}

                            <div className="xv-album-photo-area">


                                <motion.button
                                    type="button"
                                    className="xv-album-arrow xv-album-prev"

                                    onClick={previousPhoto}

                                    whileTap={{
                                        scale: 0.9
                                    }}

                                    aria-label="Fotografía anterior"
                                >
                                    <ChevronLeft size={23} />
                                </motion.button>


                                <div className="xv-album-gold-frame">

                                    <div className="xv-album-inner-frame">

                                        <AnimatePresence mode="wait">

                                            <motion.img
                                                key={selectedPhoto.src}

                                                src={selectedPhoto.src}
                                                alt={selectedPhoto.alt}

                                                initial={{
                                                    opacity: 0,
                                                    scale: 1.05
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    scale: 1
                                                }}

                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.97
                                                }}

                                                transition={{
                                                    duration: 0.45
                                                }}
                                            />

                                        </AnimatePresence>


                                        <div className="xv-album-photo-shine" />

                                    </div>

                                </div>


                                <motion.button
                                    type="button"
                                    className="xv-album-arrow xv-album-next"

                                    onClick={nextPhoto}

                                    whileTap={{
                                        scale: 0.9
                                    }}

                                    aria-label="Siguiente fotografía"
                                >
                                    <ChevronRight size={23} />
                                </motion.button>

                            </div>


                            {/* PÉTALOS */}

                            <motion.span
                                className="xv-album-petal xv-album-petal-1"

                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [25, 38, 25]
                                }}

                                transition={{
                                    duration: 4,
                                    repeat: Infinity
                                }}
                            />

                            <motion.span
                                className="xv-album-petal xv-album-petal-2"

                                animate={{
                                    y: [0, 7, 0],
                                    rotate: [-30, -15, -30]
                                }}

                                transition={{
                                    duration: 5,
                                    repeat: Infinity
                                }}
                            />

                            <motion.span
                                className="xv-album-petal xv-album-petal-3"

                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [45, 55, 45]
                                }}

                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity
                                }}
                            />


                            {/* TEXTO */}

                            <div className="xv-album-caption">

                                <Heart
                                    size={14}
                                    strokeWidth={1.3}
                                />

                                <p>
                                    Un recuerdo para siempre
                                </p>

                                <Heart
                                    size={14}
                                    strokeWidth={1.3}
                                />

                            </div>


                            {/* CONTADOR */}

                            <div className="xv-album-counter">

                                <span>
                                    {String(selectedIndex + 1).padStart(2, "0")}
                                </span>

                                <i />

                                <span>
                                    {String(photos.length).padStart(2, "0")}
                                </span>

                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>



                {/* =========================================
                    POLAROIDS
                ========================================= */}

                <div className="xv-polaroid-gallery">

                    {photos.map((photo, index) => (

                        <motion.button
                            key={photo.src}

                            type="button"

                            className={`
                                xv-polaroid
                                ${
                                    selectedIndex === index
                                        ? "xv-polaroid-selected"
                                        : ""
                                }
                            `}

                            onClick={() =>
                                openPhoto(index)
                            }

                            initial={{
                                opacity: 0,
                                y: 45,
                                rotate: rotations[index]
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: rotations[index]
                            }}

                            viewport={{
                                once: false,
                                amount: 0.15
                            }}

                            transition={{
                                duration: 0.65,
                                delay: index * 0.07
                            }}

                            whileHover={{
                                y: -12,
                                rotate: 0,
                                scale: 1.035
                            }}

                            whileTap={{
                                scale: 0.97
                            }}
                        >

                            <span className="xv-polaroid-tape" />


                            <div className="xv-polaroid-photo">

                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                />

                                <div className="xv-polaroid-overlay">

                                    <Sparkles
                                        size={17}
                                        strokeWidth={1.3}
                                    />

                                    <span>
                                        VER RECUERDO
                                    </span>

                                </div>

                            </div>


                            <div className="xv-polaroid-bottom">

                                <span>
                                    ✦
                                </span>

                                <p>
                                    Camila
                                </p>

                                <span>
                                    ✦
                                </span>

                            </div>

                        </motion.button>

                    ))}

                </div>



                {/* =========================================
                    FINAL
                ========================================= */}

                <motion.div
                    className="xv-gallery-ending"

                    initial={{
                        opacity: 0,
                        y: 15
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
                        duration: 0.8
                    }}
                >

                    <span>✦</span>

                    <p>
                        UNA HISTORIA QUE APENAS COMIENZA
                    </p>

                    <span>✦</span>

                </motion.div>

            </div>

        </section>
    );
}