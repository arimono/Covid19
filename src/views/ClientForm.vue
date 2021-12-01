<template>
  <div class="formContainer">
    <!-- form-start -->
<<<<<<< HEAD
    <form @submit.prevent="onSubmit(!v$.$invalid)">
=======
    <form @submit.prevent="onSubmit">
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
      <div class="card">
        <div>
          <Fieldset>
            <template #legend> Client Form </template>
<<<<<<< HEAD
            <!-- <h3 style="text-align: center">Please fill every* field</h3> -->
            <div class="p-fluid p-grid">
              <!-- Prefix -->
              <div class="p-field p-col-12 p-md-4">
                <label>Prefix*</label>
                <Dropdown
                  v-model="v$.clientForm.prefixTitle.$model"
                  :options="prefixTitles"
                  optionLabel="value"
                  placeholder="Select Your Prefix"
                  :class="{
                    'p-invalid':
                      v$.clientForm.prefixTitle.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.clientForm.prefixTitle.$invalid && submitted) ||
                    v$.clientForm.prefixTitle.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.prefixTitle.required.$message.replace(
                      'Value is required',
                      'Select the prefix'
                    )
                  }}</small
                >
=======
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
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
              </div>

              <!-- Name -->
              <div class="p-field p-col-12 p-md-8">
<<<<<<< HEAD
                <label>Name*</label>
                <InputText
                  v-model="v$.clientForm.name.$model"
                  placeholder="Name"
                  :class="{
                    'p-invalid': v$.clientForm.name.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.clientForm.name.$invalid && submitted) ||
                    v$.clientForm.name.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.name.required.$message.replace(
                      'Value',
                      'Name'
                    )
                  }}</small
                >
              </div>
              <!-- Phone -->
              <div class="p-field p-col-12 p-md-6">
                <label>Phone*</label>
                <InputText
                  placeholder="09xxxxxx"
                  type="number"
                  v-model.number="v$.clientForm.contactInfo.phone.$model"
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.phone.$invalid && submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.phone.$invalid && submitted) ||
                    v$.clientForm.contactInfo.phone.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.phone.required.$message.replace(
                      'Value',
                      'Valid Phone Number'
                    )
                  }}</small
                >
              </div>

              <!-- Email -->
              <div class="p-field p-col-12 p-md-6">
                <label>Email*</label>
                <InputText
                  placeholder="Email"
                  id="email"
                  v-model="v$.clientForm.contactInfo.email.$model"
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.email.$invalid && submitted,
                  }"
                />

                <span
                  v-if="v$.clientForm.contactInfo.email.$error && submitted"
                >
                  <span
                    v-for="(error, index) of v$.clientForm.contactInfo.email
                      .$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.clientForm.contactInfo.email.$invalid && submitted) ||
                    v$.clientForm.contactInfo.email.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.email.required.$message.replace(
                      'Value',
                      'Email'
                    )
                  }}</small
                >
              </div>

              <!-- Type -->
              <div class="p-field p-col-12 p-md-6">
                <label>Are you a former student or teacher?*</label>
                <Dropdown
                  v-model="v$.clientForm.type.$model"
                  :options="clientType"
                  optionLabel="value"
                  placeholder="Teacher / Alumnus"
                  :class="{
                    'p-invalid': v$.clientForm.type.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.clientForm.type.$invalid && submitted) ||
                    v$.clientForm.type.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.type.required.$message.replace(
                      'Value',
                      'Type'
                    )
                  }}</small
                >
=======
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
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
              </div>

              <!-- major -->
              <div class="p-field p-col-12 p-md-6">
<<<<<<< HEAD
                <label>Your Major*</label>
                <Dropdown
                  v-model="v$.clientForm.major.$model"
                  :options="clientMajor"
                  optionLabel="value"
                  placeholder="Choose your major"
                  :class="{
                    'p-invalid': v$.clientForm.major.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.clientForm.major.$invalid && submitted) ||
                    v$.clientForm.major.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.major.required.$message.replace(
                      'Value',
                      'Major'
                    )
                  }}</small
                >
=======
                <label>Your Major</label>
                <Dropdown
                  v-model="clientForm.major"
                  :options="clientMajor"
                  optionLabel="value"
                  placeholder="Choose your major"
                />
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
              </div>

              <!-- University -->
              <div class="p-field p-col-12 p-md-6">
