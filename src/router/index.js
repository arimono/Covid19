import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"

const routes = [
  {
    path: "/",
    name: "Home",
    alias: "/patient-registration",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    redirect: "/",
    alias: "/index",
  },
  {
    path: "/ClientForm",
    name: "ClientForm",
    alias: "/clientform",
    component: () => import("../views/ClientForm.vue"),
  },
  {
    path: "/PatientsForm",
    name: "PatientsForm",
    alias: "/patientform",
    component: () => import("../views/PatientsForm.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: import("../views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
