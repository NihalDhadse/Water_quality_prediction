import Navbar from "../components/Navbar";
import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-container">

          <h1>About Water Quality Prediction</h1>

          <p>
            This project predicts whether water is safe to drink using a
            Machine Learning model trained on water quality parameters.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <h2>🎯 Objective</h2>
              <p>
                Provide instant water quality prediction based on user inputs.
              </p>
            </div>

            <div className="about-card">
              <h2>🤖 ML Model</h2>
              <p>
                Gradient Boosting Classifier trained on water quality dataset.
              </p>
            </div>

            <div className="about-card">
              <h2>📊 Dataset</h2>
              <p>
                Uses 9 water quality parameters including pH, Hardness,
                Conductivity and more.
              </p>
            </div>

            <div className="about-card">
              <h2>💧 Goal</h2>
              <p>
                Help users quickly determine whether water is potable.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;