<template>
  <div class="container">
    <h1>TEST</h1>
    <div>
      <div v-if="article">
        <h2>Article</h2>
        <p>{{ article.title }}</p>
        <div v-html="article.resume"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { RequestHelper } from "@/helper/request";
import type { IArticle } from "@/interfaces";

export default {
  setup() {
    const article = ref<IArticle>();

    const fetchArticle = async () => {
      RequestHelper<IArticle>("GET", "/articles/48")
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
