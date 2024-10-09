<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Vos détails</h2>
      <div v-if="user">
        <p class="mb-2"><strong>Nom:</strong> {{ user.lastname }} {{ user.firstname }}</p>
        <p class="mb-2"><strong>Date de naissance:</strong> {{ user.birth_date }}</p>
        <p class="mb-2"><strong>Poids:</strong> {{ user.weight }} kg</p>
        <p class="mb-2"><strong>Taille:</strong> {{ user.height }} m</p>
        <p class="mb-2"><strong>Sexe:</strong> {{ user.gender }}</p>
        <p class="mb-2"><strong>Info complémentaire:</strong> {{ user.additional_infos }}</p>

        <div v-if="user.address" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Adresse</h3>
          <p class="mb-2"><strong>Rue:</strong> {{ user.address.street }} {{ user.address.street_number }}</p>
          <p class="mb-2"><strong>Numéro:</strong> {{ user.address.appt_number }}</p>
          <p class="mb-2"><strong>Ville:</strong> {{ user.address.city }}</p>
          <p class="mb-2"><strong>Code postal:</strong> {{ user.address.zip_code }}</p>
        </div>

        <div v-if="user.handicaps.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Handicaps</h3>
          <ul class="list-disc ml-6">
            <li v-for="handicap in user.handicaps" :key="handicap.id" class="mb-2 list-none">
              <p><strong>Nom:</strong> {{ handicap.name }}</p>
              <p><strong>Temporaire:</strong> {{ handicap.is_temporary ? 'Oui' : 'Non' }}</p>
              <p><strong>Hereditaire:</strong> {{ handicap.is_hereditary ? 'Oui' : 'Non' }}</p>
              <p><strong>Physique:</strong> {{ handicap.is_physical ? 'Oui' : 'Non' }}</p>
              <p><strong>Mental:</strong> {{ handicap.is_mental ? 'Oui' : 'Non' }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.treatments.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Traitements</h3>
          <ul class="list-disc ml-6">
            <li v-for="treatment in user.treatments" :key="treatment.id" class="mb-2 list-none">
              <p><strong>Médicament:</strong> {{ treatment.medication_name }}</p>
              <p><strong>Dosage:</strong> {{ treatment.dosage }}</p>
              <p><strong>Date de prescription:</strong> {{ treatment.prescription_date }}</p>
              <p><strong>Durée (Jours):</strong> {{ treatment.duration_day }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.vaccinations.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Vaccins</h3>
          <ul class="list-disc ml-6">
            <li v-for="vaccination in user.vaccinations" :key="vaccination.id" class="mb-2 list-none">
              <p><strong>Nom du vaccin:</strong> {{ vaccination.vaccin_name }}</p>
              <p><strong>Date:</strong> {{ vaccination.date }}</p>
              <p><strong>Date de rappel:</strong> {{ vaccination.recall_date }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.health_folder" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Dossier de santé</h3>
          <p><strong>antécédents familiaux:</strong> {{ user.health_folder.family_medical_history }}</p>
        </div>
      </div>
      <div v-else class="mt-4">
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
        const response = await axios.get(this.request + "user/" + this.route.params.UserHealthLink);
        this.user = response.data;
      } catch (error) {
        console.error("Erreur lors de la requête API :", error);
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