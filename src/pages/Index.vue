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
		metaInfo() {
			return {
				htmlAttrs: {
					lang: "es"
				},
				title: "Venta y renta de inmobiliarios en Medellín",
				meta: [
					{
						name: "title",
						content: "Venta y renta de inmobiliarios en Medellín"
					},
					{
						name: "description",
						content:
							"En La Firma Bienes Raices vendemos y rentamos inmobiliarios en zonas exclusivas de Medellín, centricos, seguros y excelente localización"
					},
					// og / facebook
					{ property: "og:url", content: "https://lafirmabienesraices.co" },
					{
						property: "og:title",
						content: "Venta y renta de inmobiliarios en Medellín"
					},
					{
						property: "og:description",
						content:
							"En La Firma Bienes Raices vendemos y rentamos inmobiliarios en zonas exclusivas de Medellín, centricos, seguros y excelente localización"
					},
					{
						property: "og:image",
						content: `https://lafirmabienesraices.co/la-firma-og.jpg`
					},
					{ property: "og:type", content: "website" },
					// twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{ property: "twitter:url", content: "https://lafirmabienesraices.co" },
					{
						property: "twitter:title",
						content: "Venta y renta de inmobiliarios en Medellín"
					},
					{
						property: "twitter:description",
						content:
							"En La Firma Bienes Raices vendemos y rentamos inmobiliarios en zonas exclusivas de Medellín, centricos, seguros y excelente localización"
					},
					{
						property: "twitter:image",
						content: `https://lafirmabienesraices.co/la-firma-og.jpg`
					}
				]
			};
		},
		components: {
			FeaturedApartmentsCarousel,
			PropertiesGridLayout,
			PropertiesFeatureCards,
			OurPartners
		}
	};
</script>
