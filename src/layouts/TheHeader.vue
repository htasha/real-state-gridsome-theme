<template>
  <b-navbar toggleable="sm" fixed="top" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand>
        <g-link to="/">Logo.</g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>Apartamentos</b-nav-item>
          <b-nav-item>Servicios</b-nav-item>
          <b-nav-item>Contacto</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown-divider></b-dropdown-divider>
          <b-nav-text>
            <font-awesome icon="phone" flip="horizontal" pull="left" size="lg"></font-awesome>
            <b-link href="tel:18005551234">1-800-555-1234</b-link>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarNav,
  BNavItem,
  BNavbarToggle,
  BNavbarBrand,
  BCollapse,
  BNavText,
  BDropdownDivider,
  BLink
} from "bootstrap-vue";
export default {
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarToggle,
    BNavbarBrand,
    BCollapse,
    BNavText,
    BDropdownDivider,
    BLink
  }
};
</script>

<style>
.navbar--shadow {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(192, 192, 192, 0) 100%
  );
}
</style>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
