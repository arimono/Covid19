<template>
  <h1>Opps!</h1>
  <h3>
    I guess your network fail.
    <a href="#" @click="$router.go(-1)">Click here</a> to try again.
  </h3>
  <router-link :to="{ name: 'Home' }">Back to home page</router-link>
</template>
