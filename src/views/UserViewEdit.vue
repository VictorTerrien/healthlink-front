<template>
    <div class="bg-white min-h-screen">
      <div class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Modifier vos détails</h2>
        <div v-if="user">
          <div class="mb-4">
            <label class="block font-semibold">Nom:</label>
            <input type="text" v-model="user.lastname" class="w-full p-2 border rounded mb-2">
          </div>

          <div class="mb-4">
            <label class="block font-semibold">Prénom:</label>
            <input type="text" v-model="user.firstname" class="w-full p-2 border rounded">
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
              <option value="M">Homme</option>
              <option value="F">Femme</option>
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
            </div>
            <div class="mb-4">
              <label class="block font-semibold">Numéro rue:</label>
              <input type="text" v-model="user.address.street_number" class="w-full p-2 border rounded">
            </div>
            <div class="mb-4">
              <label class="block font-semibold">Numéro Appartement:</label>
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
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';

  interface User {
    id: number; 
    lastname: string;
    firstname: string;
    address: {
      street: string;
      street_number: number; 
      city: string;
      zip_code: number;
      appt_number: number;
    };
    height: number;
    weight: number;
    gender: string;
    additional_infos: string;
  }

  export default defineComponent({
    data() {
      return {
        user: null as User | null,
        request: "https://projet-healthlink-api.onrender.com/api/",
      };
    },
    computed: {
      userToUpdate(): User | null { 
        if (!this.user) {
          return null;
        }
        return {
          id: this.user.id,
          lastname: this.user.lastname,
          firstname: this.user.firstname,
          address: {
            street: this.user.address.street,
            street_number: this.user.address.street_number,
            city: this.user.address.city,
            zip_code: this.user.address.zip_code,
            appt_number: this.user.address.appt_number,
          },
          height: this.user.height,
          weight: this.user.weight,
          gender: this.user.gender,
          additional_infos: this.user.additional_infos,
        };
      },
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const route = useRoute(); 
        try {
          const response = await axios.get(`${this.request}user/${route.params.UserEditView}`);
          this.user = response.data;
        } catch (error) {
          console.error("Erreur lors de la requête API :", error);
        }
      },
      async saveChanges() {
        if (this.user) {
          try {
            await axios.put(`${this.request}user/${this.user.id}`, this.userToUpdate);
            alert('Modifications sauvegardées avec succès!');

            this.$router.push({ name: "User", params: { UserHealthLink: this.user.healthlink_number } });
          } catch (error) {
            console.error("Erreur lors de la sauvegarde des modifications :", error);
            alert('Une erreur est survenue lors de la sauvegarde des modifications. Veuillez réessayer plus tard.');
          }
        } else {
          alert('Aucun utilisateur à sauvegarder.');
        }
      }
    },
  });
</script>

