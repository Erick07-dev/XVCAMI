import { useRef, useState } from "react";

import Cover from "./components/Cover";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
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

                    <Hero />

                    <Countdown />

                    <Family />

                    <EventDetails />

                    <Litinerary />

                    <DressCode />

                    <Gallery />

                    <Gifts />

                    <RSVP />

                    <Closing />

                    <MagicDecorations /> 

                    

                </main>


            )}

        </>
    );
}

export default App;