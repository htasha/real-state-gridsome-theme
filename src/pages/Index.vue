<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel :featured-properties="$page.featuredProperties.edges"></featured-apartments-carousel>
    <properties-feature-cards></properties-feature-cards>
    <our-partners></our-partners>
    <properties-grid-layout
      :all-properties="this.$page.allProperties.edges"
      :page-info="this.$page.allProperties.pageInfo"
    ></properties-grid-layout>
    <the-freaking-footer></the-freaking-footer>
  </div>
</template>

<page-query>
query AllProperties ($page: Int) {
  featuredProperties: allProperty (filter: { featured: { eq: true } }) {
    edges {
      node {
        id
        path
        featuredImage
        featuredImageAltText
        title
        address
        leasing
      }
    }
  }
  allProperties: allProperty (perPage: 6, page: $page) @paginate {
    pageInfo {
      currentPage
      totalPages
    }
    edges {
      node {
        id
        path
        featuredImage (width:350, height: 200, quality: 90)
        featuredImageAltText
        title
        address
        stratum
        bedrooms
        bathrooms
        area
      }
    }
  }
}
</page-query>

<script>
import FeaturedApartmentsCarousel from "~/components/FeaturedApartmentsCarousel";
import PropertiesGridLayout from "~/components/PropertiesGridLayout";
import PropertiesFeatureCards from "~/components/PropertiesFeatureCards.vue";
import OurPartners from "~/components/Partners.vue";

export default {
  name: "IndexPage",
  components: {
    FeaturedApartmentsCarousel,
    PropertiesGridLayout,
    PropertiesFeatureCards,
    OurPartners
  },
  metaInfo: {
    title: "Inmobiliaria"
  }
};
</script>
