import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

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

    const [selectedPhoto, setSelectedPhoto] =
        useState(null);

    return (
        <>
            <section className="gallery-section">

                <motion.div
                    className="gallery-content"
                    initial={{
                        opacity: 0,
                        y: 50
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

                    <div className="gallery-crown">
                        ♕
                    </div>

                    <p className="gallery-small">
                        MIS RECUERDOS
                    </p>

                    <h2>
                        Momentos especiales
                    </h2>

                    <div className="gallery-divider">

                        <span>✦</span>

                        <div></div>

                        <span>✦</span>

                    </div>

                    <p className="gallery-message">
                        Cada fotografía guarda una historia,
                        una sonrisa y un momento que siempre
                        vivirá en mi corazón.
                    </p>


                    {/* GALERÍA */}

                    <div className="gallery-grid">

                        {photos.map((photo, index) => (

                            <motion.button
                                type="button"
                                className={`gallery-item gallery-item-${index + 1}`}
                                key={photo.src}
                                onClick={() =>
                                    setSelectedPhoto(photo)
                                }
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
                                    amount: 0.15
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay:
                                        (index % 3) * 0.1
                                }}
                                whileHover={{
                                    y: -5
                                }}
                            >

                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                />

                                <div className="gallery-overlay">

                                    <ZoomIn
                                        size={25}
                                    />

                                    <span>
                                        VER FOTO
                                    </span>

                                </div>

                            </motion.button>

                        ))}

                    </div>


                    <p className="gallery-final">
                        ✦ Una historia que apenas comienza ✦
                    </p>

                </motion.div>

            </section>


            {/* FOTO EN GRANDE */}

            <AnimatePresence>

                {selectedPhoto && (

                    <motion.div
                        className="gallery-modal"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        onClick={() =>
                            setSelectedPhoto(null)
                        }
                    >

                        <button
                            type="button"
                            className="gallery-close"
                            onClick={() =>
                                setSelectedPhoto(null)
                            }
                            aria-label="Cerrar fotografía"
                        >
                            <X size={25} />
                        </button>

                        <motion.img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            initial={{
                                opacity: 0,
                                scale: 0.85
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9
                            }}
                            transition={{
                                duration: 0.35
                            }}
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        />

                    </motion.div>

                )}

            </AnimatePresence>
        </>
    );
}