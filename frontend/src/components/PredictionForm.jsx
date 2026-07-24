import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/predict.css";

function PredictionForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    ph: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post("/predict", formData);

      navigate("/result", {
        state: {
          prediction: response.data.prediction,
          values: formData
        }
      });

    } catch (err) {

      alert("Prediction Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="predict-container">

      <h1>Water Quality Prediction</h1>

      <form onSubmit={handleSubmit}>

        <input type="number" step="any" name="ph" placeholder="pH" value={formData.ph} onChange={handleChange} required />

        <input type="number" step="any" name="Hardness" placeholder="Hardness" value={formData.Hardness} onChange={handleChange} required />

        <input type="number" step="any" name="Solids" placeholder="Solids" value={formData.Solids} onChange={handleChange} required />

        <input type="number" step="any" name="Chloramines" placeholder="Chloramines" value={formData.Chloramines} onChange={handleChange} required />

        <input type="number" step="any" name="Sulfate" placeholder="Sulfate" value={formData.Sulfate} onChange={handleChange} required />

        <input type="number" step="any" name="Conductivity" placeholder="Conductivity" value={formData.Conductivity} onChange={handleChange} required />

        <input type="number" step="any" name="Organic_carbon" placeholder="Organic Carbon" value={formData.Organic_carbon} onChange={handleChange} required />

        <input type="number" step="any" name="Trihalomethanes" placeholder="Trihalomethanes" value={formData.Trihalomethanes} onChange={handleChange} required />

        <input type="number" step="any" name="Turbidity" placeholder="Turbidity" value={formData.Turbidity} onChange={handleChange} required />

        <button type="submit">

          {loading ? "Predicting..." : "Predict Water Quality"}

        </button>

      </form>

    </div>

  );

}

export default PredictionForm;