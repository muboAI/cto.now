import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Build Faster with
          <span className="gradient-text"> Modern Tools</span>
        </h1>
        <p className="hero-description">
          Create beautiful, performant web applications with our intuitive platform.
          Experience the future of web development today.
        </p>
        <div className="hero-actions">
          <a href="#get-started" className="button-primary">
            Get Started
          </a>
          <a href="#learn-more" className="button-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
