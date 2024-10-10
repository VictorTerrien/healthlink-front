<template>
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-8 text-center">Bienvenue {{ pro?.firstname || '' }} {{ pro?.lastname || '' }}</h1>
        <hr />
      </div>
      <div class="flex flex-col items-center bg-white">
        <form @submit.prevent="handleSubmit" class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center w-1/2">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold pb-4 text-center" for="healthlink">
              Entrez le numéro HealthLink :
            </label>
            <input 
              v-model="healthlink" 
              required 
              type="number" 
              min="1000000000" 
              max="9999999999" 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="xxxx-xxx-xxx"
              id="healthlink"
            />
          </div>
          <div class="flex items-center justify-between">
            <button 
              type="submit" 
              class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Chercher
            </button>
          </div>
        </form>
      </div>
      <div v-if="user">
        <div class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md m-10">
            <div class="flex items-center justify-center h-full mb-8">
                <img src="/src/assets/user.png" class="h-20" alt="user-photo" />
            </div> 
            <p class="mb-2"><strong>Nom:</strong> {{ user.lastname }} {{ user.firstname }}</p>
            <p class="mb-2"><strong>Date de naissance:</strong> {{ user.birth_date }}</p>
            <div class="flex items-center justify-center mt-8">
                <RouterLink :to="`/user/${healthlink}`" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Accéder à plus de données</RouterLink>
            </div>
        </div>
      </div>
      <div v-else class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md p-20 m-10 text-center">
        <p>En attente d'information</p>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  import { RouterLink, useRoute } from 'vue-router';
  
  export default {
    data() {
      return {
        healthlink: '',
        user: null,
        pro: null,
        route: useRoute(),
        request: "https://projet-healthlink-api.onrender.com/api/",
      };
    },
    mounted() {
      this.fetchUsers();
      this.fetchPro();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get(this.request + "user/" + this.healthlink);
          this.user = response.data;
        } catch (error) {
          console.error("Erreur lors de la requête API :", error);
        }
      },
      async fetchPro() {
        try {
          const responsePro = await axios.get(this.request + "pro/1");
          this.pro = responsePro.data;
          console.log(this.pro);
        } catch (error) {
          console.error("Erreur lors de la requête API :", error);
        }
      },
      handleSubmit() {
        this.fetchUsers();
      }
    },
  };
</script>
  