from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("gradient_boosting_model.pkl")


@app.route("/")
def home():
    return "Water Quality Prediction API Running"


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array([[
        float(data["ph"]),
        float(data["Hardness"]),
        float(data["Solids"]),
        float(data["Chloramines"]),
        float(data["Sulfate"]),
        float(data["Conductivity"]),
        float(data["Organic_carbon"]),
        float(data["Trihalomethanes"]),
        float(data["Turbidity"])
    ]])

    prediction = model.predict(features)

    if prediction[0] == 1:
        result = "Safe to Drink"
    else:
        result = "Not Safe to Drink"

    return jsonify({
        "prediction": result
    })


if __name__ == "__main__":
    app.run(debug=True)