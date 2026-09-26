import { useState } from "react";
import {
  Copy,
  Check,
  MessageCircle,
  Link2,
  Crown,
  Sparkles,
} from "lucide-react";
import "./GeneradorInvitacion.css";

export default function GeneradorInvitacion() {
  const [nombre, setNombre] = useState("");
  const [enlace, setEnlace] = useState("");
  const [copiado, setCopiado] = useState(false);

  const generarEnlace = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();

    if (!nombreLimpio) {
      setEnlace("");
      return;
    }

    const url =
      `${window.location.origin}/?para=${encodeURIComponent(nombreLimpio)}`;

    setEnlace(url);
    setCopiado(false);
  };

  const copiarEnlace = async () => {
    if (!enlace) return;

    try {
      await navigator.clipboard.writeText(enlace);
      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el enlace:", error);
    }
  };

  const enviarWhatsApp = () => {
  

  const invitado = nombre.trim();

  const mensaje = `💜 Hola, ${invitado} 💜

Con mucha alegría queremos compartir con ustedes un momento muy especial. ✨

Camila está por celebrar sus XV años 👑🦋 y nos encantaría que fueran parte de este día tan esperado. 💜

Hemos preparado esta invitación con mucho cariño, donde podrán encontrar todos los detalles de la celebración. 🌸

✨ Será un honor contar con su presencia y compartir juntos este momento inolvidable. ✨

💌 Los esperamos con mucho cariño.

👇 Abrir invitación:
${enlace}`;

  const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(mensaje)}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <main className="generator-page">

      <div className="generator-decoration decoration-one">✦</div>
      <div className="generator-decoration decoration-two">✧</div>
      <div className="generator-decoration decoration-three">♡</div>

      <section className="generator-card">

        <div className="generator-crown">
          <Crown size={29} strokeWidth={1.2} />
        </div>

        <p className="generator-eyebrow">
          MIS XV AÑOS · CAMILA
        </p>

        <h1>
          Generador de
          <span> invitaciones</span>
        </h1>

        <div className="generator-divider">
          <span />
          <Sparkles size={14} />
          <span />
        </div>

        <p className="generator-description">
          Escribe el nombre de la persona o familia y genera
          su invitación personalizada.
        </p>

        <form onSubmit={generarEnlace} className="generator-form">

          <label htmlFor="guestName">
            NOMBRE DEL INVITADO
          </label>

          <input
            id="guestName"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Familia González"
            maxLength={80}
            autoComplete="off"
          />

          <button type="submit" className="generator-main-button">
            <Link2 size={16} />
            GENERAR INVITACIÓN
          </button>

        </form>

        {enlace && (
          <div className="generator-result">

            <p className="generator-result-title">
              INVITACIÓN LISTA
            </p>

            <div className="generator-guest">
              <span>Invitación especial para</span>
              <strong>{nombre.trim()}</strong>
            </div>

            <div className="generator-link-box">
              <Link2 size={16} />

              <p>
                {enlace}
              </p>
            </div>

            <div className="generator-actions">

              <button
                type="button"
                onClick={copiarEnlace}
                className="generator-copy"
              >
                {copiado ? (
                  <>
                    <Check size={17} />
                    COPIADO
                  </>
                ) : (
                  <>
                    <Copy size={17} />
                    COPIAR ENLACE
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={enviarWhatsApp}
                className="generator-whatsapp"
              >
                <MessageCircle size={17} />
                WHATSAPP
              </button>

            </div>

          </div>
        )}

        <p className="generator-note">
          El nombre aparecerá automáticamente en la portada de la invitación.
        </p>

      </section>

    </main>
  );
}