<template>
  <section class="bg-light">
    <b-container class="py-5">
      <div class="properties__header text-center py-5">
        <span class="text-muted">
          <strong>Reciente</strong>
        </span>
        <h2>Apartamentos</h2>
        <p class="text-muted">Echa un vistazo a algunos de nuestros últimos inmuebles</p>
      </div>
      <b-row>
        <b-col lg="4" class="mb-30">
          <properties-features>
            <g-image class="card-img" src="~/assets/images/apartamento-1-camas-1.jpg"></g-image>
            <b-card-body body-class="p-3">
              <b-card-title>Apartamento sector Los Laureles</b-card-title>
              <b-card-sub-title>Merrick Way, Miami, FL 33134, USA</b-card-sub-title>
            </b-card-body>
          </properties-features>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style>
.mb-30 {
  margin-bottom: 30px;
}
</style>

