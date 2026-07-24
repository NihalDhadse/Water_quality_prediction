import { Link } from "react-router-dom";
import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          AI-Based <span>Water Quality</span> Prediction
        </h1>

        <p>
          Predict whether water is safe for drinking using Machine Learning.
          Enter water quality parameters like pH, Hardness, Solids,
          Conductivity, and more to get an instant prediction.
        </p>

        <Link to="/predict">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>

      </div>

      <div className="hero-right">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4148/4148472.png"
          alt="Water"
        />

      </div>

    </section>
  );
}

export default Hero;