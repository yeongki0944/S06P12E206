<template>
  <!--Direct Chat Header start -->
  <div class="contact-details">
    <div class="row">
      <form class="form-inline search-form" :class="openSearch ? 'open' : ''">
        <div class="form-group">
          <input
            class="form-control-plaintext"
            type="search"
            placeholder="Search.."
          />
          <div
            class="icon-close close-search"
            @click="openSearch = false"
          ></div>
        </div>
      </form>
      <div class="col-7">
        <div class="media left">
          <div class="media-left mr-3">
            <div
              class="menu-trigger"
              :class="currentChat.profile"
              :style="[
                {
                  'background-image': 'url(' + getImgUrl(currentChat.img) + ')',
                },
                styleObject,
              ]"
              @click="openprofile()"
            ></div>
          </div>
          <div class="media-body">
            <h5>{{ currentChat.name }}</h5>
            <div
              class="badge"
              :class="currentChat.online ? 'badge-success' : 'badge-danger'"
            >
              {{ currentChat.online ? "Active" : "InActive" }}
            </div>
          </div>
          <div class="media-right">
            <ul>
              <li>
                <a
                  class="icon-btn btn-light button-effect mute"
                  href="javascript:void(0)"
                  @click="showvolume = !showvolume"
                  ><span v-if="showvolume" class="effect-wave"></span
                  ><i
                    class="fa"
                    :class="showvolume ? 'fa-volume-up' : 'fa-volume-up off'"
                  ></i
                ></a>
              </li>
              <li>
                <a
                  class="icon-btn btn-light search-right"
                  href="javascript:void(0)"
                  @click="toggleSearchbar()"
                  ><feather type="search" size="15" height="15"></feather
                ></a>
              </li>
              <li>
                <a
                  class="icon-btn btn-light button-effect mobile-sidebar"
                  @click="backtochat()"
                  href="javascript:void(0)"
                  ><feather type="chevron-left" size="15" height="15"></feather
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Direct Chat Header end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    VedioCall,
    AudioCall,
    Profile,
  },
  data() {
    return {
      openSearch: false,
      showvolume: true,
      currentchat: [],
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    toggleSearchbar() {
      this.openSearch = !this.openSearch;
      this.$store.state.common.showprofilemenu = false;
    },
    showVedioModal() {
      this.$refs.vedioComponent.show();
    },
    showAudioModal() {
      this.$refs.audioComponent.show();
    },
    openprofile() {
      document.querySelector(".chitchat-main").classList.add("small-sidebar");
      if (document.getElementById("body").classList.contains("menu-active")) {
        document.body.classList.remove("menu-active");
        document.querySelector(".app-sidebar").classList.add("active");
      } else {
        document.body.classList.add("menu-active");
        document.querySelector(".app-sidebar").classList.remove("active");
      }
    },    
    backtochat() {
      document.querySelector(".sidebar-toggle").classList.remove("mobile-menu");
    },
  },
  computed: {
    ...mapState({
      currentChat() {
        return (this.currentchat = this.$store.getters["chat/currentChat"]);
      },
    }),
  },
};
</script>
