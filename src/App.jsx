import { useRef, useState } from "react";

import Cover from "./components/Cover";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import MessageLetter from "./components/MessageLetter";
import Countdown from "./components/Countdown";
import Family from "./components/Family";
import Litinerary from "./components/Litinerary";
import DressCode from "./components/DressCode";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import "./App.css";
import EventDetails from "./components/EventDetails";
import { Gift } from "lucide-react";
import Closing from "./components/Closing";
import MagicDecorations from "./components/MagicDecorations";
import ScrollReveal from "./components/ScrollReveal";
import OpeningTrasition from "./components/OpeningTransition";




function App() {

    const [opened, setOpened] =
        useState(false);

    const [opening, setOpening] = useState(false);

    const musicRef =
        useRef(null);

    const handleOpen = async () => {
    if (opening) return;

    setOpening(true);

    // Iniciar música inmediatamente después del toque del usuario
    try {
        await musicRef.current?.playMusic();
    } catch (error) {
        console.log("No se pudo iniciar la música:", error);
    }

    // Esperar la animación cinematográfica
    setTimeout(() => {
        setOpened(true);
        setOpening(false);

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 1800);
};

    return (
        <>

            {!opened && !opening && (
            <Cover onOpen={handleOpen} />
        )}


            <MusicPlayer
                ref={musicRef}
            />

            {opening && (
            <OpeningTransition />
        )}

            {opened && (

                <main className="invitation">
                    
                    <ScrollReveal>
                        <Hero />
                    </ScrollReveal>
                    

                    <ScrollReveal>
                        <MessageLetter />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Countdown />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Family />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <EventDetails />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Litinerary />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <DressCode />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Gallery />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Gifts />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <RSVP />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <Closing />
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <MagicDecorations />
                    </ScrollReveal>

                    <ScrollReveal>
                        <OpeningTrasition />
                    </ScrollReveal>
                     

                    
                    

                </main>


            )}

        </>
    );
}

export default App;