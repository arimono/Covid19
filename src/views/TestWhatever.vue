<template>
  <div class="formContainer">
    <div class="card">
      <h5 class="p-text-center">Register</h5>
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="p-fluid p-grid">
          <div
            class="p-field p-col-12 p-md-6"
            v-for="(value, name) in clientForm.contactInfo.address"
            :key="name"
          >
            <BaseInput
              label="House No. and Road"
              v-model="v$.clientForm.contactInfo.address.addressLine_1.$model"
              :class="{
                'p-invalid':
                  v$.clientForm.contactInfo.address.addressLine_1.$invalid &&
                  submitted,
              }"
            />

            <small
              v-if="
                (v$.clientForm.contactInfo.address.addressLine_1.$invalid &&
                  submitted) ||
                v$.clientForm.contactInfo.address.addressLine_1.$pending
                  .$response
              "
              class="p-error"
              >{{
                v$.clientForm.contactInfo.address.addressLine_1.required.$message.replace(
                  'Value',
                  'Name'
                )
              }}</small
            >
          </div>
        </div>
        <Button type="submit" label="Submit" class="p-mt-2" />
      </form>
    </div>
  </div>
</template>

<script>
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import BaseInput from '@/components/Baseinput.vue'
export default {
  setup: () => ({ v$: useVuelidate() }),
  components: {
    BaseInput,
  },
  data() {
    return {
      clientForm: {
        contactInfo: {
          address: {
            addressLine_1: '',
            addressLine_2: '',
            city: '',
            stateProvince: '',
            country: '',
            postalCode: '',
          },
        },
      },
      submitted: false,
    }
  },
  validations() {
    return {
      clientForm: {
        contactInfo: {
          address: {
            addressLine_1: { required },
            addressLine_2: { required },
            city: { required },
            stateProvince: { required },
            country: { required },
            postalCode: { required },
          },
        },
      },
    }
  },

  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true

      if (!isFormValid) {
        return
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/layout/form.scss';
</style>
