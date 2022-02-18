## 수화닥터 서버
### 가동중인 awsstudy 도커 중단 및 삭제 sign-language-doctor:1.0
- sudo docker ps -a -q --filter "name=sign_doctor” | grep -q . && docker stop sign_doctor && docker rm sign_doctor | true

### 기존 이미지 삭제
- sudo docker rmi dudrl0944/sign-language-doctor:1.0

### 도커허브 이미지 pull
- sudo docker pull dudrl0944/sign-language-doctor:1.0

### 도커 run
- docker run  --name dudrl0944/sign-language-doctor:1.0  -p 8080:8080

## openvidu 서버
- sudo su
- cd /opt
- curl https://s3-eu-west-1.amazonaws.com/aws.openvidu.io/install_openvidu_latest.sh | bash
- cd openvidu
- nano .env
- ./openvidu start



## 시연 시나리오

https://www.youtube.com/playlist?list=PL8yWNPee7X0Sqd4lHQ9gcC2BXkvVl-gbu
