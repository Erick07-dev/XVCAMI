import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useImperativeHandle(ref, () => ({

        async playMusic() {

            if (!audioRef.current) return;

            try {

                audioRef.current.volume = 0.45;

                await audioRef.current.play();

                setPlaying(true);

            } catch (error) {

                console.log("El navegador bloqueó la reproducción:", error);

                setPlaying(false);

            }

        }

    }));

    const toggleMusic = async () => {

        if (!audioRef.current) return;

        if (playing) {

            audioRef.current.pause();

            setPlaying(false);

        } else {

            try {

                await audioRef.current.play();

                setPlaying(true);

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/De Niña a Mujer.mp3"
                loop
                preload="auto"
            />

            <button
                className={`music-button ${playing ? "playing" : ""}`}
                onClick={toggleMusic}
                aria-label={
                    playing
                        ? "Pausar música"
                        : "Reproducir música"
                }
            >

                {playing ? (
                    <Music size={22} />
                ) : (
                    <VolumeX size={22} />
                )}

                {playing && (
                    <span className="music-wave">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                )}

            </button>
        </>
    );
});

export default MusicPlayer;