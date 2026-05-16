import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "▦",
    title: "Custom Tile Work",
    text: "Thoughtful layouts, clean lines, artisan-inspired details, and durable finishes for floors, showers, fireplaces, and accent walls.",
  },
  {
    icon: "◒",
    title: "Bathroom Remodels",
    text: "From powder bath refreshes to full spa-style transformations with tile, vanities, lighting, hardware, and finish selections.",
  },
  {
    icon: "◇",
    title: "Kitchen Backsplashes",
    text: "Elevated backsplash designs that bring warmth, texture, and personality to your kitchen without a full renovation.",
  },
  {
    icon: "✦",
    title: "Kitchen Remodels",
    text: "Beautiful, functional kitchen updates including tile, counters, cabinetry direction, fixtures, and design coordination.",
  },
];

const process = [
  "Discovery call",
  "In-home consultation",
  "Design direction",
  "Material selections",
  "Install coordination",
  "Final styling touches",
];

const portfolioItems = [
  "Spa Shower Tile",
  "Kitchen Zellige Backsplash",
  "Warm Modern Remodel",
];

function ArrowIcon() {
  return <span className="arrow">→</span>;
}

function Button({ children, variant = "dark" }) {
  return <button className={`button ${variant}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function StarRating() {
  return (
    <div className="stars" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <div>
            <p className="brand">Tate &amp; Vale</p>
            <p className="location">Reno, Nevada</p>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">Book a Consult</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="hero-copy"
            >
              <div className="eyebrow">
                <span aria-hidden="true">✦</span> Tile-forward interiors in Reno
              </div>

              <h1>Tile-forward interiors for kitchens, baths, and beautifully finished homes.</h1>

              <p className="hero-text">
                A Reno-based design studio specializing in tile-forward projects—custom tile work,
                bathroom remodels, kitchen backsplashes, and kitchen renovations with a warm,
                polished, high-end feel.
              </p>

              <div className="button-row">
                <a href="#contact" className="button dark">
                  Start Your Project <ArrowIcon />
                </a>
                <a href="#services" className="button outline">
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-art-wrap"
            >
              <div className="hero-art">
                <div className="tile-art" />
              </div>

              <Card className="testimonial-card">
                <StarRating />
                <p>Tile-led spaces designed to feel custom, timeless, and beautifully finished.</p>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="section-kicker">What we do</p>
            <h2>Tile-forward design services with a refined eye.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Card key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-inner">
            <div className="portfolio-heading">
              <div>
                <p className="section-kicker light">Portfolio direction</p>
                <h2>Natural stone, hand-crafted texture, and warm modern finishes.</h2>
              </div>
              <p>
                Ideal for Reno, Tahoe, and high-desert homes that need materials with depth,
                durability, and a refined point of view.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolioItems.map((item, index) => (
                <div key={item} className="portfolio-card">
                 <img
  src={
    index === 0
      ? "/src/images/finalaiimagedesigntile.png"
      : index === 1
      ? "/src/images/kitchen1.jpg"
      : "/src/images/tile1.jpg"
  }
  alt={item}
  className="portfolio-image"
/>
                  <div className="portfolio-card-footer">
                    <h3>{item}</h3>
                    <ArrowIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div>
            <p className="section-kicker">How it works</p>
            <h2>A clear process from idea to installation.</h2>
            <p className="process-text">
              Whether you need a statement backsplash, a spa-like bath, or a full kitchen refresh,
              the experience is organized, design-led, and centered around beautiful tile and
              material selections.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <div key={step} className="process-card">
                <p>0{index + 1}</p>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="service-area">
          <div className="service-area-box">
            <div>
              <p className="section-kicker">Local service area</p>
              <h2>Serving Reno, Tahoe and nearby communities.</h2>
            </div>
            <p>
              Perfect for homeowners who want their home project to look
              intentional—not builder basic.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div>
            <h2>Ready to design your remodel?</h2>
            <p>
              Tell us about your bathroom, backsplash, or kitchen project and we’ll help you
              create a design direction that feels elevated, intentional, and realistic
              for your home.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-list">
              <p><span aria-hidden="true">☎</span> (775) 4409779</p>
              <p><span aria-hidden="true">✉</span> tateandvale@gmail.com</p>
              <p><span aria-hidden="true">⌖</span> Reno, Nevada</p>
            </div>
            <a href="mailto:hello@tateandvale.com" className="button dark full">
              Request a Consultation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
