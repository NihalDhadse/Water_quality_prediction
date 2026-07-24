import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "ph": 7.2,
    "Hardness": 150,
    "Solids": 20000,
    "Chloramines": 7,
    "Sulfate": 350,
    "Conductivity": 400,
    "Organic_carbon": 10,
    "Trihalomethanes": 70,
    "Turbidity": 3
}

response = requests.post(url, json=data)

print(response.json())