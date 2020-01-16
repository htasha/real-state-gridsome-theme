<template>
  <div class="property">
    <the-header></the-header>
    <div class="property__grid">
      <g-image
        :src="$page.property.propertyImages[0].image"
        :alt="$page.property.propertyImages[0].altText"
        class="w-100 hero__img"
        quality="100"
      />
      <div class="property__gradient">
        <b-container class="property__title">
          <h2 class="text-white py-3 mb-0 font-weight-normal">
            {{ $page.property.title }}
          </h2>
        </b-container>
      </div>
    </div>
    <section class="py-5">
      <b-container>
        <b-row>
          <b-col lg="7">
            <span class="d-flex align-items-center mb-3">
              <h4 class="font-weight-normal mb-0 mr-2">
                {{ $page.property.title }}
              </h4>
              <b-badge variant="primary">{{ $page.property.leasing }}</b-badge>
            </span>
            <span class="d-flex align-items-center">
              <font-awesome
                icon="map-marker-alt"
                class="text-gray-light"
              ></font-awesome>
              <h6 class="text-muted font-weight-normal mb-0 ml-2">
                {{ $page.property.address }}
              </h6>
            </span>
            <b-carousel :interval="5000" controls indicators fade class="mt-5">
              <b-carousel-slide
                v-for="({ image, altText }, i) in $page.property.propertyImages"
                :key="i"
              >
                <template #img>
                  <g-image
                    :src="image"
                    quality="100"
                    class="carousel__image w-100 rounded-lg"
                    :alt="altText"
                  ></g-image>
                </template>
              </b-carousel-slide>
            </b-carousel>
            <b-row class="mt-5" no-gutters>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="crown" class="text-primary"></font-awesome>
                <span class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >Estrato {{ $page.property.stratum }}</span
                >
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome
                  icon="vector-square"
                  class="text-primary"
                ></font-awesome>
                <span class="h6 text-muted mb-0 ml-2 font-weight-normal">
                  {{ $page.property.area }} m
                  <sup>2</sup>
                </span>
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="bed" class="text-primary"></font-awesome>
                <span
                  v-if="$page.property.bedrooms > 1"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.bedrooms }} habitaciones</span
                >
                <span v-else class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.bedrooms }} habitación</span
                >
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome icon="bath" class="text-primary"></font-awesome>
                <span
                  v-if="$page.property.bathrooms > 1"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.bathrooms }} baños</span
                >
                <span v-else class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.bathrooms }} baño</span
                >
              </b-col>
              <b-col cols="6" sm="4" class="d-flex align-items-center h-48">
                <font-awesome
                  icon="utensils"
                  class="text-primary"
                ></font-awesome>
                <span
                  v-if="$page.property.kitchenFurnished"
                  class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.kitchen }} cocina amoblada</span
                >
                <span v-else class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >{{ $page.property.kitchen }} cocina no amoblada</span
                >
              </b-col>
              <b-col
                v-if="$page.property.wifi"
                cols="6"
                sm="4"
                class="d-flex align-items-center h-48"
              >
                <font-awesome icon="wifi" class="text-primary"></font-awesome>
                <span class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >WiFi</span
                >
              </b-col>
              <b-col
                v-if="$page.property.tv"
                cols="6"
                sm="4"
                class="d-flex align-items-center h-48"
              >
                <font-awesome icon="tv" class="text-primary"></font-awesome>
                <span class="h6 text-muted mb-0 ml-2 font-weight-normal"
                  >TV</span
                >
              </b-col>
            </b-row>
            <section class="mt-5">
              <h4 class="font-weight-normal mb-3">
                Descripción del Apartamento
              </h4>
              <p class="text-secondary">{{ $page.property.description }}</p>
            </section>
            <section class="mt-5">
              <h4 class="font-weight-normal mb-5">Detalles adicionales</h4>
              <h6 class="text-muted font-weight-medium text-uppercase mb-3">
                Comodidades Exteriores
              </h6>
              <b-list-group class="flex-row flex-wrap">
                <b-list-group-item
                  v-for="(amenities, i) in $page.property.outsideAmenities"
                  :key="i"
                  class="mr-2 mt-2 rounded-lg h6 font-weight-normal"
                  >{{ amenities }}</b-list-group-item
                >
              </b-list-group>
            </section>
            <section class="mt-5">
              <h6 class="text-muted font-weight-medium text-uppercase mb-3">
                Comodidades Interiores
              </h6>
              <b-list-group class="flex-row flex-wrap">
                <b-list-group-item
                  v-for="(amenities, i) in $page.property.insideAmenities"
                  :key="i"
                  class="mr-2 mt-2 rounded-lg h6 font-weight-normal"
                  >{{ amenities }}</b-list-group-item
                >
              </b-list-group>
            </section>
          </b-col>
          <b-col lg="5">
            <section class="mt-5 mt-lg-0">
              <b-card
                class="rounded-lg mt-5 mt-lg-0 mx-auto ml-md-0 shadow-sm border-0 rounded-lg property__card"
                body-class="p-0"
                no-body
              >
                <b-card-body class="p-0">
                  <div class="p-4 pt-4">
                    <h6 class="font-weight-medium text-uppercase text-muted">
                      En {{ $page.property.leasing }} por
                    </h6>
                    <b-card-title title-tag="h5" class="text-primary mb-0"
                      >${{ $page.property.price }}
                      <span v-if="$page.property.leasing === 'Renta'"
                        >/ mes</span
                      ></b-card-title
                    >
                  </div>
                </b-card-body>
                <b-form name="contact" method="POST" action="/gracias" netlify>
                  <b-card-body class="pt-4 pb-1 px-4">
                    <b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Nombre"
                        required
                        aria-label="Ingresa tu nombre"
                        class="py-4"
                        name="nombre"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      description="Nunca compartiremos tu correo electrónico con nadie."
                    >
                      <b-form-input
                        type="email"
                        placeholder="Correo"
                        required
                        aria-label="Ingresa tu correo"
                        class="py-4"
                        name="correo"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="tel"
                        placeholder="Teléfono"
                        required
                        aria-label="Ingresa tu número telefónico"
                        class="py-4"
                        name="telefono"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-textarea
                        placeholder="Mensaje"
                        rows="4"
                        max-rows="6"
                        aria-label="Ingresa tu mensaje"
                        required
                        value="Estoy interesad@ en la propiedad y quería reservar una cita"
                        :no-resize="true"
                        name="mensaje"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-card-body>
                  <b-card-body class="py-3 px-2 d-flex bg-light">
                    <b-button
                      type="submit"
                      variant="primary"
                      class="ml-auto mb-0 rounded-lg"
                    >
                      <span class="text-uppercase h6 font-weight-medium"
                        >Enviar mensaje</span
                      >
                    </b-button>
                  </b-card-body>
                </b-form>
              </b-card>
            </section>
            <section class="mt-5 property__agent">
              <b-media
                class="shadow-sm rounded-lg p-3 property__card mx-auto ml-md-0 "
              >
                <template #aside>
                  <g-image
                    src="~/assets/images/andrea-cardenas.jpg"
                    alt="Andrea Cárdenas"
                    width="80"
                    height="80"
                    quality="100"
                    class="rounded-circle"
                  />
                </template>
                <h5 class="font-weight-normal">Andrea Cárdenas</h5>
                <div class="text-primary">Agente de bienes raices</div>
                <div class="mt-1">
                  <b-link
                    class="text-decoration-none text-gray-light font-weight-normal"
                    aria-label="Enviar correo"
                    href="mailto:lafirma.bienesraices@gmail.com"
                    target="__self"
                  >
                    <span class="pr-1">
                      <font-awesome
                        icon="envelope"
                        class="text--small"
                      ></font-awesome>
                    </span>
                    lafirma.bienesraices@gmail.com
                  </b-link>
                </div>
                <div class="mt-1">
                  <b-link
                    aria-label="Chat en WhatsApp"
                    target="__blank"
                    class="text-gray-light text-decoration-none"
                    href="https://wa.me/573103844044"
                  >
                    <span class="pr-1">
                      <font-awesome
                        :icon="['fab', 'whatsapp']"
                        class="text--small"
                      ></font-awesome>
                    </span>
                    310 3844 044
                  </b-link>
                </div>
              </b-media>
            </section>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <the-freaking-footer></the-freaking-footer>
  </div>
</template>

<page-query>
query Properties($path: String) {
  property(path: $path) {
    title
    description
    price
    address
    stratum
    area
    beds
    bedrooms
    bathrooms
    kitchen
    kitchenFurnished
    wifi
    tv
    leasing
    propertyImages {
      image (height: 350, width: 500, quality: 90)
      altText
    }
    outsideAmenities
    insideAmenities
  }
}
</page-query>

<script>
import { BBadge, BMedia } from "bootstrap-vue";
export default {
  components: {
    BBadge,
    BMedia
  },
  metaInfo() {
    return {
      title: this.$page.property.title,
      titleTemplate: "%s · Construsueños"
    };
  }
};
</script>

<style>
.property__grid {
  display: grid;
}
.property__gradient {
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), #000);
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
}
.property__gradient {
  align-self: end;
  z-index: 2;
}
.property__gradient,
.hero__img {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}
.hero__img {
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
}
.property__card {
  max-width: 400px;
}
.property__agent {
  position: sticky;
  top: 100px;
}
</style>
