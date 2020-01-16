<template>
  <footer class="bg-light">
    <div class="footer__grid">
      <section class="footer__banner">
        <g-image
          class="footer__img w-100"
          src="~/assets/images/happy-family.jpg"
          height="700"
        />
      </section>
      <section class="footer__cta container">
        <h1 class="text-white mw-75 mb-3">
          Quieres empezar a construir tu sueño de apartamento?
        </h1>
        <b-button class="text-uppercase" variant="primary" href="tel:3103844044"
          >llamar 310 3844 044</b-button
        >
      </section>
      <b-container>
        <b-row class="pb-4 py-5">
          <b-col md="3" lg="2">
            <h6 class="text-muted mb-3 text-uppercase">Contáctanos</h6>
            <div class="py-1">
              <a
                href="mailto:lafirma.bienesraices@gmail.com"
                class="text-decoration-none"
                aria-label="Enviar correo"
                target="__self"
              >
                <h6 class="font-weight-normal">
                  lafirma.bienesraices@gmail.com
                </h6>
              </a>
            </div>
            <ul class="p-0 m-0 d-flex">
              <li
                class="list-unstyled w-48 h-48 d-flex align-items-center justify-content-center"
              >
                <b-link
                  aria-label="Enviar correo"
                  target="__blank"
                  href="mailto:lafirma.bienesraices@gmail.com"
                  class="text-gray-light"
                >
                  <font-awesome icon="envelope" size="lg"></font-awesome>
                </b-link>
              </li>
              <li
                class="list-unstyled w-48 h-48 d-flex align-items-center justify-content-center"
              >
                <b-link
                  aria-label="Chat en WhatsApp"
                  target="__blank"
                  class="text-gray-light"
                  href="https://wa.me/573103844044"
                >
                  <font-awesome
                    :icon="['fab', 'whatsapp']"
                    size="lg"
                  ></font-awesome>
                </b-link>
              </li>
              <li
                class="list-unstyled w-48 h-48 d-flex align-items-center justify-content-center"
              >
                <b-link
                  href="https://www.facebook.com/lafirmabienesraices/"
                  aria-label="Ir a Facebook"
                  target="__blank"
                  class="text-gray-light"
                >
                  <font-awesome
                    :icon="['fab', 'facebook-f']"
                    size="lg"
                  ></font-awesome>
                </b-link>
              </li>
              <li
                class="list-unstyled w-48 h-48 d-flex align-items-center justify-content-center"
              >
                <b-link
                  href="https://www.instagram.com/lafirmabienesraices?r=nametag"
                  aria-label="Ir a Instagram"
                  target="__blank"
                  class="text-gray-light"
                >
                  <font-awesome
                    :icon="['fab', 'instagram']"
                    size="lg"
                  ></font-awesome>
                </b-link>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <section class="border-top py-4">
        <b-container>
          <h6 class="font-weight-light text-gray-light">
            Fake Str. Lousiana, Montain View, Medellin, Colombia
          </h6>
          <p class="h6 font-weight-light mb-0 text-gray-light">
            &copy; 2020 - La Firma Bienes Raices
          </p>
        </b-container>
      </section>
    </div>
  </footer>
</template>

<style>
.footer__grid {
  display: grid;
}
.footer__banner {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  position: relative;
  z-index: 1;
}
.footer__banner::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.footer__cta {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  align-self: center;
  z-index: 2;
}
.footer__img {
  object-fit: cover;
  min-height: 200px;
  max-height: 400px;
  z-index: 1;
}
.mw-75 {
  max-width: 500px;
}
</style>
