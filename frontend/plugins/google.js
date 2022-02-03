import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

  Vue.use(GAuth, {clientId: process.env.GOOGLE_ID, scope: 'profile email https://www.googleapis.com/auth/plus.login'})
