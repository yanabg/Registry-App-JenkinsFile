pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Check out the code from your Git repository
                git branch: 'main', url: 'https://github.com/yanabg/Registry-App-JenkinsFile'
            }
        }
        
        stage('Setup Node.js') {
            steps {
                // You may need to install Node.js using a tool like nvm or n on the Jenkins server
                // Ensure Node.js is available on the PATH
                // Example:
                // sh 'nvm install 14.17.0'
                // sh 'nvm use 14.17.0'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
            }
        }
        
        stage('Start Application') {
            steps {
                // Start your Node.js application
                sh 'npm start'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests using npm or any other test runner
                sh 'npm test'
            }
        }
    }
}
