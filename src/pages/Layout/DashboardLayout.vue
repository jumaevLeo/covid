<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
<!--    <notifications></notifications>-->

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/science">
        <md-icon>bubble_chart</md-icon>
        <p>Fanlar</p>
      </sidebar-link>
      <sidebar-link to="/teacher">
        <md-icon>people</md-icon>
        <p>O'qituvchilar</p>
      </sidebar-link>
      <sidebar-link to="/pupil">
        <md-icon>people</md-icon>
        <p>O'quvchilar</p>
      </sidebar-link>
      <sidebar-link to="/payment">
        <md-icon>people</md-icon>
        <p>To'lovlar</p>
      </sidebar-link>
      <sidebar-link to="/rating">
        <md-icon>people</md-icon>
        <p>Reyting</p>
      </sidebar-link>
      <sidebar-link to="/result">
        <md-icon>people</md-icon>
        <p>Natijalar</p>
      </sidebar-link>
      <sidebar-link to="/auth/login">
        <md-icon>exit</md-icon>
        <p>Chiqish</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>
