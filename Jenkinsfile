pipeline {
    agent { docker { image '16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                bat 'node --version'
            }
        }
    }
}