<script setup>

</script>

<template>
  <p>nom COMPETITION</p>
  <p>description COMPETITION</p>
  <p>image COMPETITION</p>
  <p>date start COMPETITION</p>
  <p>date end COMPETITION</p>
  <p>discipline COMPETITION</p>
  <p>image region COMPETITION</p>
  <p>if team winner COMPETITION</p>
  <p>LIST EQUIPE PARTICIPANTE</p>
  <p>Article competition</p>
  <div v-for="pedro in 10" :key="pedro" class="flex justify-center">
    <RouterLink to="/articles/test" class="flex flex md:max-w-5xl md:flex-row p-1 m-4 hover:scale-105">
      <img class="h-full w-[200px] object-cover" src="../assets/boudzozo.png" alt="" />
      <div class="flex flex-col justify-start p-3">
        <p class="font-bold mb-2 text-xl text-left">Dominic Thiem éliminé dès le 2e tour des qualifications pour sa dernière à Roland-Garros {{ pedro }}</p>
        <p class="mb-4 text-base text-justify">
          Dominic Thiem, double finaliste de Roland-Garros, a quitté le tournoi ce mercredi, dès le 2e tour des qualifications, après sa défaite contre le Finlandais Otto Virtanen. L'Autrichien ne participera une onzième et dernière fois au tableau final avant de prendre sa retraite sportive en fin de saison.
        </p>
        <p class="text-xs text-right text-surface/75 dark:text-neutral-300">
          Last updated: xx/xx/xx at xx:xx
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>