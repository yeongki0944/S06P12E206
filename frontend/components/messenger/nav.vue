<template>
  <!-- Main Left Sidebar Menu start -->
 <nav class="main-nav custom-scroll" :class="toggleleftside">
    <div class="logo-warpper">
      <a></a>
        <nuxt-link to="/">
          <img src="../../assets/images/logo/logo.png" alt="logo" />
        </nuxt-link>
      </a>
    </div>
     <div class="sidebar-main">
       <ul class="sidebar-top">
         <li>
           <a class="button-effect" href="javascript:void(0)" :class="activesidebar == 1 ? 'active' : ''" @click="activemenu(1)" v-b-tooltip.hover.topright title="status" data-tippy-content="status" data-intro="Check Status here">
             <div class="user-popup status one">
               <div class="bg-size" :style="[{'background-image': 'url(' + this.getImgUrl(status) + ')',},styleObject,]"></div>
             </div>
           </a>
         </li>
         <li><a class="icon-btn btn-light button-effect" :class="activesidebar == 2 ? 'active' : ''" href="javascript:void(0)" @click="activemenu(2)" v-b-tooltip.hover.topright title="Favourite" data-tippy-content="Favourite"><i class="fa fa-star">               </i></a></li>
         <li><a class="icon-btn btn-light button-effect" :class="activesidebar == 3 ? 'active' : ''" href="javascript:void(0)" @click="activemenu(3)" v-b-tooltip.hover.topright title="Document" data-tippy-content="Document"> <i class="fa fa-file-text">       </i></a></li>
         <li><a class="icon-btn btn-light button-effect" :class="activesidebar == 4 ? 'active' : ''" href="javascript:void(0)" @click="activemenu(4)" v-b-tooltip.hover.topright title="Contact List" data-tippy-content="Contact List"> <i class="fa fa-users">  </i></a></li>
         <li>
           <div class="dot-btn dot-danger grow"><a class="icon-btn btn-light button-effect" :class="activesidebar == 5 ? 'active' : ''" href="javascript:void(0)" @click="activemenu(5)" v-b-tooltip.hover.topright title="Notification" data-tippy-content="Notification"> <i class="fa fa-bell"></i></a></div>
         </li>
         <li><a class="icon-btn btn-light button-effect" :class="activesidebar == 6 ? 'active' : ''" href="javascript:void(0)" @click="activemenu(6)" v-b-tooltip.hover.topright title="Setting" data-tippy-content="Setting" data-intro="You can change settings by clicking here"> <i class="fa fa-cog"></i></a></li>
       </ul>
       <ul class="sidebar-bottom">         
         <li><a class="icon-btn btn-light button-effect mode" href="javascript:void(0)" v-b-tooltip.hover.topright title="Theme Mode" data-tippy-content="Theme Mode" data-intro="Change mode" @click="customizeMixLayout()"><i class="fa" :class="this.mixLayout===''? 'fa-moon-o': 'fa-lightbulb-o'"></i></a></li>
         <li>
           <nuxt-link to="/authentication/login" class="icon-btn btn-light button-effect"> <i class="fa fa-power-off" v-b-tooltip.hover.topright title="SignOut" data-tippy-content=" SignOut"></i>
           </nuxt-link>
         </li>
       </ul>
     </div>
 </nav>
   <!-- Main Left Sidebar Menu end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mixLayout: "",
      status : "avtar/2.jpg",
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
    customizeMixLayout() {
      if (this.mixLayout === "") {
        this.mixLayout = "dark";
      } else {
        this.mixLayout = "";
      }
      this.$store.dispatch("layout/setLayout", this.mixLayout);
    },
  },
};
</script>