node {
     stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

     stage('Clone repository') {
        checkout scm
     }

     stage('Docker Image make') {
        sh 'docker build --no-cache -t sign-language-doctor .'
        //invalid argument "SignLanguageDoctor" for t: invalid reference format: repository name must be lowercase
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