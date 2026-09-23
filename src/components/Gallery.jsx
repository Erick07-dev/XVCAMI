import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
                .querySelector(".gallery-featured")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
        }, 100);
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
        <section className="gallery-section">

            <motion.div
                className="gallery-content"
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
                    amount: 0.1
                }}
                transition={{
                    duration: 0.9
                }}
            >

                {/* CORONA */}

                <motion.div
                    className="gallery-crown"
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


                <p className="gallery-small">
                    MIS RECUERDOS
                </p>


                <h2>
                    Momentos especiales
                </h2>


                <div className="gallery-divider">

                    <span>✦</span>

                    <div></div>

                    <span>♕</span>

                    <div></div>

                    <span>✦</span>

                </div>


                <p className="gallery-message">
                    Cada fotografía guarda una historia,
                    una sonrisa y un momento que siempre
                    vivirá en mi corazón.
                </p>


                {/* =========================================
                    FOTO SELECCIONADA
                ========================================= */}

                <AnimatePresence mode="wait">

                    {selectedPhoto && (

                        <motion.div
                            className="gallery-featured"

                            key={selectedPhoto.src}

                            initial={{
                                opacity: 0,
                                y: 25,
                                scale: 0.97
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}

                            exit={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97
                            }}

                            transition={{
                                duration: 0.4
                            }}
                        >

                            {/* CORONA SUPERIOR */}

                            <motion.div
                                className="featured-crown"
                                animate={{
                                    y: [0, -4, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                            >
                                ♕
                            </motion.div>


                            {/* CERRAR */}

                            <button
                                type="button"
                                className="featured-close"
                                onClick={closePhoto}
                                aria-label="Cerrar fotografía"
                            >
                                <X size={20} />
                            </button>


                            {/* FOTO */}

                            <div className="featured-photo-container">

                                <button
                                    type="button"
                                    className="featured-arrow featured-previous"
                                    onClick={previousPhoto}
                                    aria-label="Fotografía anterior"
                                >
                                    <ChevronLeft size={28} />
                                </button>


                                <motion.img
                                    key={selectedPhoto.src}
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}

                                    initial={{
                                        opacity: 0,
                                        scale: 0.96
                                    }}

                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}

                                    transition={{
                                        duration: 0.4
                                    }}
                                />


                                <button
                                    type="button"
                                    className="featured-arrow featured-next"
                                    onClick={nextPhoto}
                                    aria-label="Siguiente fotografía"
                                >
                                    <ChevronRight size={28} />
                                </button>

                            </div>


                            {/* CONTADOR */}

                            <div className="featured-counter">

                                <span>
                                    {selectedIndex + 1}
                                </span>

                                <i>/</i>

                                <span>
                                    {photos.length}
                                </span>

                            </div>


                            <div className="featured-decoration">
                                <span>✦</span>
                                <div></div>
                                <span>♕</span>
                                <div></div>
                                <span>✦</span>
                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>


                {/* =========================================
                    GALERÍA
                ========================================= */}

                <div className="royal-gallery">

                    {photos.map((photo, index) => (

                        <motion.button
                            key={photo.src}

                            type="button"

                            className={`
                                royal-gallery-photo
                                royal-gallery-photo-${index + 1}
                                ${
                                    selectedIndex === index
                                        ? "photo-selected"
                                        : ""
                                }
                            `}

                            onClick={() =>
                                openPhoto(index)
                            }

                            initial={{
                                opacity: 0,
                                y: 35
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true,
                                amount: 0.1
                            }}

                            transition={{
                                duration: 0.6,
                                delay: (index % 3) * 0.08
                            }}

                            whileHover={{
                                y: -5
                            }}
                        >

                            <div className="royal-photo-frame">

                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                />


                                <div className="royal-photo-overlay">

                                    <span>
                                        VER FOTO
                                    </span>

                                </div>


                                <span className="photo-corner corner-top-left">
                                    ✦
                                </span>

                                <span className="photo-corner corner-top-right">
                                    ✦
                                </span>

                                <span className="photo-corner corner-bottom-left">
                                    ✦
                                </span>

                                <span className="photo-corner corner-bottom-right">
                                    ✦
                                </span>

                            </div>

                        </motion.button>

                    ))}

                </div>


                {/* FINAL */}

                <motion.div
                    className="gallery-ending"

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1
                    }}
                >

                    <span>✦</span>

                    <p>
                        Una historia que apenas comienza
                    </p>

                    <span>✦</span>

                </motion.div>

            </motion.div>

        </section>
    );
}