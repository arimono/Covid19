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
            <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </Fieldset>
        </div>
        <div class="ClientPage">
          <Button
            type="submit"
            label="Next"
            class="p-button-raised p-button-text pagButton"
          />
        </div>
      </div>
    </form>
    <!-- form-end -->
  </div>
</template>

<script>
import BaseInput from '@/components/Baseinput.vue'
import Button from 'primevue/button'
import { db } from '@/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default {
  name: 'ClientForm',
  components: {
    BaseInput,
    Button: Button,
  },
  data() {
    return {
      clientForm: {
        prefixTitle: '',
        name: '',
        type: '',
        major: '',
        university: '',
        contactInfo: {
          phone: '',
          email: '',
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
      prefixTitles: [
        { value: 'Daw' },
        { value: 'U' },
        { value: 'Ma' },
        { value: 'Mg' },
      ],
      clientType: [
        { value: '2003 batch former student' },
        { value: '2004 batch former student' },
        { value: 'Teacher' },
      ],
      clientMajor: [
        { value: 'Civil' },
        { value: 'Mechanical' },
        { value: 'EC' },
        { value: 'EP' },
        { value: 'Architecture' },
        { value: 'Chemical' },
        { value: 'Textile' },
        { value: 'Petrol' },
        { value: 'Aero' },
        { value: 'Mining' },
        { value: 'Other' },
      ],
      clientUni: [{ value: 'PTU' }, { value: 'YTU' }],
      error: null,
      errorMsg: '',
    }
  },

  methods: {
    async onSubmit() {
      if (
        this.clientForm.prefixTitle !== '' &&
        this.clientForm.name !== '' &&
        this.clientForm.type !== '' &&
        this.clientForm.major !== '' &&
        this.clientForm.university !== '' &&
        this.clientForm.contactInfo.phone !== '' &&
        this.clientForm.contactInfo.email !== '' &&
        this.clientForm.contactInfo.address.addressLine_1 !== '' &&
        this.clientForm.contactInfo.address.addressLine_2 !== '' &&
        this.clientForm.contactInfo.address.city !== '' &&
        this.clientForm.contactInfo.address.stateProvince !== '' &&
        this.clientForm.contactInfo.address.country !== '' &&
        this.clientForm.contactInfo.address.postalCode !== ''
      ) {
        this.error = false
        this.errorMsg = ''

        try {
          const clientReg = await addDoc(collection(db, 'Clients'), {
            timeSubmitted: Timestamp.now(),
            prefixTitle: this.clientForm.prefixTitle,
            name: this.clientForm.name,
            type: this.clientForm.type,
            major: this.clientForm.major,
            university: this.clientForm.university,
            contactInfo: this.clientForm.contactInfo,
          })
          console.log('Document written with ID: ', clientReg.id)
        } catch (e) {
          console.error('Error adding document: ', e)
        }
        this.$router.push({ name: 'PatientsForm' })
        return
      }
      this.error = true
      this.errorMsg = 'Please fill all the fields. Thanks.'
      return
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/form.scss';
</style>
