import { useEffect, useState } from "react";
import kidsCafe from "../Assets/KidsCafe.png";
import birthday from "../Assets/birthday.png";
import backgrimg from "../Assets/backgrimg.png";
import "./AnimatedImageSection.css"; 
const testimonials = [
  {
    quote:
      "Ein herzlicher und schöner Ort für Familien. Die Atmosphäre ist einladend, friedlich und voller Freude für Eltern und Kinder.",
    name: "Glückliche Eltern"
  },
  {
    quote:
      "Ein wunderbares Erlebnis, freundlicher Service und eine gemütliche Atmosphäre. Ein tolles Café zum Entspannen, während sich auch die Kinder vergnügen.",
    name: "Familiengast"
  },
  {
    quote:
      "Ein so charmanter Ort mit familiärer Atmosphäre. Das Essen, die Getränke und das gesamte Ambiente machen ihn zu etwas ganz Besonderem.",
    name: "Café-Besucher"
  }
];

function AnimatedImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="family-showcase-section">
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="outline-text">Spielen</span>
          <span className="solid-text">Elternschaft</span>
          <span className="outline-text">Erfahrung</span>
          <span className="solid-text">Küche</span>

          <span className="outline-text">Spielen</span>
          <span className="solid-text">Elternschaft</span>
          <span className="outline-text">Erfahrung</span>
          <span className="solid-text">Küche</span>
        </div>
      </div>

      <div className="floating-image floating-left">
        <img src={kidsCafe} alt="Kids cafe" />
      </div>

      <div className="floating-image floating-right">
        <img src={birthday} alt="Birthday celebration" />
      </div>

      <div className="showcase-container">
        <div className="testimonial-card">
          <div className="quote-icon">“</div>

          <p className="testimonial-text">
            {testimonials[activeIndex].quote}
          </p>

          <h4 className="testimonial-name">
            {testimonials[activeIndex].name}
          </h4>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section-bg-shape">
        <img src={backgrimg} alt="Background decoration" />
      </div>
    </section>
  );
}

export default AnimatedImageSection;