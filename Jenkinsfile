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
                bat 'curl --fail http://localhost:5000 || exit 1'
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
