<template>
  <!-- Main Chat Left Sidebar start -->
  <aside class="chitchat-left-sidebar left-disp">
    <RecentChat />
    <Favourite />
    <Documents />
    <ContactList />
    <Notifications />
    <Settings />
    <Status />
  </aside>
  <!-- Main Chat Left Sidebar end -->
</template>

<script>
import Status from "./lefsidebar/status.vue";
import Settings from "./lefsidebar/settings.vue";
import Notifications from "./lefsidebar/notification.vue";
import ContactList from "./lefsidebar/contact_list.vue";
import Documents from "./lefsidebar/document.vue";
import Favourite from "./lefsidebar/favourite.vue";
import RecentChat from "./lefsidebar/recentchat.vue";

export default {
  components: {
    Status,
    Settings,
    Notifications,
    ContactList,
    Documents,
    Favourite,
    RecentChat,
  },
};
</script>
