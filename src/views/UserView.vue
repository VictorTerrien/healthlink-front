<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">User Details</h2>
      <div v-if="user">
        <p class="mb-2"><strong>Name:</strong> {{ user.lastname }} {{ user.firstname }}</p>
        <p class="mb-2"><strong>Birth Date:</strong> {{ user.birth_date }}</p>
        <p class="mb-2"><strong>Weight:</strong> {{ user.weight }} kg</p>
        <p class="mb-2"><strong>Height:</strong> {{ user.height }} cm</p>
        <p class="mb-2"><strong>Gender:</strong> {{ user.gender }}</p>
        <p class="mb-2"><strong>Additional Infos:</strong> {{ user.additional_infos }}</p>

        <div v-if="user.address" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Address</h3>
          <p class="mb-2"><strong>Street:</strong> {{ user.address.street }} {{ user.address.street_number }}</p>
          <p class="mb-2"><strong>Apartment Number:</strong> {{ user.address.appt_number }}</p>
          <p class="mb-2"><strong>City:</strong> {{ user.address.city }}</p>
          <p class="mb-2"><strong>Zip Code:</strong> {{ user.address.zip_code }}</p>
        </div>

        <div v-if="user.handicaps.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Handicaps</h3>
          <ul class="list-disc ml-6">
            <li v-for="handicap in user.handicaps" :key="handicap.id" class="mb-2">
              <p><strong>Name:</strong> {{ handicap.name }}</p>
              <p><strong>Temporary:</strong> {{ handicap.is_temporary ? 'Yes' : 'No' }}</p>
              <p><strong>Hereditary:</strong> {{ handicap.is_hereditary ? 'Yes' : 'No' }}</p>
              <p><strong>Physical:</strong> {{ handicap.is_physical ? 'Yes' : 'No' }}</p>
              <p><strong>Mental:</strong> {{ handicap.is_mental ? 'Yes' : 'No' }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.treatments.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Treatments</h3>
          <ul class="list-disc ml-6">
            <li v-for="treatment in user.treatments" :key="treatment.id" class="mb-2">
              <p><strong>Medication:</strong> {{ treatment.medication_name }}</p>
              <p><strong>Dosage:</strong> {{ treatment.dosage }}</p>
              <p><strong>Prescription Date:</strong> {{ treatment.prescription_date }}</p>
              <p><strong>Duration (Days):</strong> {{ treatment.duration_day }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.vaccinations.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Vaccinations</h3>
          <ul class="list-disc ml-6">
            <li v-for="vaccination in user.vaccinations" :key="vaccination.id" class="mb-2">
              <p><strong>Vaccine Name:</strong> {{ vaccination.vaccin_name }}</p>
              <p><strong>Date:</strong> {{ vaccination.date }}</p>
              <p><strong>Recall Date:</strong> {{ vaccination.recall_date }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.health_folder" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Health Folder</h3>
          <p><strong>Family Medical History:</strong> {{ user.health_folder.family_medical_history }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading user information...</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://projet-healthlink-api.onrender.com/api/user/1');
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