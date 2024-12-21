import { useState } from 'react'
import heroine from './assets/heroine.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="jp-container">
      {/* Mini Navbar */}
      <nav className="jp-nav">
        <div className="nav-left">
          <a href="#" className="nav-logo">PIXIE</a>
        </div>
        <div className="nav-right">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <button className="nav-button">Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={heroine} 
          alt="Pixie Hero" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-small">Welcome to</span>
            <span className="title-main">PIXIE</span>
          </h1>
          <p className="hero-subtitle">New Digital Experiences</p>
          <button 
            className="cta-button"
            onClick={() => setCount((count) => count + 1)}
          >
            {count === 0 ? 'Get Started' : `Instance ${count}`}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-number">01</span>
            <h3>Feature 01: Fast</h3>
            <p>Advanced technology for rapid results</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">02</span>
            <h3>Feature 02: Security</h3>
            <p>Enhanced security measures</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">03</span>
            <h3>Feature 03: User Friendly</h3>
            <p>Intuitive interface design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App