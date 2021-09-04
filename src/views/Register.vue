<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6">
      <div class="card p-fluid">
        <h5>Create an Account</h5>
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" v-model.trim="registerForm.email" />
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <Password id="password" v-model="registerForm.password" toggleMask />
        </div>
        <Button label="Submit" @click="registerUser" />
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    registerUser() {
      createUserWithEmailAndPassword(
        auth,
        this.registerForm.email,
        this.registerForm.password
      )
        .then((userCredential) => {
          console.log('Successfully registered!' + userCredential.user)
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
        })
    },
  },
}
</script>

<style></style>
