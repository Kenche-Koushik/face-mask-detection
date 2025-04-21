from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load your trained model
model = load_model("face_mask_model.h5")

# Adjust based on your model input
IMG_SIZE = (224, 224)  # Change to (128, 128) or whatever your model uses

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return "Backend is up", 200

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']

    try:
        image = Image.open(file).convert('RGB')
        image = image.resize(IMG_SIZE)
        img_array = np.array(image) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)[0][0]
        label = "Mask" if prediction < 0.5 else "No Mask"
        return jsonify({'label': label})

    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({'error': 'Error during prediction'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
