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
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Test Backend API') {
            steps {
                sh 'curl --fail http://localhost:5000 || exit 1'
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
