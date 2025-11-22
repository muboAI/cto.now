import './MetricsTestimonials.css'

interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const metrics: Metric[] = [
  { value: '10k+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50ms', label: 'Response Time' },
  { value: '4.9/5', label: 'User Rating' },
]

const testimonials: Testimonial[] = [
  {
    quote: 'This platform has transformed how we build and deploy applications. The developer experience is unmatched.',
    author: 'Sarah Chen',
    role: 'CTO, TechCorp',
  },
  {
    quote: 'Fast, reliable, and incredibly easy to use. Our team productivity increased by 3x after switching.',
    author: 'Michael Rodriguez',
    role: 'Lead Developer, StartupXYZ',
  },
]

export default function MetricsTestimonials() {
  return (
    <section className="metrics-testimonials-section">
      <div className="metrics-testimonials-container">
        <div className="metrics-wrapper">
          <h2 className="section-title">Trusted by Developers</h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <article key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials-wrapper">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
