<template>
  <section class="bg-light py-5">
    <b-container>
      <the-grid>
        <div class="grid__header text-center text-lg-left py-5">
          <h6 class="text-muted font-weight-medium text-uppercase">Recientes</h6>
          <h2>Apartamentos</h2>
          <p class="text-muted">Echa un vistazo a algunos de nuestros últimos inmuebles</p>
        </div>
        <b-card
          v-for="{ node: { id, path, featuredImage, featuredImageAltText, title, address, stratum, bedrooms, bathrooms, area } } in allProperties"
          :key="id"
          no-body
        >
          <g-link :to="path">
            <g-image class="card-img" :src="featuredImage" :alt="featuredImageAltText"></g-image>
          </g-link>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">
              <g-link :to="path" class="text-dark text-decoration-none">{{ title }}</g-link>
            </b-card-title>
            <b-card-sub-title>{{ address }}</b-card-sub-title>
          </b-card-body>
          <b-list-group class="border-top border-bottom">
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome icon="crown" class="text--small text-gray-light"></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Estrato</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ stratum }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome icon="bed" class="text--small text-gray-light"></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Habitaciones</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ bedrooms }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome icon="bath" class="text--small text-gray-light"></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Baños</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ bathrooms }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome icon="vector-square" class="text--small text-gray-light"></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Área</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ area }} &#13217;</h6>
            </b-list-group-item>
          </b-list-group>
          <b-list-group-item class="border-0">
            <h6 class="font-weight-normal">Renta</h6>
            <h5 class="text-primary">$ 100,000 / mes</h5>
          </b-list-group-item>
        </b-card>
      </the-grid>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "PropertiesGridLayout",
  props: {
    allProperties: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.grid__header {
  grid-column: 1 / -1;
}
.properties-list__icon {
  width: 24px;
  height: 24px;
}
</style>

