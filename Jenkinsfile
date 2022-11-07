pipeline {
    agent { docker { image '16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                echo 'building...'
            }
        }
        stage('test') {
            steps {
                echo 'testing...'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying...'
            }
        }
    }
}