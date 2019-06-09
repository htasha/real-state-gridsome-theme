<template>
  <b-carousel :interval="5000" controls fade>
    <b-carousel-slide
      v-for="{ node: { id, path, featuredImage, featuredImageAltText, title, address } } in featuredProperties"
      :key="id"
      class="vh-100"
    >
      <template #img>
        <g-link :to="path">
          <g-image
            :src="featuredImage"
            quality="100"
            class="carousel__image w-100 h-100"
            :alt="featuredImageAltText"
          ></g-image>
        </g-link>
      </template>
      <div class="d-flex justify-content-end text-left">
        <b-card class="caption__card" no-body>
          <b-card-body body-class="p-3">
            <g-link to="/" class="text-decoration-none">
              <b-card-title class="text-dark" title-tag="h5">{{ title }}</b-card-title>
            </g-link>
            <b-card-sub-title>{{ address }}</b-card-sub-title>
          </b-card-body>
          <b-card-body body-class="text-dark pt-0 px-3 pb-2">
            <h6 class="font-weight-normal">Renta</h6>
            <h5 class="text-primary">$100,000 / mes</h5>
          </b-card-body>
        </b-card>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide, BCard, BCardText } from "bootstrap-vue";
export default {
  props: {
    featuredProperties: {
      type: Array,
      required: true
    }
  },
  components: {
    BCarousel,
    BCarouselSlide,
    BCard,
    BCardText
  }
};
</script>

<style>
.carousel__image {
  object-fit: cover;
}
.caption__card {
  width: 350px;
}
</style>