<<<<<<< HEAD
                <label>Your University*</label>
                <Dropdown
                  v-model="v$.clientForm.university.$model"
                  :options="clientUni"
                  optionLabel="value"
                  placeholder="Choose your university"
                  :class="{
                    'p-invalid': v$.clientForm.university.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.clientForm.university.$invalid && submitted) ||
                    v$.clientForm.university.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.university.required.$message.replace(
                      'Value',
                      'University'
                    )
                  }}</small
                >
              </div>
              <!-- address -->
              <div class="p-field p-col-12 p-md-6">
                <label>House No. and Road*</label>
                <InputText
                  placeholder="House No. and Road"
                  v-model="
                    v$.clientForm.contactInfo.address.addressLine_1.$model
                  "
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.addressLine_1
                        .$invalid && submitted,
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
                      'House No. and Road'
                    )
                  }}</small
                >
              </div>
              <div class="p-field p-col-12 p-md-6">
                <label>Ward and Township*</label>
                <InputText
                  placeholder="Ward and Township"
                  v-model="
                    v$.clientForm.contactInfo.address.addressLine_2.$model
                  "
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.addressLine_2
                        .$invalid && submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.address.addressLine_2.$invalid &&
                      submitted) ||
                    v$.clientForm.contactInfo.address.addressLine_2.$pending
                      .$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.address.addressLine_2.required.$message.replace(
                      'Value',
                      'Ward and Township'
                    )
                  }}</small
                >
              </div>
              <div class="p-field p-col-12 p-md-6">
                <label>City*</label>
                <InputText
                  placeholder="City"
                  v-model="v$.clientForm.contactInfo.address.city.$model"
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.city.$invalid &&
                      submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.address.city.$invalid &&
                      submitted) ||
                    v$.clientForm.contactInfo.address.city.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.address.city.required.$message.replace(
                      'Value',
                      'City'
                    )
                  }}</small
                >
              </div>
              <div class="p-field p-col-12 p-md-6">
                <label>State*</label>
                <InputText
                  placeholder="State"
                  v-model="
                    v$.clientForm.contactInfo.address.stateProvince.$model
                  "
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.stateProvince
                        .$invalid && submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.address.stateProvince.$invalid &&
                      submitted) ||
                    v$.clientForm.contactInfo.address.stateProvince.$pending
                      .$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.address.stateProvince.required.$message.replace(
                      'Value',
                      'State'
                    )
                  }}</small
                >
              </div>
              <div class="p-field p-col-12 p-md-6">
                <label>Country*</label>
                <Dropdown
                  :options="countries"
                  optionLabel="name"
                  placeholder="Country"
                  v-model="v$.clientForm.contactInfo.address.country.$model"
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.country.$invalid &&
                      submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.address.country.$invalid &&
                      submitted) ||
                    v$.clientForm.contactInfo.address.country.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.address.country.required.$message.replace(
                      'Value',
                      'Country'
                    )
                  }}</small
                >
              </div>
              <div class="p-field p-col-12 p-md-6">
                <label>Postal Code*</label>
                <InputText
                  type="number"
                  placeholder="Postal Code"
                  v-model="v$.clientForm.contactInfo.address.postalCode.$model"
                  :class="{
                    'p-invalid':
                      v$.clientForm.contactInfo.address.postalCode.$invalid &&
                      submitted,
                  }"
                />

                <small
                  v-if="
                    (v$.clientForm.contactInfo.address.postalCode.$invalid &&
                      submitted) ||
                    v$.clientForm.contactInfo.address.postalCode.$pending
                      .$response
                  "
                  class="p-error"
                  >{{
                    v$.clientForm.contactInfo.address.postalCode.required.$message.replace(
                      'Value',
                      'Postal Code'
                    )
                  }}</small
                >
              </div>
=======
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
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
              <!-- address end -->
              <!-- end -->
            </div>
            <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </Fieldset>
        </div>
<<<<<<< HEAD
        <div class="btmPage">
=======
        <div class="ClientPage">
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
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
<<<<<<< HEAD
import Button from 'primevue/button'
import { required, email, maxLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import CountryService from '../Services/CountryService'

export default {
  setup: () => ({ v$: useVuelidate() }),
  name: 'ClientForm',
  components: {
=======
import BaseInput from '@/components/Baseinput.vue'
import Button from 'primevue/button'

export default {
  name: 'ClientForm',
  components: {
    BaseInput,
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
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
<<<<<<< HEAD
      countries: null,
=======
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
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
<<<<<<< HEAD
      submitted: false,
    }
  },
  CountryServices: null,
  validations() {
    return {
      clientForm: {
        prefixTitle: { required },
        name: { required },
        type: { required },
        major: { required },
        university: { required },
        contactInfo: {
          phone: { required, maxLength: maxLength(12) },
          email: { required, email },
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
  created() {
    this.countryService = new CountryService()
    if (localStorage.getItem('vuex') !== null) {
      this.redirect()
    } else {
      return
    }
  },
  mounted() {
    this.$store.dispatch('scrollToTop')
    this.countryService.getCountries().then((data) => (this.countries = data))
  },

  methods: {
    redirect() {
      var local = this.$store.getters.getClientData
      console.log(Object.keys(local).length)
      if (Object.keys(local).length !== 0 && local.constructor === Object) {
        this.$router.push({ name: 'PatientsForm' })
      } else {
        return
      }
    },
    onSubmit(isFormValid) {
      this.submitted = true
      var ClientData = this.clientForm
      if (!isFormValid) {
        return
      }
      this.$store.commit('ADD_CLIENTS', ClientData)
      this.$store.commit('CHECK_CLIENT_SUBMIT', false)
      this.$router.push({ name: 'PatientsForm' })
=======
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
        // database link
        return
      }
      this.error = true
      this.errorMsg = 'Please fill all the fields. Thanks.'
      return
>>>>>>> 77aa7e303f125a0e63058d571c627b373b868c6a
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/form.scss';
</style>
