pipeline {
    agent any

    environment {
        BACKEND_URL = "http://localhost:5000/health"
        FRONTEND_URL = "http://localhost:8087"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Kenche-Koushik/face-mask-detection.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose -f docker-compose.yml build --no-cache'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Test Backend API') {
            steps {
                // Give backend time to start
                bat 'powershell -Command Start-Sleep -Seconds 10'
        
                // ✅ Updated health check route
                bat 'curl --fail http://localhost:5000/health || exit 1'
            }
        }

        stage('Test Frontend UI') {
            steps {
                bat 'powershell -Command "Start-Sleep -Seconds 5"'
                bat '''
                    curl --fail http://localhost:8087 || exit 1
                    echo Frontend is up
                '''
            }
        }

    }

    post {
        always {
            echo 'Pipeline Finished'
        }
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed.'
        }
    }
}
