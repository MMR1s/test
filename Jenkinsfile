pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'Node v22.9.0', type: 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your_username/your_repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') { // Ensure 'SonarQube' is configured
                        sh 'npm run sonar'  // Or any other command for SonarQube analysis
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    sh 'docker build -t your-image-name .'
                    sh 'docker push your-image-name'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'ansible-playbook -i inventory/production deploy.yml'
                }
            }
        }
    }
}
