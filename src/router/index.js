import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/patient-registration',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home',
    redirect: '/',
    alias: '/index',
  },
  {
    path: '/ClientForm',
    name: 'ClientForm',
    alias: '/clientform',
    component: () => import('../views/ClientForm.vue'),
  },
  {
    path: '/Doctor',
    name: 'Doctor',
    alias: '/Doctor-edit',
    component: () => import('../views/Doctor.vue'),
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('../views/TestWhatever.vue'),
  },
  {
    path: '/PatientsForm',
    name: 'PatientsForm',
    alias: '/patientform',
    component: () => import('../views/PatientsForm.vue'),
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/sign-in',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/clinicDashboard',
    name: 'ClinicDashboard',
    alias: '/Clinic-Dashboard',
    component: () => import('../views/ClinicDashboard.vue'),
  },
  {
    path: '/doctorDashboard',
    name: 'DoctorDashboard',
    alias: '/Doctor-Dashboard',
    component: () => import('../views/DoctorDashboard.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: import('../views/NotFound.vue'),
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
