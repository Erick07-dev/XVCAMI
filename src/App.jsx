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




function App() {

    const [opened, setOpened] =
        useState(false);

    const musicRef =
        useRef(null);

    const handleOpen = async () => {

        await musicRef.current
            ?.playMusic();

        setOpened(true);

    };

    return (
        <>

            {!opened && (

                <Cover
                    onOpen={
                        handleOpen
                    }
                />

            )}

            <MusicPlayer
                ref={musicRef}
            />

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
                     

                    
                    

                </main>


            )}

        </>
    );
}

export default App;