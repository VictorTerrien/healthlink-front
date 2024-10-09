<template>
  <nav class="">
      <!-- Header logo -->
      <div>
          <RouterLink to="/">
            <img
              src="/src/assets/logo-healthlink.png"
              alt="logo"
            />
            <h1>HealthLink</h1>
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