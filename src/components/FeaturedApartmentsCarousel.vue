<template>
  <b-carousel :interval="5000" controls fade>
    <b-carousel-slide
      v-for="{
        node: { id, path, title, address, leasing, price, propertyImages }
      } in featuredProperties"
      :key="id"
      class="vh-100"
    >
      <template #img>
        <g-link :to="path">
          <g-image
            :src="propertyImages[0].image"
            quality="100"
            class="carousel__image w-100 h-100"
            :alt="propertyImages[0].altText"
          ></g-image>
        </g-link>
      </template>
      <div class="d-flex justify-content-end text-left">
        <b-card class="caption__card border-0" no-body>
          <b-card-body body-class="p-3">
            <b-card-title title-tag="h5">
              <g-link :to="path" class="text-dark text-decoration-none">{{
                title
              }}</g-link>
            </b-card-title>
            <b-card-sub-title>{{ address }}</b-card-sub-title>
          </b-card-body>
          <b-card-body body-class="text-dark pt-0 px-3 pb-2">
            <h6 class="font-weight-normal">{{ leasing }}</h6>
            <h5 class="text-primary">
              ${{ price }} <span v-if="leasing === 'Renta'">/ mes</span>
            </h5>
          </b-card-body>
        </b-card>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCard, BCardText } from "bootstrap-vue";
export default {
  props: {
    featuredProperties: {
      type: Array,
      required: true
    }
  },
  components: {
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
