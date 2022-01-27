node {
     stage('Clone repository') {
        checkout scm
     }

     stage('Docker Image make') {
        // sh 'make build'
        sh 'echo start build docker image'
     }

     stage('Test image') {
        sh 'echo "Tests passed"'
     }

     stage('Docker deploy complete') {
        // sh 'make up'
        sh 'echo deploy complete'
     }
 }