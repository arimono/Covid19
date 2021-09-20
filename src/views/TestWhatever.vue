<template>
  <div class="p-field p-col-12 p-md-8">
    <label>Name</label>
    <InputText v-model="first" placeholder="Name" />
  </div>
  <button @click="test"></button>
</template>
<script>
import { db } from "@/firebase"
import { collection, addDoc } from "firebase/firestore"
export default {
  data() {
    return {
      first: "",
    }
  },
  methods: {
    test() {
      try {
        const clientReg = addDoc(collection(db, "users"), {
          first: this.first,
        })
        console.log("Document written with ID: ", clientReg.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    },
  },
}
</script>
