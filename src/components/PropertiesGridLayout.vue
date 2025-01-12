<template>
  <section class="py-5 border-top border-bottom">
    <b-container>
      <the-grid>
        <div class="grid__header">
          <h6 class="text-muted font-weight-medium text-uppercase">
            Recientes
          </h6>
          <h4>Apartamentos</h4>
          <p class="text-muted">
            Echa un vistazo a algunos de nuestros últimos inmuebles
          </p>
        </div>
        <b-card
          v-for="{
            node: {
              id,
              path,
              propertyImages,
              title,
              address,
              stratum,
              bedrooms,
              bathrooms,
              area,
              leasing,
              price
            }
          } in nodes"
          :key="id"
          no-body
          class="rounded-lg shadow-sm border-0 rounded-lg"
        >
          <g-link :to="path">
            <g-image
              class="card-img"
              :src="propertyImages[0].image"
              :alt="propertyImages[0].altText"
              width="350"
              height="200"
              quality="90"
              style="height: 200px"
            />
          </g-link>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">
              <g-link :to="path" class="text-dark text-decoration-none">{{
                title
              }}</g-link>
            </b-card-title>
            <b-card-sub-title>{{ address }}</b-card-sub-title>
          </b-card-body>
          <b-list-group class="border-top border-bottom">
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between focus:outline-none"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome
                    icon="crown"
                    class="text--small text-gray-light"
                  ></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Estrato</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ stratum }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between focus:outline-none"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome
                    icon="bed"
                    class="text--small text-gray-light"
                  ></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Habitaciones</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ bedrooms }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between focus:outline-none"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome
                    icon="bath"
                    class="text--small text-gray-light"
                  ></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Baños</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ bathrooms }}</h6>
            </b-list-group-item>
            <b-list-group-item
              class="border-0 d-flex align-items-center justify-content-between focus:outline-none"
              button
            >
              <div class="d-flex align-items-center">
                <div class="properties-list__icon mr-3">
                  <font-awesome
                    icon="vector-square"
                    class="text--small text-gray-light"
                  ></font-awesome>
                </div>
                <h6 class="mb-0 font-weight-normal">Área</h6>
              </div>
              <h6 class="mb-0 font-weight-normal">{{ area }} &#13217;</h6>
            </b-list-group-item>
          </b-list-group>
          <b-list-group-item class="border-0">
            <h6 class="font-weight-normal">{{ leasing }}</h6>
            <h5 class="text-primary">
              ${{ price }} <span v-if="leasing === 'Renta'">/ mes</span>
            </h5>
          </b-list-group-item>
        </b-card>
        <b-button
          v-if="disabled"
          class="grid__button mr-auto"
          variant="outline-primary"
          @click="loadMore"
          >Cargar más</b-button
        >
      </the-grid>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "PropertiesGridLayout",
  data() {
    return {
      totalPages: 0,
      currentPage: 0,
      nodes: []
    };
  },
  props: {
    allProperties: {
      type: Array,
      required: true
    },
    pageInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    async loadMore() {
      try {
        if (this.currentPage === this.totalPages) return;
        let results = await this.$fetch(`/${++this.currentPage}`);
        this.nodes.push(results.data.allProperties.edges[0]);
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    disabled() {
      return this.currentPage === this.totalPages ? false : true;
    }
  },
  mounted() {
    this.allProperties.forEach(node => {
      this.nodes.push(node);
    });
    this.totalPages = this.pageInfo.totalPages;
    this.currentPage = this.pageInfo.currentPage;
  }
};
</script>

<style>
.grid__header,
.grid__button {
  grid-column: 1 / -1;
}
.properties-list__icon {
  width: 24px;
  height: 24px;
}
</style>
