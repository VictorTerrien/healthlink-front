<template>
  <div class="mx-20 my-8" v-if="article">
    <div class="flex-1 flex flex-col mb-6">
      <p class="block text-2xl font-bold mb-6 uppercase">{{ article.title }}</p>
      <p class="text-xl text-gray-600 mb-4">{{ article.subtitle }}</p>
      <div class="flex flex-wrap mx-6">
        <p v-if="article.team" class="text-xs bg-gray-200 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">{{ article.team.name }}</p>
        <p v-if="article.organisation" class="text-xs bg-gray-200 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">{{ article.organisation.name }}</p>
        <p v-if="article.discipline" class="text-xs bg-gray-200 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">{{ article.discipline.name }}</p>
        <p v-if="article.competition" class="text-xs bg-gray-200 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">{{ article.competition.name }}</p>
        <p v-if="article.people" class="text-xs bg-gray-200 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">{{ article.people.lastname }}</p>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <img class="my-5 rounded-lg shadow-md mb-4 h-[600px] w-[1000px] object-cover" src="../assets/boudzozo.png" alt="Image de l'article">
      </div>
    </div>
    <div class="justify-center space-y-2 text-center">
      <div v-html="article.resume" class="text-lg text-gray-800 text-justify mb-8"></div>
      <p class="text-sm text-gray-600 text-right">Created the {{ article.created_date }} - Updated the {{ article.updated_date }}</p>
      <p class="text-sm text-gray-800 font-semibold text-right">Written by Viko</p>
    </div>
  </div>

</template>


<style scoped>
 .t {
   border: 1px solid red;
 }
</style>
<script lang="ts">
import { onMounted, ref } from "vue";
import { RequestHelper } from "@/helper/request";
import type { IArticle } from "@/interfaces";
import { useRoute } from "vue-router";

export default {
  setup() {
    const article = ref<IArticle>();
    const route = useRoute();

    const fetchArticle = async () => {
      RequestHelper<IArticle>("GET", "/articles/" + route.params.ArticleName)
          .then((response) => {
            console.log("Article fetched:", response.data);
            article.value = response.data;
          })
          .catch((error) => {
            console.error("Error fetching article:", error);
          });
    };

    onMounted(() => {
      fetchArticle();
    });

    return {
      article,
    };
  },
};
</script>