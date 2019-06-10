pipeline {
    agent {
        docker {
            image 'node:11-alpine'
            args '-v ./www:. -p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build-prod'
            }
        }

        stage('Deploy') {
            steps {
                sh './deploy/deploy.sh'
            }
        }
    }
}
