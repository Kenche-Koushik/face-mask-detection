pipeline {
    agent any

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
                bat 'powershell -Command Start-Sleep -Seconds 10'
                bat 'curl --fail http://localhost:5000/health
'
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
