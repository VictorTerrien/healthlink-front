<template>
  <div class="flex flex-col items-center h-screen">
    <div class="w-3/4 h-3/4">
        <qrcode-stream @decode="onDecode" @init="onInit" class="bg-black rounded-lg overflow-hidden">
        <template #no-camera>
            <p class="text-red-500 font-semibold">Camera non détectée. Assurez-vous que votre navigateur a accès à la caméra.</p>
        </template>
        </qrcode-stream>
    </div>
    <div v-if="result" class="mt-5 p-4 bg-white shadow-lg rounded-lg">
        <RouterLink :to="`/user/${result}`" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Accéder à l'utilisateur
        </RouterLink>
    </div>
  </div>
</template>
  
<script>
import { RouterLink } from 'vue-router';
import { QrcodeStream } from 'vue3-qrcode-reader';
  
export default {
    components: {
      QrcodeStream,
    },
    data() {
      return {
        result: null, 
      };
    },
    methods: {
      onDecode(decodedString) {
        this.result = decodedString;
      },
      onInit(promise) {
        promise.catch(error => {
          if (error.name === 'NotAllowedError') {
            alert('Accès à la caméra refusé !');
          } else {
            alert('Erreur d\'initialisation de la caméra.');
          }
        });
      },
    },
  };
</script>
  