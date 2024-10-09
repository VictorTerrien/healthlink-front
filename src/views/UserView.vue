<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Vos détails</h2>
      <div v-if="user">
        <p class="mb-2 flex justify-between items-center">
          <span v-if="!isEditing">
            <strong>Nom:</strong> {{ user.lastname }} {{ user.firstname }}
          </span>
          <input v-if="isEditing" v-model="editingValue" @blur="saveEdit" @keyup.enter="saveEdit" class="p-1 border rounded" />
          
          <button @click="toggleEdit" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' /> 
          </button>
        </p>
        <p class="mb-2 flex justify-between items-center">
          <span><strong>Date de naissance:</strong> {{ user.birth_date }}</span>
          <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
        </p>
        <p class="mb-2 flex justify-between items-center">
          <span><strong>Poids:</strong> {{ user.weight }} kg</span>
          <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
        </p>
        <p class="mb-2 flex justify-between items-center">
          <span><strong>Taille:</strong> {{ user.height }} m</span>
          <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
        </p>
        <p class="mb-2 flex justify-between items-center">
          <span><strong>Sexe:</strong> {{ user.gender }}</span>
          <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
        </p>
        <p class="mb-2 flex justify-between items-center">
          <span><strong>Info complémentaire:</strong> {{ user.additional_infos }}</span>
          <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
        </p>

        <div v-if="user.address" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Adresse</h3>
          <p class="mb-2 flex justify-between items-center">
            <span><strong>Rue:</strong> {{ user.address.street }} {{ user.address.street_number }}</span>
            <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
          </p>
          <p class="mb-2 flex justify-between items-center">
            <span><strong>Numéro:</strong> {{ user.address.appt_number }}</span>
            <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
          </p>
          <p class="mb-2 flex justify-between items-center">
            <span><strong>Ville:</strong> {{ user.address.city }}</span>
            <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
          </p>
          <p class="mb-2 flex justify-between items-center">
            <span><strong>Code postal:</strong> {{ user.address.zip_code }}</span>
            <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
          </p>
        </div>

        <div v-if="user.handicaps.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Handicaps</h3>
          <ul class="list-disc ml-6">
            <li v-for="handicap in user.handicaps" :key="handicap.id" class="mb-2">
              <div class="flex justify-between items-center">
                <p><strong>Nom:</strong> {{ handicap.name }}</p>
                <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
              </div>
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
            <li v-for="treatment in user.treatments" :key="treatment.id" class="mb-2">
              <div class="flex justify-between items-center">
                <p><strong>Médicament:</strong> {{ treatment.medication_name }}</p>
                <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
              </div>
              <p><strong>Dosage:</strong> {{ treatment.dosage }}</p>
              <p><strong>Date de prescription:</strong> {{ treatment.prescription_date }}</p>
              <p><strong>Durée (Jours):</strong> {{ treatment.duration_day }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.vaccinations.length" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Vaccins</h3>
          <ul class="list-disc ml-6">
            <li v-for="vaccination in user.vaccinations" :key="vaccination.id" class="mb-2">
              <div class="flex justify-between items-center">
                <p><strong>Nom du vaccin:</strong> {{ vaccination.vaccin_name }}</p>
                <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
              </div>
              <p><strong>Date:</strong> {{ vaccination.date }}</p>
              <p><strong>Date de rappel:</strong> {{ vaccination.recall_date }}</p>
            </li>
          </ul>
        </div>

        <div v-if="user.health_folder" class="mt-4">
          <h3 class="text-xl font-semibold mb-2">Dossier de santé</h3>
          <p class="mb-2 flex justify-between items-center">
            <span><strong>Antécédents familiaux:</strong> {{ user.health_folder.family_medical_history }}</span>
            <button @click="editField('$1')" class="bg-blue-500 p-2 rounded-full flex justify-center items-center hover:bg-blue-700" style="transform: translateX(-4px);">
            <img src='/src/assets/860814.png' alt='Edit' class='h-5 w-5' />
          </button>
          </p>
        </div>
      </div>
      <div v-else>
        <p>Chargement des informations..</p>
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
      isEditing: false,
      editingValue: '',
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
    toggleEdit() {
      if (!this.isEditing) {
        // Début de l'édition
        this.editingValue = `${this.user.lastname} ${this.user.firstname}`;
      }
      this.isEditing = !this.isEditing;
    },
    saveEdit() {
      if (this.isEditing) {
        // Vous pouvez implémenter ici la logique pour mettre à jour le nom et prénom de l'utilisateur
        const [lastname, firstname] = this.editingValue.split(' ');
        this.user.lastname = lastname;
        this.user.firstname = firstname;
      }
      this.isEditing = false;
    },
    editField(field, id = null) {
      // Ici, vous pouvez implémenter la logique pour modifier le champ.
      // Par exemple, ouvrir un modale avec un formulaire pour éditer la valeur du champ.
      console.log(`Modification du champ: ${field} ${id ? 'pour ID ' + id : ''}`);
    },
  },
};
</script>

<style scoped>
  .list-disc li {
    margin-bottom: 0.5rem;
  }
  .flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .items-center {
    align-items: center;
  }
</style>