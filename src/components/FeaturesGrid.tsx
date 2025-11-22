import './FeaturesGrid.css'

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with modern tooling for blazing fast performance and instant feedback.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Carefully crafted UI components with attention to detail and user experience.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Industry-standard security practices built in from the ground up.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Works seamlessly across all devices, from mobile to desktop.',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description: 'Deploy with confidence using our streamlined deployment workflow.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'Built with accessibility in mind, ensuring everyone can use your app.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="features-grid-section">
      <div className="features-container">
        <h2 className="features-title">Powerful Features</h2>
        <p className="features-subtitle">
          Everything you need to build modern web applications
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
