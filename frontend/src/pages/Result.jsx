import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/result.css";

function Result() {

    const location = useLocation();

    const navigate = useNavigate();

    const prediction = location.state?.prediction;

    const values = location.state?.values;

    return (

        <>

        <Navbar/>

        <div className="result-page">

            <div className="result-card">

                <h1>Prediction Result</h1>

                <div className={prediction==="Safe to Drink" ? "success-box":"danger-box"}>

                    <h2>{prediction}</h2>

                </div>

                <table>

                    <tbody>

                    {values && Object.entries(values).map(([key,value])=>(

                        <tr key={key}>

                            <td>{key}</td>

                            <td>{value}</td>

                        </tr>

                    ))}

                    </tbody>

                </table>

                <div className="btn-group">

                    <button onClick={()=>navigate("/predict")}>

                        Predict Again

                    </button>

                    <button className="home-btn" onClick={()=>navigate("/")}>

                        Home

                    </button>

                </div>

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default Result;