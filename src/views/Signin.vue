<template>
  <div>
    <label for="password">Password</label>
    <Password id="password" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      value: null,
    }
  },
  methods: {},
}
</script>
