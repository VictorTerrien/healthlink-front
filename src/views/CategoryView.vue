<template>
  <div class="mx-20 my-8">
    <h1 class="block text-2xl font-bold uppercase text-center mb-6">{{ $route.params.category }}</h1>
    <div v-for="discipline in disciplines" :key="discipline">
      <RouterLink :to="`/${$route.params.category}/${discipline}`" class="hover:text-blue-500">
        <p class="capitalize mb-4">{{ discipline }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute();

let disciplines = [];
const sports = [
    "basketball",
    "rugby",
    "cyclisme",
    "football",
    "tennis",
    "autres"
];
const esports = [
    "league-of-legends",
    "valorant",
    "rocket-league",
    "counter-strike-go",
    "super-smash-bros",
    "autres"
];

if (router.params.category == "sports") {
  disciplines = sports;
} else if (router.params.category == "e-sports") {
  disciplines = esports;
}

</script>