<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel></featured-apartments-carousel>
    <properties-grid-layout></properties-grid-layout>
  </div>
</template>

<script>
import FeaturedApartmentsCarousel from "~/components/FeaturedApartmentsCarousel";
import PropertiesGridLayout from "~/components/PropertiesGridLayout";
export default {
  components: {
    FeaturedApartmentsCarousel,
    PropertiesGridLayout
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
