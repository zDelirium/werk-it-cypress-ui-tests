pipeline {
    agent any

    tools {
        node "NodeJS17.4.0"
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
                sh 'npm start & wait-on https://staging.tiered-planet.net/werk-it-back-end'
                sh '$(npm bin)/ cypress run'
            }
        }
    }
}