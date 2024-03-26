pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out the app';
                checkout scm;
            }
        }
        stage('Build') {
            steps {
                echo 'Building the app';
                sh 'npm install';
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the app';
                sh 'npm test';
            }
        }
 /*       stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }*/
    }
}