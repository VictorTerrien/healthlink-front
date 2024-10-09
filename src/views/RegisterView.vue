<template>
    <div class="flex flex-col items-center min-h-screen bg-white">
        <h1 class="text-2xl font-bold mb-6">Créer votre compte</h1>
        <form class="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">NOM</label>
                <input required type="text" class="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Dupont">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">PRENOM</label>
                <input required type="text" class="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Jean">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">DATE DE NAISSANCE</label>
                <input required type="date" class="mt-1 p-2 border border-gray-300 rounded w-full">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">NUMERO SECURITE SOCIALE</label>
                <input required type="number" maxlength="13" pattern="\d{13}" class="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="x-xx-xx-xx-xxx-xxx">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">MOT DE PASSE</label>
                <input required type="password" class="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Entrez votre mot de passe">
            </div>
            <div class="flex items-center mb-4">
                <input required type="checkbox" class="mr-2">
                <label class="text-sm text-gray-600">Accepter les <RouterLink to="/conditions" class="text-blue-500 hover:underline">Conditions d'utilisation</RouterLink></label>
            </div>
            <button type="submit" @click="goToUser()" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Créer un compte</button>
        </form>
    </div>
</template>


<script>
export default {
    methods: {
        goToUser() {
            const form = this.$refs.userForm;
            if (form.checkValidity()) {
                this.$router.push('/user');
            } else {
                form.reportValidity();
            }
        }
    }
};

</script>