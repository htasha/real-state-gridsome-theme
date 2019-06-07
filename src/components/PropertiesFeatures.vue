<template>
  <b-card no-body>
    <slot></slot>
    <b-card-body body-class="d-none d-sm-block pt-0 px-3 pb-2">
      <b-row>
        <b-col class="mb-3">
          <div class="py-1">Estrato</div>
          <div class="d-flex align-items-center">
            <font-awesome icon="crown" size="lg" pull="left"></font-awesome>
            <strong>5</strong>
          </div>
        </b-col>
        <b-col>
          <div class="py-1">Habitaciones</div>
          <div class="d-flex align-items-center">
            <font-awesome icon="bed" size="lg" pull="left"></font-awesome>
            <strong>1</strong>
          </div>
        </b-col>
        <b-col>
          <div class="py-1">Baños</div>
          <div class="d-flex align-items-center">
            <font-awesome icon="bath" size="lg" pull="left"></font-awesome>
            <strong>2</strong>
          </div>
        </b-col>
        <b-col>
          <div class="py-1">Área</div>
          <div class="d-flex align-items-center">
            <font-awesome icon="vector-square" size="lg" pull="left"></font-awesome>
            <strong>40</strong> ㎡
          </div>
        </b-col>
      </b-row>
    </b-card-body>
    <b-card-body body-class="px-3 pt-0 pb-3">
      <b-row>
        <b-col>
          <div class="py-1">Renta</div>
          <h3>$ 100,000 / mes</h3>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {}
};
</script>
