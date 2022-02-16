pipeline {
    agent {
        docker {
            image 'cypress/base:10'
        }
    }

    /*
    tools {
        nodejs "NodeJS17.4.0"
    }
    */

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        /*
        stage('Dependencies') {
            steps {
                sh 'sudo chown -R 112:116 \"/.npm\" '
                sh 'npm install'
            }
        }
        */
        stage('Build & Test') {
            steps {
                sh 'npm ci'
                sh 'npm run test'
            }
        }
    }
}