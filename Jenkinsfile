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
                sh 'chmod 0777 ./node_modules/.bin/cypress'
                sh '$(npm bin)/ cypress run'
            }
        }
    }
}