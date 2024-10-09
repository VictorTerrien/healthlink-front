<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

main {
  padding-top: 7rem;
  z-index: 0;
}
</style>