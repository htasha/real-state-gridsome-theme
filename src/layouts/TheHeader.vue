<template>
  <header>
    <b-navbar toggleable="sm" fixed="top" variant="white" class="border-bottom">
      <b-navbar-brand to="/">Some fancy logo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="border-0"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>Apartamentos</b-nav-item>
          <b-nav-item>Servicios</b-nav-item>
          <b-nav-item>Contacto</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown-divider></b-dropdown-divider>
          <b-nav-text class="align-self-start">
            <b-button
              variant="primary"
              href="tel:18005551234"
              class="text-white d-flex align-items-center"
            >
              <font-awesome icon="phone" flip="horizontal" size="sm" class="mr-2"></font-awesome>1-800-555-1234
            </b-button>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
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
