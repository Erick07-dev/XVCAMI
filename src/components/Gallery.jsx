import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ZoomIn,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const photos = [
    {
        src: "/images/gallery/camila1.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-main"
    },
    {
        src: "/images/gallery/camila2.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-tall"
    },
    {
        src: "/images/gallery/camila3.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-small"
    },
    {
        src: "/images/gallery/camila4.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-small"
    },
    {
        src: "/images/gallery/camila5.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-wide"
    },
    {
        src: "/images/gallery/camila6.png",
        alt: "Recuerdo de Camila",
        className: "royal-photo-tall"
    }
];

export default function Gallery() {

    const [selectedIndex, setSelectedIndex] =
        useState(null);

    const selectedPhoto =
        selectedIndex !== null
            ? photos[selectedIndex]
            : null;


    const openPhoto = (index) => {
        setSelectedIndex(index);
    };


    const closePhoto = () => {
        setSelectedIndex(null);
    };


    const nextPhoto = (event) => {

        event?.stopPropagation();

        setSelectedIndex((current) =>
            current === photos.length - 1
                ? 0
                : current + 1
        );
    };


    const previousPhoto = (event) => {

        event?.stopPropagation();

        setSelectedIndex((current) =>
            current === 0
                ? photos.length - 1
                : current - 1
        );
    };


    useEffect(() => {

        if (selectedIndex === null) {
            return;
        }

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {
                closePhoto();
            }

            if (event.key === "ArrowRight") {
                nextPhoto();
            }

            if (event.key === "ArrowLeft") {
                previousPhoto();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };

    }, [selectedIndex]);


    return (
        <>
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


                    {/* =====================================
                        ÁLBUM REAL
                    ===================================== */}

                    <div className="royal-gallery">

                        {/* Adornos */}

                        <motion.span
                            className="gallery-decoration gallery-decoration-1"
                            animate={{
                                rotate: [-8, 8, -8],
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                        >
                            ✦
                        </motion.span>


                        <motion.span
                            className="gallery-decoration gallery-decoration-2"
                            animate={{
                                y: [0, -8, 0],
                                rotate: [5, -5, 5]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity
                            }}
                        >
                            ♕
                        </motion.span>


                        {photos.map((photo, index) => (

                            <motion.button
                                key={photo.src}
                                type="button"

                                className={`
                                    royal-gallery-photo
                                    ${photo.className}
                                    royal-gallery-photo-${index + 1}
                                `}

                                onClick={() =>
                                    openPhoto(index)
                                }

                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.96
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.15
                                }}

                                transition={{
                                    duration: 0.65,
                                    delay:
                                        (index % 3) * 0.1
                                }}

                                whileHover={{
                                    y: -7
                                }}
                            >

                                {/* Marco */}

                                <div className="royal-photo-frame">

                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        loading="lazy"
                                    />


                                    {/* Overlay */}

                                    <div className="royal-photo-overlay">

                                        <div className="royal-photo-view">

                                            <ZoomIn
                                                size={23}
                                            />

                                            <span>
                                                VER RECUERDO
                                            </span>

                                        </div>

                                    </div>


                                    {/* Esquinas */}

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


            {/* =====================================
                VISOR DE FOTOGRAFÍAS
            ===================================== */}

            <AnimatePresence>

                {selectedPhoto && (

                    <motion.div
                        className="royal-gallery-modal"

                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: 1
                        }}

                        exit={{
                            opacity: 0
                        }}

                        onClick={closePhoto}
                    >

                        {/* CERRAR */}

                        <button
                            type="button"
                            className="royal-gallery-close"
                            onClick={closePhoto}
                            aria-label="Cerrar fotografía"
                        >
                            <X size={25} />
                        </button>


                        {/* ANTERIOR */}

                        <button
                            type="button"
                            className="
                                royal-gallery-arrow
                                royal-gallery-previous
                            "
                            onClick={previousPhoto}
                            aria-label="Fotografía anterior"
                        >
                            <ChevronLeft size={30} />
                        </button>


                        {/* FOTO */}

                        <motion.div
                            className="royal-modal-content"

                            initial={{
                                opacity: 0,
                                scale: 0.85,
                                y: 25
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0
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
                        >

                            <span className="modal-crown">
                                ♕
                            </span>

                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.alt}
                            />

                            <div className="modal-photo-number">
                                {selectedIndex + 1}
                                <span>/</span>
                                {photos.length}
                            </div>

                        </motion.div>


                        {/* SIGUIENTE */}

                        <button
                            type="button"
                            className="
                                royal-gallery-arrow
                                royal-gallery-next
                            "
                            onClick={nextPhoto}
                            aria-label="Siguiente fotografía"
                        >
                            <ChevronRight size={30} />
                        </button>

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    );
}