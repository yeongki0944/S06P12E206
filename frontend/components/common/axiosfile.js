import axios from "axios";

let token = localStorage.getItem('jwtToken') || '';
// axios 객체 생성
export default axios.create({
  baseURL: "http://localhost:8080",
  //baseURL: "https://xn--3j1b610aimlm4e.site",
  headers: {
    "Content-type": "application/json",
    "Authorization": token
  },
  responseType: "blob",
  withCredentials: true
});
