<template>
  <!-- Left-Sidebar Favourite start -->
  <div
    class="fevorite-tab dynemic-sidebar"
    id="favourite"
    :class="activesidebar == 2 ? 'active' : ''"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Favourite</h2>
          <h4>Last Recent</h4>
        </div>
        <div class="media-body text-right">
          <a
            class="icon-btn btn-outline-light btn-sm m-r-15 search"
            href="javascript:void(0)"
            @click="openSeachbar()"
          >
            <feather type="search" size="15" height="15"></feather
          ></a>
          <form
            class="form-inline search-form"
            :class="openSearch ? 'open' : ''"
          >
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
          <a
            class="icon-btn btn-outline-light btn-sm m-r-15"
            href="javascript:void(0)"
            @click="showNewContactModal()"
            data-toggle="modal"
            data-target="#addcallmodal"
            ><feather type="plus" size="15" height="15"></feather></a
          ><a
            class="icon-btn btn-outline-light btn-sm close-panel"
            href="javascript:void(0)"
            @click="activemenu(0)"
            ><feather type="x" size="15" height="15"></feather
          ></a>
        </div>
      </div>
    </div>
    <ul class="chat-main">
      <li v-for="(user, index) in favourite" :key="user.id">
        <div class="chat-box">
          <div class="media">
            <div
              class="profile"
              :class="user.profile"
              :style="[
                { 'background-image': 'url(' + getImgUrl(user.img) + ')' },
                styleObject,
              ]"
            ></div>
            <div class="details">
              <h5>{{ user.name }}</h5>
              <h6>{{ user.place }}</h6>
            </div>
            <div class="media-body">
              <a
                class="icon-btn btn-sm pull-right favourite"
                :class="active(index) ? 'btn-primary' : 'btn-outline-primary'"
                href="javascript:void(0)"
                @click="setFavourite(index)"
              >
                <feather type="star" size="15" height="15"> </feather
              ></a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="add-popup add-contact-modal">
    <NewContact ref="newContactComponent" />
    </div>
  </div>
  <!-- Left-Sidebar Favourite end -->
</template>

<script>
import { mapState } from "vuex";
import NewContact from "../modals/newContact.vue";

export default {
  components: {
    NewContact,
  },
  data() {
    return {
      activeIndex: [],
      openSearch: false,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
      favourite: (state) => state.sidebar.favourite,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
    setFavourite(id) {
      if (this.activeIndex.includes(id)) {
        this.activeIndex.splice(this.activeIndex.indexOf(id), 1);
        return;
      }
      this.activeIndex.push(id);
    },
    active(index) {
      if (this.activeIndex.indexOf(index) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    showNewContactModal() {
      this.$refs.newContactComponent.show();
    },
    openSeachbar() {
      this.openSearch = !this.openSearch;
    },
  },
};
</script>
