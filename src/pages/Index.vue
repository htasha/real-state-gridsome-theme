<template>
  <div>
    <the-header></the-header>
    <featured-apartments-carousel :featured-properties="$page.featuredProperties.edges"></featured-apartments-carousel>
    <properties-feature-cards></properties-feature-cards>
    <properties-grid-layout :all-properties="nodes"></properties-grid-layout>
    <b-button variant="primary" @click="loadMore">Cargar más</b-button>
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
      }
    }
  }
  allProperties: allProperty (perPage: 1, page: $page) @paginate {
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
export default {
  name: "IndexPage",
  data() {
    return {
      totalPages: 0,
      currentPage: 0,
      nodes: []
    };
  },
  components: {
    FeaturedApartmentsCarousel,
    PropertiesGridLayout,
    PropertiesFeatureCards
  },
  methods: {
    async loadMore() {
      try {
        if (this.currentPage === this.totalPages) return;
        let results = await this.$fetch(`/${++this.currentPage}`);
        console.log(results.data.allProperties.edges[0].node.featuredImage);
        if (results.data.allProperties.edges[0].node.featuredImage === null) {
          results = await this.$fetch(`/${this.currentPage--}`);
        }
        console.log(results);
        this.nodes.push(results.data.allProperties.edges[0]);
      } catch (error) {
        console.log(error);
      }
    }
  },
  metaInfo: {
    title: "Some fancy brand name"
  },
  mounted() {
    this.nodes.push(this.$page.allProperties.edges[0]);
    this.totalPages = this.$page.allProperties.pageInfo.totalPages;
    this.currentPage = this.$page.allProperties.pageInfo.currentPage;
  }
};
</script>
