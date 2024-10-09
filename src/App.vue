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
  <footer>
    <RouterLink to="/conditions">
      Conditions utilisations
    </RouterLink>
  </footer>
</template>

<style>
</style>