import Layout from "../Components/Layout";
import "../Styles/Story.css";
import { FiPlay } from "react-icons/fi";

function Story() {
  const galleryImages = [
    "/template/images/Story1.png",
    "/template/images/Story2.png",
    "/template/images/Story3.png",
    "/template/images/Story4.png",
    "/template/images/Story5.png",
    "/template/images/Story6.png",
  ];

  const achievements = [
    {
      image: "/template/images/Story5.png",
      text: "Ein herzliches und vertrauensvolles Familiencafé-Erlebnis.",
    },
    {
      image: "/template/images/Story6.png",
      text: "Von Eltern wegen des Komforts und der Fürsorge geschätzt.",
    },
    {
      image: "/template/images/Story7.png",
      text: "Eine fröhliche, spielfreundliche Umgebung für Kinder.",
    },
    {
      image: "/template/images/Story8.png",
      text: "Ein gemütlicher Ort für unvergessliche Familienmomente.",
    },
  ];

  return (
    <Layout>
      <>
        <section
          className="story-page-title"
          style={{
            backgroundImage: "url('/template/images/Story2.png')",
          }}
        >
          <div className="story-page-title-overlay"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center story-title-row">
              <div className="col-lg-6 col-md-8 text-center">
                <h1 className="story-main-title">Unsere Geschichte</h1>
                <h2 className="story-sub-title">
                  <span></span>
                  Der Weg zum Familiencafé
                  <span></span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="story-hero-section">
          <div className="container">
            <div className="row">
              <div className="col-12 position-relative">
                <img
                  className="story-hero-image"
                  src="/template/images/Story1.png"
                  alt="Our Story"
                />

                <div className="story-hero-overlay-content">
                  <span className="story-hero-word">Our</span>

                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="story-video-button"
                    aria-label="Watch our story"
                  >
                    <span className="story-video-icon">
                      <FiPlay />
                    </span>
                  </a>

                  <span className="story-hero-word">Story</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-intro-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-7 col-xl-8 col-lg-10 text-center">
                <span className="story-small-label">
                  <span></span>
                   Der Weg zum Familiencafé
                  <span></span>
                </span>

                <h3 className="story-intro-text">
                 Priyas Eltern-Kind Café wurde als ein herzlicher und fröhlicher Ort geschaffen,
                an dem Eltern entspannen, Kinder sicher spielen und
                Familien bei gutem Essen,
                Kaffee und schönen Erinnerungen wertvolle Zeit miteinander verbringen können.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="story-gallery-section">
          <div className="container">
            <div className="story-gallery-line"></div>

            <div className="row">
              <div className="col-12">
                <div className="story-gallery-grid">
                  {galleryImages.map((image, index) => (
                    <div className="story-gallery-item" key={index}>
                      <img src={image} alt={`Story ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-achievements-section">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-7 text-center">
                <span className="story-small-label">
                  <span></span>
                  Warum Familien uns lieben
                  <span></span>
                </span>
                <h2 className="story-achievements-title">Was uns besonders macht</h2>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 g-0 story-achievement-grid">
              {achievements.map((item, index) => (
                <div className="col" key={index}>
                  <div className="story-achievement-card">
                    <div className="story-achievement-image">
                      <img src={item.image} alt={`Achievement ${index + 1}`} />
                    </div>
                    <div className="story-achievement-content">
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-auto text-center">
                <div className="story-visitor-text">
                  Viele <span>glückliche Familien</span> haben unser einladendes Café besucht und genossen.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}

export default Story;