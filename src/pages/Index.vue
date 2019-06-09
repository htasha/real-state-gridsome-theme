<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel :featured-properties="$page.properties.edges"></featured-apartments-carousel>
    <properties-feature-cards></properties-feature-cards>
    <properties-grid-layout></properties-grid-layout>
    <the-freaking-footer></the-freaking-footer>
  </div>
</template>

<page-query>
query AllProperties {
  properties: allProperty (filter: { featured: { eq: true } }) {
    edges {
      node {
        id
        path
        featuredImage
        featuredImageAltText
        title
        address
      }
    }
  }
}
</page-query>

<script>
import FeaturedApartmentsCarousel from "~/components/FeaturedApartmentsCarousel";
import PropertiesGridLayout from "~/components/PropertiesGridLayout";
import PropertiesFeatureCards from "~/components/PropertiesFeatureCards.vue";
export default {
  name: "IndexPage",
  components: {
    FeaturedApartmentsCarousel,
    PropertiesGridLayout,
    PropertiesFeatureCards
  },
  metaInfo: {
    title: "Some fancy brand name"
  }
};
</script>
