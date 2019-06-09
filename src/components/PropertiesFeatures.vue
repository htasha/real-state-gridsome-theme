<template>
  <b-card no-body>
    <slot></slot>
    <b-list-group class="border-top border-bottom">
      <b-list-group-item class="border-0 d-flex align-items-center justify-content-between" button>
        <div class="d-flex align-items-center">
          <div class="properties-list__icon mr-3">
            <font-awesome icon="crown" class="text--small text-gray-light"></font-awesome>
          </div>
          <h6 class="mb-0 font-weight-normal">Estrato</h6>
        </div>
        <h6 class="mb-0 font-weight-normal">5</h6>
      </b-list-group-item>
      <b-list-group-item class="border-0 d-flex align-items-center justify-content-between" button>
        <div class="d-flex align-items-center">
          <div class="properties-list__icon mr-3">
            <font-awesome icon="bed" class="text--small text-gray-light"></font-awesome>
          </div>
          <h6 class="mb-0 font-weight-normal">Habitaciones</h6>
        </div>
        <h6 class="mb-0 font-weight-normal">2</h6>
      </b-list-group-item>
      <b-list-group-item class="border-0 d-flex align-items-center justify-content-between" button>
        <div class="d-flex align-items-center">
          <div class="properties-list__icon mr-3">
            <font-awesome icon="bath" class="text--small text-gray-light"></font-awesome>
          </div>
          <h6 class="mb-0 font-weight-normal">Baños</h6>
        </div>
        <h6 class="mb-0 font-weight-normal">1</h6>
      </b-list-group-item>
      <b-list-group-item class="border-0 d-flex align-items-center justify-content-between" button>
        <div class="d-flex align-items-center">
          <div class="properties-list__icon mr-3">
            <font-awesome icon="vector-square" class="text--small text-gray-light"></font-awesome>
          </div>
          <h6 class="mb-0 font-weight-normal">Área</h6>
        </div>
        <h6 class="mb-0 font-weight-normal">40 &#13217;</h6>
      </b-list-group-item>
    </b-list-group>
    <b-list-group-item class="border-0">
      <h6 class="font-weight-normal">Renta</h6>
      <h5 class="text-primary">$ 100,000 / mes</h5>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "PropertiesFeatures"
};
</script>

<style>
.properties-list__icon {
  width: 24px;
  height: 24px;
}
</style>

