<template>
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/feed"> Feed </router-link> |
    <router-link to="/register"> Register </router-link> |
    <router-link to="/sign-in"> Login </router-link> |
  </nav>
  <div :class="containerClass">
    <div class="layout-main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutMode: 'static',
      layoutColorMode: 'dark',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
    }
  },
  computed: {
    containerClass() {
      return ['layout-wrapper']
    },
  },
}
</script>

<style lang="scss">
@import './App.scss';
</style>
