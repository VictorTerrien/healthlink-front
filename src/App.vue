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

  <footer class="bottom-0 left-0 z-20 w-full p-4 mt-12 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <RouterLink to="/" class="hover:underline me-4 md:me-6">HealthLink™</RouterLink>Tous droits réservés.</span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <RouterLink to="/conditions" class="hover:underline me-4 md:me-6">Conditions utilisations</RouterLink>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
  </footer>

</template>

<style>
</style>