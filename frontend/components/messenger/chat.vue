<template>
  <!-- Main Chat start -->
  <div
    class="chitchat-main"
    :class="togglerightside ? 'small-sidebar' : ''"
    id="content"
  >
    <div class="chat-content tabto" :class="activechat == 1 ? 'active' : ''">
      <div
        class="scrolltopdirectchat messages custom-scroll"
        :class="activechatType == 1 ? 'active' : ''"
        id="chating"
        :style="
          chatwallpaperIndex !== 0
            ? [
                { 'background-image': 'url(' + chatwallpaper + ')' },
                styleObject,
              ]
            : chatwallpapergrandiant !== ''
            ? [{ 'background-image': chatwallpapergrandiant }, styleObject]
            : ''
        "
      >
        <!-- <DirectChatHeader /> -->
        <DirectCustomChat />
      </div>
      <div
        class="scrolltopgroupchat messages custom-scroll"
        :class="activechatType == 2 ? 'active' : ''"
        id="group_chat"
        :style="
          chatwallpaperIndex !== 0
            ? [
                { 'background-image': 'url(' + chatwallpaper + ')' },
                styleObject,
              ]
            : chatwallpapergrandiant !== ''
            ? [{ 'background-image': chatwallpapergrandiant }, styleObject]
            : ''
        "
      >
        <GroupChatHeader />
        <GroupCustomChat />
      </div>
      <div class="message-input">
        <div class="wrap emojis-main">
          <div class="dot-btn dot-primary mr-3">
            <a
              class="icon-btn btn-outline-primary button-effect toggle-emoji"
              @click="openEmogi()"
              href="javascript:void(0)"
              ><feather type="smile" size="15" height="15"></feather
            ></a>
          </div>
          <input
            class="setemoj"
            id="setemoj"
            v-model="text"
            v-on:keyup.enter="
              addChat();
              addNewChat();
            "
            type="text"
            placeholder="내용을 입력해주세요"
          />
          <div class="emojis-contain" :class="showemogi ? 'open' : ''">
            <div class="emojis-sub-contain custom-scroll">
              <ul>
                <li
                  v-for="(emogi, index) in emogi"
                  :key="index"
                  @click="addemogi(emogi.emoji)"
                >
                  {{ emogi.emoji }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="call-content tabto" :class="activechat == 2 ? 'active' : ''"><a class="icon-btn btn-outline-primary button-effect mobile-back mb-3" @click="backtochat()" href="javascript:void(0)"><i class="ti-angle-left">                       </i></a>
        <CallContent />
      </div> -->
    <!-- <div class="contact-content tabto" :class="activechat == 3 ? 'active' : ''">
        <ContactContent />
      </div>  -->

    <!-- <CodeSnippet ref="codesnippet"/> -->
    <!-- <Poll ref="poll"/> -->
  </div>
  <!-- Main Chat end -->
</template>

<script>
import { mapState } from "vuex";
import emogi from "../../data/emogi.json";
import Stickers from "./stickers.vue";
import DropDown from "./common/dropdown.vue";
import DirectChatHeader from "./chat/DirectChat/directchatheader.vue";
import DirectCustomChat from "./chat/DirectChat/directcustomchat.vue";
import CallContent from "./calls/callcontent.vue";
import ContactContent from "./contacts/contactcontent.vue";
import GroupChatHeader from "./chat/GroupChat/groupchatheader.vue";
import GroupCustomChat from "./chat/GroupChat/groupcustomchat.vue";
import CodeSnippet from "../messenger/modals/codesnippets.vue";
import Poll from "../messenger/modals/pollModal.vue";

export default {
  components: {
    Stickers,
    DropDown,
    DirectChatHeader,
    DirectCustomChat,
    CallContent,
    ContactContent,
    GroupChatHeader,
    GroupCustomChat,
    CodeSnippet,
    Poll,
  },
  data() {
    return {
      text: "",
      emogi: emogi,
      emogiarray: [],
      styleObject: {
        "background-color": "transparent",
        "background-blend-mode": "unset",
      },
    };
  },
  watch: {
    chatwallpaperIndex() {
      this.$store.state.common.chatwallpaper =
        this.chatwallpaperIndex !== 0
          ? this.getImgUrl(
              this.allwallpaper.find((x) => x.id === this.chatwallpaperIndex)
                .img
            )
          : "";
    },
  },
  methods: {
    openSticker() {
      (this.$store.state.common.showemogi = false),
        (this.$store.state.common.showcontactcontent = false),
        (this.$store.state.common.showsticker =
          !this.$store.state.common.showsticker);
    },
    openEmogi() {
      (this.$store.state.common.showsticker = false),
        (this.$store.state.common.showcontactcontent = false),
        (this.$store.state.common.showemogi =
          !this.$store.state.common.showemogi);
    },
    openContactcontent() {
      (this.$store.state.common.showsticker = false),
        (this.$store.state.common.showemogi = false),
        (this.$store.state.common.showcontactcontent =
          !this.$store.state.common.showcontactcontent);
    },
    showsnippetmodal() {
      this.$refs.codesnippet.show();
    },
    showpollmodal() {
      this.$refs.poll.show();
    },
    backtochat() {
      document.querySelector(".sidebar-toggle").classList.remove("mobile-menu");
    },
    addChat: function () {
      if (this.text != "") {
        if (this.activechatType == 1) {
          this.$store.dispatch("chat/addChat", this.text);
          this.$store.dispatch("chat/addNewChat", this.text);
          var container = this.$el.querySelector(".scrolltopdirectchat");
          setTimeout(function () {
            container.scrollBy({ top: 200, behavior: "smooth" });
          }, 310);
          setTimeout(function () {
            container.scrollBy({ top: 200, behavior: "smooth" });
          }, 1100);
        } else {
          this.$store.dispatch("groupchat/addChat", this.text);
          var containerfluid = this.$el.querySelector(".scrolltopgroupchat");
          setTimeout(function () {
            containerfluid.scrollBy({ top: 200, behavior: "smooth" });
          }, 310);
          setTimeout(function () {
            containerfluid.scrollBy({ top: 200, behavior: "smooth" });
          }, 1100);
        }

        this.text = "";
        this.emogiarray = [];
      }
    },

    addNewChat: function () {
      if (this.text != "") {
        this.$store.commit("chat/addNewChat", this.text);
        // this.$store.dispatch("chat/addNewChat", this.text);
      }
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    addemogi(emogi) {
      if (this.text === "") {
        this.text = emogi;
        this.emogiarray.push(emogi);
      } else {
        this.emogiarray.push(emogi);
        this.text = this.emogiarray.join(" ");
      }
      this.$store.state.common.showemogi = false;
    },
  },
  mounted() {
    this.$store.state.common.chatwallpaper =
      this.chatwallpaperIndex !== 0
        ? this.getImgUrl(
            this.allwallpaper.find((x) => x.id === this.chatwallpaperIndex).img
          )
        : "";
    this.$store.state.common.chatwallpapergrandiant = "";
    this.$store.state.common.togglerightside = true;
    var container = this.$el.querySelector(".scrolltopdirectchat");
    container.scrollTop = container.scrollHeight;
    var containerfluid = this.$el.querySelector(".scrolltopgroupchat");
    containerfluid.scrollTop = container.scrollHeight;
  },
  computed: {
    ...mapState({
      showsticker: (state) => state.common.showsticker,
      showemogi: (state) => state.common.showemogi,
      showcontactcontent: (state) => state.common.showcontactcontent,
      activechat: (state) => state.common.activechat,
      activechatType: (state) => state.common.activechatType,
      togglerightside: (state) => state.common.togglerightside,
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
      chatwallpaper: (state) => state.common.chatwallpaper,
      allwallpaper: (state) => state.common.allwallpaper,
      chatwallpapergrandiant: (state) => state.common.chatwallpapergrandiant,
      chatwallpaperIndex: (state) => state.common.chatwallpaperIndex,
    }),
  },
};
</script>
