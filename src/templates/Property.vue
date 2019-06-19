<template>
  <div class="property">
    <the-header></the-header>
    <div class="property__grid">
      <g-image
        :src="$page.property.featuredImage"
        :alt="$page.property.featuredImageAltText"
        class="w-100 hero__img"
      />
      <div class="property__gradient">
        <b-container class="property__title">
          <h2 class="text-white py-3 mb-0 font-weight-normal">{{$page.property.title}}</h2>
        </b-container>
      </div>
    </div>
    <section class="py-5">
      <b-container>
        <b-row>
          <b-col lg="7">
            <span class="d-flex align-items-center mb-3">
              <h4 class="font-weight-normal mb-0 mr-2">{{ $page.property.title }}</h4>
              <b-badge variant="primary">Venta</b-badge>
            </span>
            <span class="d-flex align-items-center">
              <font-awesome icon="map-marker-alt" class="text-muted"></font-awesome>
              <h6 class="text-muted font-weight-normal mb-0 ml-2">{{ $page.property.address }}</h6>
            </span>
            <b-carousel :interval="5000" controls fade class="mt-5">
              <b-carousel-slide
                v-for="({ image, altText }, i) in $page.property.propertyImages"
                :key="i"
              >
                <template #img>
                  <g-image :src="image" quality="100" class="carousel__image w-100" :alt="altText"></g-image>
                </template>
              </b-carousel-slide>
            </b-carousel>
            <b-row class="mt-5" no-gutters>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="crown" class="text-primary"></font-awesome>
                <span
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >Estrato {{ $page.property.stratum }}</span>
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="vector-square" class="text-primary"></font-awesome>
                <span class="h6 text-muted mb-0 ml-2 font-weight-normal">
                  {{ $page.property.area }} m
                  <sup>2</sup>
                </span>
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="bed" class="text-primary"></font-awesome>
                <span
                  v-if="$page.property.bedrooms > 1"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.bedrooms }} habitaciones</span>
                <span
                  v-else
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.bedrooms }} habitación</span>
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="bath" class="text-primary"></font-awesome>
                <span
                  v-if="$page.property.bathrooms > 1"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.bathrooms }} baños</span>
                <span
                  v-else
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.bathrooms }} baño</span>
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="bath" class="text-primary"></font-awesome>
                <span
                  v-if="$page.property.kitchenFurnished"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.kitchen }} cocina amoblada</span>
                <span
                  v-else
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                >{{ $page.property.kitchen }} cocina no amoblada</span>
              </b-col>
            </b-row>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </section>
    <the-freaking-footer></the-freaking-footer>
  </div>
</template>

<page-query>
query Properties($path: String) {
  property(path: $path) {
    featuredImage (width: 1366, quality: 85)
    featuredImageAltText
    title
    address
    stratum
    area
    beds
    bedrooms
    bathrooms
    kitchen
    kitchenFurnished
    propertyImages {
      image (height: 350, width: 500, quality: 90)
      altText
    }
  }
}
</page-query>

<script>
import { BBadge } from "bootstrap-vue";
export default {
  components: {
    BBadge
  }
};
</script>

<style>
.property__grid {
  display: grid;
}
.property__gradient {
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), #000);
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
}
.property__gradient {
  align-self: end;
  z-index: 2;
}
.property__gradient,
.hero__img {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}
.hero__img {
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
}
</style>
