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
                sh 'sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod 0777 ./node_modules/.bin/cypress'
                sh '$(npm bin)/cypress run'
            }
        }
    }
}