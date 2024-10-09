<template>
  <div>
    <div>
      <h2>User Profile</h2>
      <button @click="logout">Log out</button>
      <pre v-if="isAuthenticated"></pre>
    </div>

    <div class="p-4 container flex items-center justify-center min-h-screen">
      <div
        class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-row">
          <div class="p-4">
            <h2>Liste des Articles</h2>
            <Form @submit.prevent="createArticle">
              <div class="flex flex-col">
                <label for="FormTitle">Nom de l'article</label>
                <InputText id="FormTitle" v-model="FormTitle" />
              </div>
              <div class="flex flex-col">
                <label for="FormTitle">Sous titre de l'article</label>
                <InputText id="FormSubTitle" v-model="FormSubTitle" />
              </div>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="FormSelectedImportance"
                  :options="FormImportance"
                  optionLabel="name"
                  placeholder="Niveau d'importance"
                  class="w-full md:w-14rem"
                />
              </div>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="FormSelectedOrganization"
                  :options="FormOrganization"
                  optionLabel="name"
                  placeholder="Organisation"
                  class="w-full md:w-14rem"
                />
              </div>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="FormSelectedTeam"
                  :options="FormTeam"
                  optionLabel="name"
                  placeholder="Equipe"
                  class="w-full md:w-14rem"
                />
              </div>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="FormSelectedDiscipline"
                  :options="FormDiscipline"
                  optionLabel="name"
                  placeholder="Discipline"
                  class="w-full md:w-14rem"
                />
              </div>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="FormSelectedCompetition"
                  :options="FormCompetition"
                  optionLabel="name"
                  placeholder="Competition"
                  class="w-full md:w-14rem"
                />
              </div>
              <div>
                <Editor v-model="FormResume" editorStyle="height: 320px" />
              </div>
              <Button type="submit" label="Créer" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, ref } from "vue";
import { RequestHelper } from "@/helper/request";
import type {
  IArticle,
  ICompetition,
  IDiscipline,
  IOrganisation,
  ITeam,
} from "@/interfaces";

export default {
  setup() {
    // #region Variables
    const { logout, user, isAuthenticated } = useAuth0();
    const articles = ref<IArticle[]>([]);
    const title = ref("");
    const subtitle = ref("");
    const resume = ref("");
    const loading = ref(true);

    const FormTitle = ref("");
    const FormSubTitle = ref("");
    const FormResume = ref("");
    const FormSelectedImportance = ref();
    const FormImportance = [
      { name: "Normal", code: 1 },
      { name: "Urgent", code: 2 },
    ];
    const FormSelectedOrganization = ref(<IOrganisation>{});
    const FormOrganization = ref<IOrganisation[]>([]);
    const FormSelectedTeam = ref(<ITeam>{});
    const FormTeam = ref<ITeam[]>([]);
    const FormSelectedDiscipline = ref(<IDiscipline>{});
    const FormDiscipline = ref<IDiscipline[]>([]);
    const FormSelectedCompetition = ref(<ICompetition>{});
    const FormCompetition = ref<ICompetition[]>([]);

    // #endregion

    // #region Methods

    const fetchArticles = () => {
      RequestHelper<IArticle[]>("GET", "/articles")
        .then((response) => {
          console.log("Articles fetched:", response.data);
          articles.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const fetchOrganizations = () => {
      RequestHelper<IOrganisation[]>("GET", "/organisations")
        .then((response) => {
          console.log("Organizations fetched:", response.data);
          FormOrganization.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching organizations:", error);
        });
    };

    const fetchTeams = () => {
      RequestHelper<ITeam[]>("GET", "/team")
        .then((response) => {
          console.log("Teams fetched:", response.data);
          FormTeam.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching teams:", error);
        });
    };

    const fetchDisciplines = () => {
      RequestHelper<IDiscipline[]>("GET", "/disciplines")
        .then((response) => {
          console.log("Disciplines fetched:", response.data);
          FormDiscipline.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching disciplines:", error);
        });
    };

    const fetchCompetitions = () => {
      RequestHelper<ICompetition[]>("GET", "/competiton")
        .then((response) => {
          console.log("Competitions fetched:", response.data);
          FormCompetition.value = response.data;
        })
        .catch((error) => {
          console.error("Error fetching competitions:", error);
        });
    };

    const fetchFormDataDropdown = () => {
      fetchOrganizations();
      fetchTeams();
      fetchDisciplines();
      fetchCompetitions();
    };

    const createArticle = () => {
      const FormBody = {
        title: FormTitle.value,
        subtitle: FormSubTitle.value,
        resume: FormResume.value,
        importance: FormSelectedImportance.value.code,
        organisation: FormSelectedOrganization.value.id,
        team: FormSelectedTeam.value.id,
        discipline: FormSelectedDiscipline.value.id,
        competition: FormSelectedCompetition.value.id,
      };

      RequestHelper<IArticle>("POST", "/articles", FormBody)
        .then((response) => {
          console.log("Article created:", response.data);
          fetchArticles();
        })
        .catch((error) => {
          console.error("Error creating article:", error);
        });
    };

    // #endregion

    onMounted(() => {
      fetchFormDataDropdown();
    });

    return {
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
      createArticle,
      user,
      isAuthenticated,
      articles,
      title,
      subtitle,
      resume,
      loading,
      FormTitle,
      FormSubTitle,
      FormResume,
      FormSelectedImportance,
      FormImportance,
      FormSelectedOrganization,
      FormOrganization,
      FormSelectedTeam,
      FormTeam,
      FormSelectedDiscipline,
      FormDiscipline,
      FormSelectedCompetition,
      FormCompetition,
    };
  },
};
</script>
