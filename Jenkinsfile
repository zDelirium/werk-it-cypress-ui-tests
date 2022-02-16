pipeline {
    agent any

    tools {
        node "NodeJS17.4.0"
    }

    stages {
        stage('Checkout') {
            checkout scm
        }
        stage('Dependencies') {
            sh 'npm install'
        }
        stage('Test') {
            sh 'npm start & wait-on https://staging.tiered-planet.net/werk-it-back-end'
            sh '$(npm bin)/ cypress run'
        }
    }
}