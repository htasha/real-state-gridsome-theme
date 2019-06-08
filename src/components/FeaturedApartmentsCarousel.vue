<template>
  <b-carousel :interval="0" controls fade>
    <b-carousel-slide img-alt="Blank image" class="vh-100">
      <template #img>
        <g-image
          src="~/assets/images/apartamento-1-camas-1.jpg"
          quality="100"
          class="carousel__image w-100 h-100"
        ></g-image>
      </template>
      <div class="d-flex justify-content-end text-left">
        <b-card class="caption__card" no-body>
          <b-card-body body-class="p-3">
            <b-card-title class="text-dark" title-tag="h5">Apartamento sector Los Laureles</b-card-title>
            <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
          </b-card-body>
          <b-card-body body-class="text-dark pt-0 px-3 pb-2">
            <h6 class="font-weight-normal">Renta</h6>
            <h5 class="text-primary">$ 100,000 / mes</h5>
          </b-card-body>
        </b-card>
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
}
.caption__card {
  width: 350px;
}
</style>

