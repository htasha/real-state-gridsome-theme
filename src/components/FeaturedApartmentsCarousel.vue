<template>
  <b-carousel :interval="0" controls fade>
    <b-carousel-slide img-alt="Blank image" class="vh-100">
      <template #img>
        <g-image
          src="~/assets/images/apartamento-1-camas-1.jpg"
          quality="100"
          class="carousel__image"
        ></g-image>
      </template>
      <div class="carousel__caption d-flex justify-content-end text-left">
        <properties-features class="mw-500 flex-grow-1 text-dark">
          <b-card-body body-class="p-3">
            <b-card-title class="text-dark">Apartamento sector Los Laureles</b-card-title>
            <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
          </b-card-body>
        </properties-features>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide, BCard, BCardText } from "bootstrap-vue";
export default {
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
  height: 100%;
  width: 100%;
}
</style>

