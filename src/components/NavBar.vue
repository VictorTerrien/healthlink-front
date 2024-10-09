<template>
  <div>
    <nav class="fixed w-full">
      <div class="flex items-center justify-between header-all">
        <!-- Header logo -->
        <div>
          <RouterLink to="/">
            <img
              src="/src/assets/logo-vikosmos.png"
              alt="logo"
              style="height: 100px; width: auto"
            />
          </RouterLink>
        </div>

        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg
              class="h-8 w-8 fill-current text-black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Header Menu -->
        <div class="hidden md:flex flex-1 justify-center">
          <ul class="flex space-x-8 text-sm font-sans">
            <li class="btnhome">
              <RouterLink to="/" class="hover:text-blue-500"
                >ACCUEIL</RouterLink
              >
            </li>
            <div class="dropdown">
              <div
                class="dropbtn border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                <RouterLink to="/sports">SPORTS</RouterLink>
              </div>
              <div class="dropdown-content">
                <div class="header">
                  <h2 class="text-blue-500">Les disciplines sportives</h2>
                </div>
                <ul class="dropdown-content-ul">
                  <li>
                    <RouterLink
                      to="/sports/basketball"
                      class="hover:text-blue-500"
                      >Basketball</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/sports/rugby" class="hover:text-blue-500"
                      >Rugby</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/sports/cyclisme"
                      class="hover:text-blue-500"
                      >Cyclisme</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/sports/football"
                      class="hover:text-blue-500"
                      >Football</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/sports/tennis" class="hover:text-blue-500"
                      >Tennis</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/sports/autres" class="hover:text-blue-500"
                      >Autres</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="dropdown">
              <div
                class="dropbtn border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                <RouterLink to="/e-sports"> ESPORTS </RouterLink>
              </div>
              <div class="dropdown-content">
                <div class="header">
                  <h2 class="text-blue-500">Les disciplines esportives</h2>
                </div>
                <ul class="dropdown-content-ul">
                  <li>
                    <RouterLink
                      to="/e-sports/league-of-legends"
                      class="hover:text-blue-500"
                      >League of legends</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/e-sports/valorant"
                      class="hover:text-blue-500"
                      >Valorant</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/e-sports/rocket-league"
                      class="hover:text-blue-500"
                      >Rocket League</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/e-sports/counter-strike-go"
                      class="hover:text-blue-500"
                      >Counter Strike : Global Offensive</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/e-sports/super-smash-bros"
                      class="hover:text-blue-500"
                      >Super Smash Bros Ultimate</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/e-sports/autres"
                      class="hover:text-blue-500"
                      >Autres</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="dropdown">
              <div
                class="dropbtn border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                . . .
              </div>
              <div class="dropdown-content">
                <div class="header flex justify-center text-center text-2xl">
                  <div class="w-1/3">
                    <div class="p-12">
                      <RouterLink
                        to="/competitions"
                        class="hover:text-blue-500"
                      >
                        Compétitions
                      </RouterLink>
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class="p-12">
                      <RouterLink to="/teams" class="hover:text-blue-500">
                        Equipes
                      </RouterLink>
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class="p-12">
                      <RouterLink to="/players" class="hover:text-blue-500">
                        Joueurs
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <!-- Header Actions -->
        <div class="md:block hidden mx-5">
          <div v-if="!isAuthenticated">
            <button
              @click="login"
              class="cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
            >
              Login
            </button>
          </div>
          <div v-else>
            <div v-if="isAuthenticated">
              <div
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
              >
                <RouterLink
                  to="/profile"
                  class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                  type="button"
                >
                  <img
                    v-if="user.picture"
                    :src="user.picture"
                    class="w-10 h-10 rounded-full mr-2"
                    alt="Profile"
                  />
                  {{ user.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b"
          >
            <div>Tailwind</div>
          </span>

          <ul class="divide-y font-sans">
            <li>
              <RouterLink
                to="/"
                @click="isOpen = false"
                class="my-4 inline-block"
                >Home</RouterLink
              >
            </li>
            <li v-show="isAdmin">
              <RouterLink
                to="/admin"
                @click="isOpen = false"
                class="my-4 inline-block"
                >Admin</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/login"
                @click="isOpen = false"
                class="w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
              >
                Login</RouterLink
              >
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { User, useAuth0 } from "@auth0/auth0-vue";

const isOpen = ref(false);
const currentPage = ref("");
const isAdmin = ref(true);
const route = useRoute();
const router = useRouter();
const auth0 = useAuth0();

const isAuthenticated = auth0.isAuthenticated;
const user = auth0.user;

const login = () => {
  auth0.loginWithRedirect();
};

const logout = () => {
  auth0.logout();
};

const drawer = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (isOpen.value && e.key === "Escape") isOpen.value = false;
  });

  currentPage.value = route.path;
  router.afterEach((to) => {
    currentPage.value = to.path;
  });
});

watchEffect(() => {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.header-all {
  background-color: white;
}

.test {
  height: 1rem;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropbtn,
.btnhome {
  padding: 3rem;
}

.dropdown-content {
  margin-top: -1px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .header {
  background: lightgrey;
  padding: 16px;
  color: white;
}

.dropdown-content-ul {
  padding: 0.5rem 2rem;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
LogoutOptions, : any: (arg0: { /* __placeholder__ */ returnTo: /*
__placeholder__ */ string; }) => LogoutOptions(: any)(: any)(: any)
