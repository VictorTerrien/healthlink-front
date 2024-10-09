<template>
  <div>
    <div class="w-full justify-center">
      <Carousel
        :value="articlelist"
        :numVisible="3"
        :numScroll="1"
        circular
        :responsive-options="responsiveOptions"
      >
        <template #item="slotProps">
          <RouterLink :to="`/articles/${slotProps.data.id}`" class="flex hover:scale-105">
            <div class="m-8">
              <img
                class="h-[400px] w-[600px] object-cover rounded-lg"
                src="../assets/boudzozo.png"
                alt="test"
              />
              <div>
                <div class="font-bold mb-4 text-xl text-left">
                  {{ slotProps.data.title }}
                </div>
                <p
                  class="text-xs text-right text-surface/75 dark:text-neutral-300"
                >
                  Last updated: {{ slotProps.data.updated_date }}
                </p>
              </div>
            </div>
          </RouterLink>
        </template>
      </Carousel>
    </div>
    <hr />
    <br />
    <div
      v-for="article in articlelist" :key="article.id" class="flex ml-20">
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
            Last updated: {{ article.updated_date }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { RequestHelper } from "@/helper/request";
import type { IArticle } from "@/interfaces";

export default {
  setup() {
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const articlelist = ref<IArticle[]>();

    const fetchArticles = async () => {
      RequestHelper<IArticle[]>("GET", "/articles")
          .then((response) => {
            console.log("Articles fetched:", response.data);
            articlelist.value = response.data;
          })
          .catch((error) => {
            console.error("Error fetching article:", error);
          });
    };

    onMounted(() => {
      fetchArticles();
    });

return {
  responsiveOptions,
  articlelist,
};
  }
};
</script>

<style scoped>
* {
  background-color: #f7f7f7;
}
</style>
