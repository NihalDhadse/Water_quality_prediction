import "../styles/faq.css";

function FAQ() {
  return (
    <section className="faq">

      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">

        <div className="faq-card">
          <h3>What is Water Quality Prediction?</h3>
          <p>
            It predicts whether water is safe for drinking using a Machine
            Learning model.
          </p>
        </div>

        <div className="faq-card">
          <h3>Which algorithm is used?</h3>
          <p>
            Gradient Boosting Classifier trained on water quality data.
          </p>
        </div>

        <div className="faq-card">
          <h3>How many parameters are required?</h3>
          <p>
            Nine important water quality parameters are required.
          </p>
        </div>

        <div className="faq-card">
          <h3>How accurate is the model?</h3>
          <p>
            Around 95% accuracy depending on the dataset and preprocessing.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;