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
      <sidebar-link to="/orders">
        <md-icon><b-icon icon="cash-stack" aria-hidden="true"></b-icon></md-icon>
        <p>Buyurtmalar</p>
      </sidebar-link>
      <sidebar-link to="/catalogs">
        <md-icon><b-icon icon="basket" aria-hidden="true"></b-icon></md-icon>
        <p>Kataloglar</p>
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
