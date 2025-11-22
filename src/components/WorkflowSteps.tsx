import './WorkflowSteps.css'

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Create Your Project',
    description: 'Start with our intuitive project setup wizard. Choose your stack and configure your environment in seconds.',
  },
  {
    number: '02',
    title: 'Build & Iterate',
    description: 'Write code with real-time feedback and hot module reloading. See your changes instantly as you build.',
  },
  {
    number: '03',
    title: 'Test & Optimize',
    description: 'Run automated tests and performance checks. Get insights and recommendations to improve your app.',
  },
  {
    number: '04',
    title: 'Deploy with Confidence',
    description: 'Push to production with one click. Our platform handles the complexity of deployment for you.',
  },
]

export default function WorkflowSteps() {
  return (
    <section className="workflow-steps-section">
      <div className="workflow-container">
        <h2 className="workflow-title">How It Works</h2>
        <p className="workflow-subtitle">
          From idea to production in four simple steps
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="workflow-cta">
          <a href="#get-started" className="cta-button">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
