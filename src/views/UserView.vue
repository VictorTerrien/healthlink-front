<template>
    <div>
        <p>{{ user.address.city }} {{ user.firstname }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      user: [],
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
}

</script>