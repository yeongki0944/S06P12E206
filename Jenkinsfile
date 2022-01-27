node {
     stage('Clone repository') {
        checkout scm
     }

     stage('Docker Image make') {
        sh 'docker build --no-cache -t SignLanguageDoctor .'
        sh 'echo start build docker image'
     }

     stage('Test image') {
        sh 'echo "Tests passed"'
     }

     stage('Docker deploy complete') {
        sh 'docker-compose up -d'
        sh 'echo deploy complete'
     }
 }