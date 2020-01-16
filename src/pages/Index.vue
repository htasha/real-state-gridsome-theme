<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel
      :featured-properties="$page.allProperty.edges"
    ></featured-apartments-carousel>
    <properties-feature-cards></properties-feature-cards>
    <properties-grid-layout
      :all-properties="$page.allProperty.edges"
      :page-info="$page.allProperty.pageInfo"
    ></properties-grid-layout>
    <the-freaking-footer></the-freaking-footer>
  </div>
</template>

<page-query>
query AllProperty ($page: Int) {
  allProperty (perPage: 6, page: $page) @paginate {
    pageInfo {
      currentPage
      totalPages
    }
    edges {
      node {
        id
        path
        propertyImages {
          image
          altText
        }
        title
        address
        leasing
        stratum
        bedrooms
        bathrooms
        area
        price
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
  name: "Home",
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
