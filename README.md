# Face Mask Detection with CI/CD Pipeline

This project demonstrates a **Face Mask Detection Application** using a **Convolutional Neural Network (CNN)** model, which is hosted as a web service. The application is **containerized** using **Docker** and includes a **CI/CD pipeline** for continuous integration and deployment.

## Project Overview
The **Face Mask Detection** project uses a pre-trained **CNN model** to detect whether a person is wearing a face mask or not from an uploaded image. The project consists of a **frontend** built using HTML, CSS, and JavaScript and a **backend** built using Flask. The backend is responsible for handling the image prediction requests and interacting with the machine learning model to provide results.

## Features
- Image upload for prediction.
- Real-time face mask detection.
- **Dockerized Application**: Backend and frontend are both containerized using Docker.
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions.

## Usage
- Upload an image by clicking the "Choose File" button on the frontend.
- Click "Predict" to send the image to the backend.
- The backend will respond with whether the person in the image is wearing a mask or not.

## Docker Setup
This project is containerized using Docker. Here are the steps to build and run the project using Docker:
- Backend Dockerfile: The backend service (Flask app) is containerized with the Dockerfile in the /backend folder.
- Frontend Dockerfile: The frontend is also containerized with the Dockerfile in the /frontend folder.
- Docker Compose: The docker-compose.yml file orchestrates both the backend and frontend services, allowing them to run together with a single command.

## CI/CD Pipeline
This project includes a CI/CD pipeline configured with GitHub Actions.

### Workflow
- Build Docker Images: The pipeline automatically builds Docker images for both the frontend and backend.
- Run Backend Tests: After building the images, the pipeline runs a simple test to ensure that the backend is responsive and the /predict endpoint works correctly.

  ![image](https://github.com/user-attachments/assets/bf8835c5-52d9-42cf-90d0-6faea08eb34c)          ![image](https://github.com/user-attachments/assets/7012a580-d8f5-4152-9f5e-e95b6c3230b6)

