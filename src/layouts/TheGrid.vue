<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
  gap: 1.5rem;
  justify-content: center;
}
</style>
