import { useRef, useState } from "react";

import Cover from "./components/Cover";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import MessageLetter from "./components/MessageLetter";
import PremiumCountdown from "./components/PremiumCountdown";
import Family from "./components/Family";
import EventDetails from "./components/EventDetails";
import Litinerary from "./components/Litinerary";
import DressCode from "./components/DressCode";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import Closing from "./components/Closing";
import MagicDecorations from "./components/MagicDecorations";
import ScrollReveal from "./components/ScrollReveal";
import OpeningTransition from "./components/OpeningTransition";
import GeneradorInvitacion from "./components/GeneradorInvitacion";

import "./App.css";


function App() {

    const [opened, setOpened] = useState(false);

    const [opening, setOpening] = useState(false);

    const musicRef = useRef(null);

    const esGenerador =
  window.location.pathname === "/generar-invitacion";

if (esGenerador) {
  return <GeneradorInvitacion />;
}


    const handleOpen = async () => {

        // Evitar doble clic
        if (opening) return;

        // Oculta portada y comienza transición
        setOpening(true);

        // Iniciar música
        try {

            await musicRef.current?.playMusic();

        } catch (error) {

            console.log(
                "No se pudo iniciar la música:",
                error
            );

        }


        // Esperamos a que termine la animación
        setTimeout(() => {

            setOpened(true);

            setOpening(false);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });

        }, 1800);

    };


    return (
        <>

            {/* ===============================
                PORTADA
            =============================== */}

            {!opened && !opening && (

                <Cover
                    onOpen={handleOpen}
                />

            )}


            {/* ===============================
                MÚSICA
            =============================== */}

            <MusicPlayer
                ref={musicRef}
            />


            {/* ===============================
                TRANSICIÓN DE APERTURA
            =============================== */}

            {opening && (

                <OpeningTransition />

            )}


            {/* ===============================
                INVITACIÓN
            =============================== */}

            {opened && (

                <main className="invitation">


                    {/* HERO */}

                    <ScrollReveal>

                        <Hero />

                    </ScrollReveal>


                    {/* MENSAJE */}

                    <ScrollReveal>

                        <MessageLetter />

                    </ScrollReveal>


                    {/* CONTADOR */}

                    <ScrollReveal>

                        <PremiumCountdown />

                    </ScrollReveal>


                    {/* FAMILIA */}

                    <ScrollReveal>

                        <Family />

                    </ScrollReveal>


                    {/* DETALLES DEL EVENTO */}

                    <ScrollReveal>

                        <EventDetails />

                    </ScrollReveal>


                    {/* ITINERARIO */}

                    <ScrollReveal>

                        <Litinerary />

                    </ScrollReveal>


                    {/* VESTIMENTA */}

                    <ScrollReveal>

                        <DressCode />

                    </ScrollReveal>


                    {/* GALERÍA */}

                    <ScrollReveal>

                        <Gallery />

                    </ScrollReveal>


                    


                    {/* REGALOS */}

                    <ScrollReveal>

                        <Gifts />

                    </ScrollReveal>


                    {/* CONFIRMACIÓN */}

                    <ScrollReveal>

                        <RSVP />

                    </ScrollReveal>


                    {/* CIERRE */}

                    <ScrollReveal>

                        <Closing />

                    </ScrollReveal>


                    {/* DECORACIONES GLOBALES */}

                    <MagicDecorations />


                </main>

            )}

        </>
    );
}


export default App;