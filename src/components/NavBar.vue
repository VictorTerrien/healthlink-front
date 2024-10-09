<template>
<nav class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-12">
    <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/assets/logo-healthlink.png" class="h-8" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HealthLink</span>
    </RouterLink>
  </div>
</nav>

</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const isOpen = ref(false);
const currentPage = ref("");
const route = useRoute();
const router = useRouter();


onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (isOpen.value && e.key === "Escape") isOpen.value = false;
  });

  currentPage.value = route.path;
  router.afterEach((to) => {
    currentPage.value = to.path;
  });
});

watchEffect(() => {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
</style>