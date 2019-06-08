<template>
  <section class="bg-light py-5">
    <b-container>
      <the-grid>
        <div class="grid__header text-center text-lg-left py-5">
          <h6 class="text-muted font-weight-medium text-uppercase">Recientes</h6>
          <h2>Apartamentos</h2>
          <p class="text-muted">Echa un vistazo a algunos de nuestros últimos inmuebles</p>
        </div>
        <properties-features>
          <g-image class="card-img" src="~/assets/images/apartamento-1-camas-1.jpg"></g-image>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">Apartamento sector Los Laureles</b-card-title>
            <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
          </b-card-body>
        </properties-features>
        <properties-features>
          <g-image class="card-img" src="~/assets/images/apartamento-1-camas-1.jpg"></g-image>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">Apartamento sector Los Laureles</b-card-title>
            <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
          </b-card-body>
        </properties-features>
        <properties-features>
          <g-image class="card-img" src="~/assets/images/apartamento-1-camas-1.jpg"></g-image>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">Apartamento sector Los Laureles</b-card-title>
            <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
          </b-card-body>
        </properties-features>
      </the-grid>
    </b-container>
  </section>
</template>

<script>
import PropertiesFeatures from "~/components/PropertiesFeatures.vue";
export default {
  name: "PropertiesGridLayout",
  components: {
    PropertiesFeatures
  }
};
</script>

<style>
.grid__header {
  grid-column: 1 / -1;
}
</style>

