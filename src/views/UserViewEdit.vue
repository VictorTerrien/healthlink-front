<template>
    <div class="bg-white min-h-screen">
      <div class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Modifier vos détails</h2>
        <div v-if="user">
          <div class="mb-4">
            <label class="block font-semibold">Nom:</label>
            <input type="text" v-model="user.lastname" class="w-full p-2 border rounded mb-2">
            <input type="text" v-model="user.firstname" class="w-full p-2 border rounded">
          </div>
  
          <div class="mb-4">
            <label class="block font-semibold">Date de naissance:</label>
            <input type="date" v-model="user.birth_date" class="w-full p-2 border rounded">
          </div>
  
          <div class="mb-4">
            <label class="block font-semibold">Poids (kg):</label>
            <input type="number" v-model="user.weight" class="w-full p-2 border rounded">
          </div>
  
          <div class="mb-4">
            <label class="block font-semibold">Taille (m):</label>
            <input type="number" step="0.01" v-model="user.height" class="w-full p-2 border rounded">
          </div>
  
          <div class="mb-4">
            <label class="block font-semibold">Sexe:</label>
            <select v-model="user.gender" class="w-full p-2 border rounded">
              <option value="Masculin">Masculin</option>
              <option value="Féminin">Féminin</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label class="block font-semibold">Info complémentaire:</label>
            <textarea v-model="user.additional_infos" class="w-full p-2 border rounded"></textarea>
          </div>
  
          <div v-if="user.address" class="mt-4">
            <h3 class="text-xl font-semibold mb-2">Adresse</h3>
            <div class="mb-4">
              <label class="block font-semibold">Rue:</label>
              <input type="text" v-model="user.address.street" class="w-full p-2 border rounded mb-2">
              <input type="text" v-model="user.address.street_number" class="w-full p-2 border rounded">
            </div>
            <div class="mb-4">
              <label class="block font-semibold">Numéro:</label>
              <input type="text" v-model="user.address.appt_number" class="w-full p-2 border rounded">
            </div>
            <div class="mb-4">
              <label class="block font-semibold">Ville:</label>
              <input type="text" v-model="user.address.city" class="w-full p-2 border rounded">
            </div>
            <div class="mb-4">
              <label class="block font-semibold">Code postal:</label>
              <input type="text" v-model="user.address.zip_code" class="w-full p-2 border rounded">
            </div>
          </div>
  
  
          <button @click="saveChanges" class="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Sauvegarder les modifications</button>
        </div>
        <div v-else>
          <p>Chargement des informations..</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  export default {
    data() {
      return {
        user: null,
        route: useRoute(),
        request: "https://projet-healthlink-api.onrender.com/api/",
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get(this.request + "usereditview/" + this.route.params.UserId);
          this.user = response.data;
        } catch (error) {
          console.error("Erreur lors de la requête API :", error);
        }
      },
      async saveChanges() {
        try {
          await axios.put(`https://projet-healthlink-api.onrender.com/api/user/${this.user.id}`, this.user);
          alert('Modifications sauvegardées avec succès!');
        } catch (error) {
          console.error("Erreur lors de la sauvegarde des modifications :", error);
          alert('Une erreur est survenue lors de la sauvegarde des modifications.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
    .list-disc li {
      margin-bottom: 0.5rem;
    }
  </style>