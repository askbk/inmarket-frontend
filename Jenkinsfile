pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "npm run build-prod"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
