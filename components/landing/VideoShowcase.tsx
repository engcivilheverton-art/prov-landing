import s from "./landing.module.css";

const videos = [
  { src: "/videos/prov-demonstracao.mp4", label: "Demonstração do PROV" },
  { src: "/videos/prov-apresentacao.mp4", label: "Apresentação do PROV" },
];

export default function VideoShowcase() {
  return (
    <section className={`${s.sec} ${s.alt}`} aria-labelledby="videos-title">
      <div className={s.w}>
        <div className={s.c}>
          <div className={s.eyebrow}>Vídeos</div>
          <h2 id="videos-title">Conheça o PROV em ação.</h2>
          <p className={s.sub}>
            Veja como o aplicativo ajuda a organizar e acompanhar suas finanças.
          </p>
        </div>
        <div className={s.videoGrid}>
          {videos.map((video) => (
            <video
              key={video.src}
              className={s.videoPlayer}
              autoPlay
              controls
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={video.label}
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução de vídeo.
            </video>
          ))}
        </div>
      </div>
    </section>
  );
}
