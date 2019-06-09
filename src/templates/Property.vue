<template>
  <h1>properties</h1>
</template>

<page-query>
query Properties ($path: String) {
    property (path: $path) {
        id
    }
}
</page-query>