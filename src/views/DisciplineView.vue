<script lang="ts">
import { onMounted, ref } from "vue";
import { RequestHelper } from "@/helper/request";
import type { IArticle, IDiscipline } from "@/interfaces";
import { useRoute } from "vue-router";

export default {
  setup() {
    const articlelist = ref<IArticle[]>();
    const disciplineinfo = ref<IDiscipline>();
    const $route = useRoute();
    const id_category = ref<Number>();
    const id_dicipline = ref<Number>();

    const discipline = ref($route.params.Discipline);

    if (discipline.value === "league-of-legends") {
      id_category.value = 1;
      id_dicipline.value = 1;
    } else {
      id_category.value = 0;
    }

    const fetchArticles = async () => {
      RequestHelper<IArticle[]>(
        "GET",
        "/articles?disciplineType=" + id_category.value
      )
        .then((response) => {
          console.log("Articles fetched:", response.data);
          articlelist.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
        });
    };

    const fetchDiscipline = async () => {
      RequestHelper<IDiscipline>(
        "GET",
        "/disciplines/" + id_dicipline.value
      )
        .then((response) => {
          console.log("Discipline fetched:", response.data);
          disciplineinfo.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching discipline:", error);
        });
    };

    onMounted(() => {
      fetchArticles();
      fetchDiscipline();
    });

    return {
      articlelist,
      disciplineinfo,
    };
  },
};
</script>

<template>
  <div>
    <h1>Discipline : {{ $route.params.Discipline }}</h1>
    <h1>Category : {{ $route.params.category }}</h1>
    <p v-if="disciplineinfo">Description : {{ disciplineinfo.description }}</p>
    <p v-else>Description :</p>
    <p>Image discipline</p>
  </div>
  <br />
  <hr />
  <br />
  <p>Article discipline</p>
  <div
    v-for="article in articlelist"
    :key="article.id"
    class="flex justify-center"
  >
    <RouterLink
      :to="`/articles/${article.id}`"
      class="flex flex md:max-w-5xl md:flex-row p-1 m-4 hover:scale-105"
    >
      <img
        class="h-[250px] w-[250px] object-cover rounded-lg"
        src="../assets/boudzozo.png"
        alt=""
      />
      <div class="flex flex-col justify-start p-3">
        <p class="font-bold mb-2 text-xl text-left">
          {{ article.title }}
        </p>
        <p class="mb-4 text-base text-justify">
          {{ article.subtitle }}
        </p>
        <p class="text-xs text-right text-surface/75 dark:text-neutral-300">
          Last updated: xx/xx/xx at xx:xx
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
