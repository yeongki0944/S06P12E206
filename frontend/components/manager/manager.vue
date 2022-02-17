<template>
  <div>
    <Header style="z-index: 3"></Header>
    <div class="login-page2 animat-rate" style="z-index: 1">
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
          <p>관리 도구 목록</p>
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
              >회원 관리</a
            >
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li><a href="#">의사 회원 관리</a></li>
              <li><a href="#">신고 관리</a></li>
              <li><a href="#">피드백</a></li>
            </ul>
          </li>
          <!-- <li>
                        <a href="#">로그 관리</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">스타일 수정</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">업데이트 현황</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li> -->
        </ul>

        <!-- <ul class="list-unstyled CTAs">
                    <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
                    <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>
                </ul> -->
      </nav>
      <div
        class="login-content-main mt-5"
        style="z-index: 2; bottom: 100px; right: 30px"
      >
        <h3 class="mt-5">의사 회원 신청 목록</h3>

        <div id="mainbody" class="login-content" style="width: 950px">
          <table class="table table-hover">
            <thead class="thead-blue">
              <tr>
                <th class="text-center" scope="col-1">#</th>
                <th class="text-center" scope="col-1">이름</th>
                <th class="text-center" scope="col-1">
                  &nbsp;&nbsp;&nbsp;&nbsp; 진료과
                </th>
                <th class="text-center col-2" scope="col-2">이메일</th>
                <th class="text-center" scope="col-1" style="text-indent: 30px">
                  파일
                </th>
                <th class="text-center" scope="col-1" style="text-indent: 55px">
                  확인
                </th>
                <th class="text-center" scope="col-1"></th>
              </tr>
            </thead>
            <tbody class="my-tbody">
              <tr v-for="(resume, index) in listGetters" v-bind:key="index">
                <td class="text-center">{{ index }}</td>
                <td class="text-center">{{ resume.name }}</td>
                <td class="text-center">{{ resume.departName }}</td>
                <td class="text-center col-2">{{ resume.email }}</td>
                <td class="text-center">
                  <a @click="downloadFile(resume.email, index)" style="color: #4b70fd"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[다운로드]</a
                  >
                </td>
                <td class="text-center">
                  <a
                    class="badge badge-outline-primary font_label"
                    @click="signDoctor(resume.email)"
                    >승인하기</a
                  >
                </td>
                <td class="col-1 text-center" scope="col"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="animation-block">
        <div class="bg_circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="cross"></div>
        <div class="cross1"></div>
        <div class="cross2"></div>
        <div class="dot"></div>
        <div class="dot1"></div>
        <div class="top-circle"></div>
        <div class="center-circle"></div>
        <div class="bottom-circle1"></div>
        <div class="right-circle"></div>
        <div class="right-circle1"></div>
        <div class="quarterCircle"></div>
        <img
          class="cloud-logo"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        /><img
          class="cloud-logo1"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        /><img
          class="cloud-logo2"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        /><img
          class="cloud-logo3"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        /><img
          class="cloud-logo4"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        /><img
          class="cloud-logo5"
          src="../../assets/images/login_signup/2.png"
          alt="login logo"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 850px) {
  #mainbody {
    width: 100px;
  }
}

.my-tbody {
  height: 400px;
  display: block;
  overflow-y: scroll;
  width: 100%;
}
tbody {
  display: table;
  width: 100%;
  table-layout: fixed;
}
tr {
  width: 100%;
  display: table;
  table-layout: fixed;
}
td {
}
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #1e82ff;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #0a6eff;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #0a6eff;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #0a6eff;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #0a6eff;
}

a[data-toggle="collapse"] {
  position: relative;
}

a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
  content: "\e259";
  display: block;
  position: absolute;
  right: 20px;
  font-family: "Glyphicons Halflings";
  font-size: 0.6em;
}
a[aria-expanded="true"]::before {
  content: "\e260";
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #0a6eff;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}
a.download {
  background: #fff;
  color: #0a6eff;
}
a.article,
a.article:hover {
  background: #0a6eff !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: calc(100% - 250px);
  padding: 40px;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}
#content.active {
  width: 100%;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: calc(100% - 250px);
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
<script>
import Header from "../../components/common/header/header.vue";
import filehttp from "@/components/common/axiosfile.js";
import http from "@/components/common/axios.js";
export default {
  components: {
    Header,
  },

  computed: {
    listGetters() {
      return this.$store.getters["manager/getList"];
    },
  },
  methods: {
    resumeList() {
      this.$store.dispatch("manager/resumeList");
    },
    downloadFile(userEmail, index) {
        
        console.log(this.$store.state.manager.resume.list[index].doctorImageUrl);

      filehttp
        .get("/manager/download", {
          params: {
            email: userEmail,
          },
        })
        .then(({ data }) => {
          console.log("ResumeDownload: data : ");
          console.log(data);
          const blob = new Blob([data]);
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `doctor.png`;
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        });
    },
    signDoctor(email) {
      http
        .get("/manager/signup", {
          params: {
            email: email,
          },
        })
        .then(({ data }) => {
          this.resumeList();
          this.$alertify.success("의사 등록 완료!");
        });
    },
  },
  created() {
    this.resumeList();
  },
};
</script>

<style></style>
