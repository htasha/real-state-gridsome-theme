<template>
  <div class="property">
    <the-header></the-header>
    <div class="property__grid">
      <div class="property__img">
        <g-image :src="$page.property.featuredImage" class="w-100 hero__img"/>
      </div>
      <b-container class="property__title">
        <h1 class="text-white mb-4 font-weight-normal">{{$page.property.title}}</h1>
      </b-container>
    </div>
  </div>
</template>

<page-query>
query Properties($path: String) {
  property(path: $path) {
    id
    featuredImage (width: 1366, quality: 90)
    title
  }
}
</page-query>

<script>
export default {
  mounted() {}
};
</script>

<style>
.property {
  position: relative;
}
.property__grid {
  display: grid;
}
.property__img {
  min-height: 300px;
  max-height: 350px;
  z-index: 1;
}
.property__title {
  align-self: end;
  z-index: 2;
}
.property__title,
.property__img {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}
.hero__img {
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
}
.property__img::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
