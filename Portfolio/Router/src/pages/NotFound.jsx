import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">

        {/* Header */}
        <header className="not-found-header">
          <div className="logo">
            <span className="logo-icon">◉</span>
            <span>My<span>Website</span></span>
          </div>

          <button
                className=""
                onClick={() => navigate(-1)}
                >
                ← Go Back
            </button>
        </header>

        {/* Main Content */}
        <main className="not-found-content">

          <div className="not-found-text">
            <div className="error-number">
              <span>4</span>
              <span className="zero">0</span>
              <span>4</span>
            </div>

            <h1>
              Oops! <span>Page Not Found</span>
            </h1>

            <p>
              The page you are looking for might have been removed,
              had its name changed, or is temporarily unavailable.
            </p>

             <button
                className=""
                onClick={() => navigate(-1)}
                >
                ← Go Back
            </button>

            {/* <Link to="/" className="home-btn">
              🏠 Go Back Home
            </Link> */}

            <div className="explore-text">
              or <Link to="/">explore our website</Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="not-found-illustration">
            <div className="question-mark">?</div>

            <div className="planet">
              <div className="crater crater-1"></div>
              <div className="crater crater-2"></div>
              <div className="crater crater-3"></div>
            </div>

            <div className="astronaut">
              👨‍🚀
            </div>

            <div className="sign-board">
              <div>This Way →</div>
              <div>That Way →</div>
              <div>Where Am I?</div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default NotFound;