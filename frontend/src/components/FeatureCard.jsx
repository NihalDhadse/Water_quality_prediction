import { FaBrain, FaBolt, FaTint } from "react-icons/fa";
import "../styles/home.css";

function FeatureCard() {
  return (
    <section className="features">

      <div className="feature-card">

        <FaBrain className="feature-icon" />

        <h3>AI Prediction</h3>

        <p>
          Predict water quality using a trained Machine Learning model.
        </p>

      </div>

      <div className="feature-card">

        <FaBolt className="feature-icon" />

        <h3>Instant Result</h3>

        <p>
          Get water quality prediction within seconds after entering values.
        </p>

      </div>

      <div className="feature-card">

        <FaTint className="feature-icon" />

        <h3>Water Analysis</h3>

        <p>
          Analyze 9 important water quality parameters for better accuracy.
        </p>

      </div>

    </section>
  );
}

export default FeatureCard;