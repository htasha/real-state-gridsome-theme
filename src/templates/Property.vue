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
          <b-col lg="8">
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
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<page-query>
query Properties($path: String) {
  property(path: $path) {
    id
    featuredImage (width: 1366, quality: 85)
    featuredImageAltText
    title
    address
    propertyImages {
      image (height: 350, width: 500, quality: 100)
      altText
    }
  }
}
</page-query>

<script>
import { BBadge } from "bootstrap-vue";
[{ image: {}, altText: "alttext" }];
export default {
  components: {
    BBadge
  }
};
</script>

<style>
.property {
  position: relative;
}
.property__grid {
  display: grid;
}
.property__gradient {
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), #000);
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
}
.property__img {
  min-height: 300px;
  max-height: 350px;
  z-index: 1;
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
.property__img::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
