<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel></featured-apartments-carousel>
    <properties-feature-cards></properties-feature-cards>
    <properties-grid-layout></properties-grid-layout>
  </div>
</template>

<script>
import FeaturedApartmentsCarousel from "~/components/FeaturedApartmentsCarousel";
import PropertiesGridLayout from "~/components/PropertiesGridLayout";
import PropertiesFeatureCards from "~/components/PropertiesFeatureCards.vue";
export default {
  name: "App",
  components: {
    FeaturedApartmentsCarousel,
    PropertiesGridLayout,
    PropertiesFeatureCards
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
