<template>
  <Menubar :model="items">
    <template #start>
      <router-link class="logo" to="/">YTU</router-link>
    </template>
  </Menubar>
  <div :class="containerClass">
    <div class="layout-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
export default {
  data() {
    return {
      layoutMode: 'static',
      layoutColorMode: 'dark',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      items: [
        {
          label: 'Patient Registration',
          to: '/ClientForm',
        },

        {
          label: 'Clinic Staff',

          items: [
            {
              label: 'Patient Data',
              to: { name: 'ClinicDashboard' },
            },
            {
              label: 'Doctor Data',
              to: { name: 'Doctor' },
            },
          ],
        },
        {
          label: 'Home',
          to: '/',
        },
      ],
    }
  },
  computed: {
    containerClass() {
      return ['layout-wrapper']
    },
  },
  components: {
    Menubar: Menubar,
  },
}
</script>

<style lang="scss">
@import './assets/layout/App.scss';
</style>
