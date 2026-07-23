import streamlit as st
import pandas as pd
import joblib

# ==========================
# Load Model and Scaler
# ==========================

model = joblib.load("gradient_boosting_model.pkl")
scaler = joblib.load("scaler.pkl")

# ==========================
# Page Configuration
# ==========================

st.set_page_config(
    page_title="Water Potability Prediction",
    page_icon="💧",
    layout="centered"
)

st.title("💧 Water Potability Prediction")
st.write("Enter the water quality parameters to predict whether the water is safe to drink.")

st.markdown("---")

# ==========================
# User Inputs
# ==========================

ph = st.number_input("pH", min_value=0.0, max_value=14.0, value=7.0)

hardness = st.number_input("Hardness", value=200.0)

solids = st.number_input("Solids", value=20000.0)

chloramines = st.number_input("Chloramines", value=7.0)

sulfate = st.number_input("Sulfate", value=330.0)

conductivity = st.number_input("Conductivity", value=450.0)

organic_carbon = st.number_input("Organic Carbon", value=10.0)

trihalomethanes = st.number_input("Trihalomethanes", value=80.0)

turbidity = st.number_input("Turbidity", value=4.0)

# ==========================
# Predict Button
# ==========================

if st.button("Predict Water Quality"):

    sample = pd.DataFrame([{
        "ph": ph,
        "Hardness": hardness,
        "Solids": solids,
        "Chloramines": chloramines,
        "Sulfate": sulfate,
        "Conductivity": conductivity,
        "Organic_carbon": organic_carbon,
        "Trihalomethanes": trihalomethanes,
        "Turbidity": turbidity
    }])

    sample_scaled = scaler.transform(sample)

    prediction = model.predict(sample_scaled)[0]

    probability = model.predict_proba(sample_scaled)[0][1]

    st.markdown("---")

    if prediction == 1:
        st.success("✅ Water is SAFE to drink")
    else:
        st.error("❌ Water is NOT SAFE to drink")

    st.write(f"### Probability of Safe Water: **{probability:.2%}**")