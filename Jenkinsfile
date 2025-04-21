pipeline {
    agent any

    environment {
        BACKEND_URL = "http://localhost:5000/health"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Kenche-Koushik/face-mask-detection.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose -f docker-compose.yml build'
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
