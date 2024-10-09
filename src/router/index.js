import { createRouter, createWebHistory } from "vue-router";
import { createAuthGuard } from "@auth0/auth0-vue";

import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import SingleArticleView from '@/views/SingleArticleView.vue'
import ErrorPageView from '@/views/ErrorPageView.vue'
import DisciplineView from "@/views/DisciplineView.vue";
import ProfilView from '@/views/ProfilView.vue'
import CompetitionView from "@/views/CompetitionView.vue";
import TeamView from "@/views/TeamView.vue";
import PlayerView from "@/views/PlayerView.vue";
import SingleCompetitionView from "@/views/SingleCompetitionView.vue";
import SingleTeamView from "@/views/SingleTeamView.vue";
import SinglePlayerView from "@/views/SinglePlayerView.vue";
import TestView from "@/views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles/:ArticleName',
      name: 'SingleArticle',
      component: SingleArticleView
    },
    {
      path: '/:category(e-sports|sports)',
      name: 'Category',
      component: CategoryView
    },
    {
      path: '/:category(e-sports)/:Discipline(league-of-legends|valorant|rocket-league|counter-strike-go|super-smash-bros|autres)',
      name: 'eSportsArticle',
      component: DisciplineView
    },
    {
      path: '/:category(sports)/:Discipline(football|rugby|cyclisme|basketball|tennis|autres)',
      name: 'SportsArticle',
      component: DisciplineView
    },
    {
      path: '/competitions',
      name: 'Competitions',
      component: CompetitionView
    },
    {
      path: '/competitions/:CompetitionName',
      name: 'SingleCompetition',
      component: SingleCompetitionView
    },
    {
      path: '/teams',
      name: 'Team',
      component: TeamView
    },
    {
      path: '/teams/:TeamName',
      name: 'SingleTeam',
      component: SingleTeamView
    },
    {
      path: '/players',
      name: 'Players',
      component: PlayerView
    },
    {
      path: '/players/:PlayerName',
      name: 'SinglePlayer',
      component: SinglePlayerView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ErrorPageView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilView,
      beforeEnter: createAuthGuard()
    },
    {
      path: '/test',
      name: 'Test',
      component: TestView
    }
  ]
})

export default router