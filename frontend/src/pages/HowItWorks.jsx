import Navbar from "../components/Navbar";
import "../styles/how.css";

function HowItWorks() {

    return (

        <>
            <Navbar />

            <section className="how">

                <h1>How It Works</h1>

                <div className="steps">

                    <div className="step">
                        <h2>1️⃣</h2>
                        <h3>Enter Parameters</h3>
                        <p>Enter all water quality values.</p>
                    </div>

                    <div className="step">
                        <h2>2️⃣</h2>
                        <h3>Send to API</h3>
                        <p>React sends values to Flask.</p>
                    </div>

                    <div className="step">
                        <h2>3️⃣</h2>
                        <h3>ML Prediction</h3>
                        <p>Gradient Boosting predicts water quality.</p>
                    </div>

                    <div className="step">
                        <h2>4️⃣</h2>
                        <h3>Display Result</h3>
                        <p>Safe or Not Safe.</p>
                    </div>

                </div>

            </section>

        </>
    );

}

export default HowItWorks;