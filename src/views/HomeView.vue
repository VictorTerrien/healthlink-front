<template>
  <div class="flex flex-col">
    <!-- Contenu principal -->
      <div class="m-6 flex flex-col items-center">
        <h2 class="text-lg font-medium text-gray-900">Connexion au compte :</h2><br>
        <RouterLink :to="`/user/${defaultUserNumber}`" class="p-4 m-4 w-full lg:w-80 rounded-full text-center text-white font-medium bg-blue-700 hover:bg-blue-800">
          Connexion utilisateur
        </RouterLink>
        <RouterLink to="/pro" class="p-4 m-4 w-full lg:w-80 rounded-full text-center text-white font-medium bg-blue-700 hover:bg-blue-800">
          Connexion Pro
        </RouterLink>
      </div>
      <div class="m-6 flex flex-col items-center">
        <h2 class="text-lg font-medium text-gray-900">Création du compte :</h2><br>
        <RouterLink to="/register" class="p-4 m-4 w-full lg:w-80 rounded-full text-center text-white font-medium bg-green-700 hover:bg-green-800">
          Inscription Utilisateur
        </RouterLink>
      </div>
      <div class="m-6 flex flex-col items-center">
        <h2 class="text-lg font-medium text-gray-900">Scanner un code :</h2><br>
        <RouterLink to="/qrcode" class="p-4 m-4 w-full lg:w-80 rounded-full text-center text-white font-medium bg-red-700 hover:bg-red-800">
          Scan
        </RouterLink>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  setup() {
    const defaultUserNumber = "1000000000";

    return {
      defaultUserNumber,
    };
  }
};
</script>

<style scoped>
</style>
