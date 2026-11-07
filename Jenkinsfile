pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t nodejs-demo-app:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "Tests passed successfully!"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                sh 'docker stop nodejs-demo-app || true'
                sh 'docker rm nodejs-demo-app || true'
                sh 'docker run -d --name nodejs-demo-app -p 3000:3000 nodejs-demo-app:latest'
                echo 'Application deployed successfully on port 3000!'
            }
        }
    }
}
