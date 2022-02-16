pipeline {
    agent any

    tools {
        nodejs "NodeJS17.4.0"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm start'
                sh '$(npm bin)/ cypress run'
            }
        }
    }
}