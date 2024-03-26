pipeline {
    agent any

    stages {

//fixed the stage
//added two more closing brackets at the end and removed the ;
        stage('Checkout') {
            steps {
                echo 'Checking out the app'
                checkout scm
            }
        }
//adding build stage:
        stage('Build') {
            steps {
                echo 'Building the app';
                sh 'npm install';
            }
        }
    }
}
