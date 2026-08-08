import React from 'react';
import '../assets/css/Home.css'; 
import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className="hero-content-wrapper">
      {/* Announcement Badge */}
      <div className="hero-badge-wrapper">
        <span className="badge-pill">v3.4 Release</span>
        <span className="badge-text">Explore the next-gen architecture →</span>
      </div>

      {/* Main Grid Section */}
      <div className="hero-main-grid">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Build Scalable Apps with <span className="highlight-gradient">Zero Friction</span>
          </h1>
          <p className="hero-description">
            Supercharge your development workflow with our cutting-edge cloud primitives, automated pipeline management, and instant global edge deployments.
          </p>
          
          <div className="hero-cta-group">
            <button className="cta-primary">Deploy Now</button>
            <button className="cta-secondary">View Documentation</button>
          </div>

          {/* Quick Metrics */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value">99.99%</span>
              <span className="metric-label">Uptime SLA</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">&lt; 10ms</span>
              <span className="metric-label">Global Latency</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">10k+</span>
              <span className="metric-label">Active Teams</span>
            </div>
          </div>
        </div>

        {/* Code Preview Card */}
        <div className="hero-preview-block">
          <div className="code-card">
            <div className="code-card-header">
              <ul className="sub-nav">
                <li>
                  <NavLink to="android">Android</NavLink>
                </li>
                <li>
                  <NavLink to="iphone">iPhone</NavLink>
                </li>
                <li>
                  <NavLink to="web">Web</NavLink>
                </li>
              </ul>
            </div>
            <div className="code-card-body">
              <div className="sub-content-area">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;