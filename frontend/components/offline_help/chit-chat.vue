<template>
  <!-- chit chat start -->
  <section class="section-py-space chitchat-main light-bg">
    <div class="custom-container">
      <div class="row chit-chat-block">
        <div class="col-md-6">
          <div class="chitchat-contain">
            <img
              class="img-fluid chitchat-img"
              src="../../assets/images/landing/chitchat/4.png"
              alt="chit-chat"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="chitchat-contain">
            <div>
              <div class="chitchat-logo">
                <img
                  class="img-fluid"
                  src="../../assets/images/logo/landing-logo.png"
                  alt="landing-logo"
                />
              </div>
              <h1>수화닥터란?</h1>
              <h4>
                의사선생님에게 농인분들의 수어를 실시간으로 번역하여 
                <br>
                보다 나은 진료를 도와드리기 위해 만들어졌어요
              </h4>
              <ul class="detial-price">
                <li>
                  <i class="fa fa-check"></i>농인분의 수화를 인공지능을 통해 번역해요
                </li>
                <li>
                  <i class="fa fa-check"> </i>최신 WebRTC기술을 활용하여, 앱 설치 없이 사용할 수 있어요
                </li>
                <li><i class="fa fa-check"> </i>간편 회원가입 후 바로 이용해보세요!</li>
              </ul>
              <nuxt-link to="/messenger/messenger" class="btn pricing-btn">
                회원가입</nuxt-link>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chitchat-back-block">
      <img
        class="img-fluid chit-chat1"
        src="../../assets/images/landing/chitchat/2.png"
        alt="chit-chat-back-img"
      /><img
        class="img-fluid chit-chat2"
        src="../../assets/images/landing/chitchat/1.png"
        alt="chit-chat-back-img"
      /><img
        class="img-fluid chit-chat3"
        src="../../assets/images/landing/chitchat/3.png"
        alt="chit-chat-back-img"
      />
    </div>
  </section>
  <!-- chit chat end -->
</template>
