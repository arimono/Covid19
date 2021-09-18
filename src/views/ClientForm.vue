<template>
  <div class="formContainer">
    <!-- form-start -->
    <form @submit.prevent="onSubmit">
      <div class="card">
        <div>
          <Fieldset>
            <template #legend> Client Form </template>
            <div class="p-fluid p-grid">
              <!-- Prefix -->
              <div class="p-field p-col-12 p-md-4">
                <label>Prefix</label>
                <Dropdown
                  v-model="clientForm.prefixTitle"
                  :options="prefixTitles"
                  optionLabel="value"
                  placeholder="Select Your Prefix"
                />
              </div>

              <!-- Name -->
              <div class="p-field p-col-12 p-md-8">
                <label>Name</label>
                <InputText v-model="clientForm.name" placeholder="Name" />
              </div>
              <!-- Phone -->
              <BaseInput
                v-model="clientForm.contactInfo.phone"
                label="Phone No."
              />
              <!-- Phone -->
              <BaseInput v-model="clientForm.contactInfo.email" label="Email" />
              <!-- Type -->
              <div class="p-field p-col-12 p-md-6">
                <label>Are you a former student or teacher?</label>
                <Dropdown
                  v-model="clientForm.type"
                  :options="clientType"
                  optionLabel="value"
                  placeholder="Teacher / Alumnus"
                />
              </div>

              <!-- major -->
              <div class="p-field p-col-12 p-md-6">
                <label>Your Major</label>
                <Dropdown
                  v-model="clientForm.major"
                  :options="clientMajor"
                  optionLabel="value"
                  placeholder="Choose your major"
                />
              </div>

              <!-- University -->
              <div class="p-field p-col-12 p-md-6">
                <label>Your University</label>
                <Dropdown
                  v-model="clientForm.university"
                  :options="clientUni"
                  optionLabel="value"
                  placeholder="Choose your university"
                />
              </div>
              <!-- address -->
              <BaseInput
                v-model="clientForm.contactInfo.address.addressLine_1"
                label="House No. and Road"
              />
              <BaseInput
                v-model="clientForm.contactInfo.address.addressLine_2"
                label="Ward and Township"
              />
              <BaseInput
                v-model="clientForm.contactInfo.address.city"
                label="City"
              />
              <BaseInput
                v-model="clientForm.contactInfo.address.stateProvince"
                label="State"
              />
              <BaseInput
                v-model="clientForm.contactInfo.address.country"
                label="Country"
              />
              <BaseInput
                v-model="clientForm.contactInfo.address.postalCode"
                label="Postal Code"
              />
              <!-- address end -->
              <!-- end -->
            </div>
          </Fieldset>
        </div>
        <div class="ClientPage">
          <!-- <router-link :to="{ name: 'PatientsForm' }" rel="next"> -->
          <Button
            type="submit"
            label="Next"
            class="p-button-raised p-button-text pagButton"
          />
          <!-- </router-link> -->
        </div>
      </div>
    </form>
    <!-- form-end -->
  </div>
  <!-- delete this when everything works well -->
  <pre>@{{ clientForm }}</pre>
</template>

<script>
import BaseInput from "@/components/Baseinput.vue"
import Button from "primevue/button"
import { v4 as uuidv4 } from "uuid"
import ClientFormSubmit from "@/Services/ClientFormSubmit.js"

export default {
  name: "ClientForm",
  components: {
    BaseInput,
    Button: Button,
  },
  data() {
    return {
      clientForm: {
        id: "",
        prefixTitle: "",
        name: "",

        type: "",
        major: "",
        university: "",
        contactInfo: {
          phone: "",
          email: "",
          address: {
            addressLine_1: "",
            addressLine_2: "",
            city: "",
            stateProvince: "",
            country: "",
            postalCode: "",
          },
        },
      },
      prefixTitles: [
        { value: "Daw" },
        { value: "U" },
        { value: "Ma" },
        { value: "Mg" },
      ],
      clientType: [
        { value: "2003 batch former student" },
        { value: "2004 batch former student" },
        { value: "Teacher" },
      ],
      clientMajor: [
        { value: "Civil" },
        { value: "Mechanical" },
        { value: "EC" },
        { value: "EP" },
        { value: "Architecture" },
        { value: "Chemical" },
        { value: "Textile" },
        { value: "Petrol" },
        { value: "Aero" },
        { value: "Mining" },
        { value: "Other" },
      ],
      clientUni: [{ value: "PTU" }, { value: "YTU" }],
    }
  },

  methods: {
    onSubmit() {
      this.clientForm.id = uuidv4()
      console.log("ClientData", this.clientForm)
      ClientFormSubmit.postEvent(this.clientForm)
        .then(() => {
          //vuex
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style lang="scss">
@import "../assets/layout/form.scss";
</style>
