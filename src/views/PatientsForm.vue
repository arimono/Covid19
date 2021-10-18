<template>
  <div class="formContainer">
    <!-- form-start -->
    <form @submit.prevent="onSubmit">
      <div class="card">
        <Fieldset>
          <template #legend> Patient Form </template>
          <div class="p-fluid p-grid">
            <!-- Prefix -->
            <div class="p-field p-col-12 p-md-4">
              <label>Prefix *</label>
              <Dropdown
                v-model="v$.patientForm.prefixTitle.$model"
                :options="prefixTitles"
                optionLabel="value"
                placeholder="Select Your Prefix"
                :class="{
                  'p-invalid': v$.patientForm.prefixTitle.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.prefixTitle.$invalid && submitted) ||
                  v$.patientForm.prefixTitle.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.prefixTitle.required.$message.replace(
                    'Value is required',
                    'Select the prefix'
                  )
                }}</small
              >
            </div>
            <!-- Name-->
            <div class="p-field p-col-12 p-md-8">
              <label>Name *</label>
              <InputText
                v-model="v$.patientForm.name.$model"
                placeholder="Name"
                :class="{
                  'p-invalid': v$.patientForm.name.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.name.$invalid && submitted) ||
                  v$.patientForm.name.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.name.required.$message.replace('Value', 'Name')
                }}</small
              >
            </div>
            <!-- Gender -->
            <div class="p-field p-col-12 p-md-6">
              <label>Gender of the patient</label>
              <Dropdown
                v-model="v$.patientForm.gender.$model"
                :options="gender"
                optionLabel="value"
                placeholder="Select Your Gender"
                :class="{
                  'p-invalid': v$.patientForm.prefixTitle.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.gender.$invalid && submitted) ||
                  v$.patientForm.gender.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.gender.required.$message.replace(
                    'Value',
                    'Gender'
                  )
                }}</small
              >
            </div>
            <!-- relationship -->
            <div class="p-field p-col-12 p-md-6">
              <label>relationship *</label>
              <InputText
                v-model="v$.patientForm.relationship.$model"
                placeholder="Relationship"
                :class="{
                  'p-invalid':
                    v$.patientForm.relationship.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.relationship.$invalid && submitted) ||
                  v$.patientForm.relationship.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.relationship.required.$message.replace(
                    'Value',
                    'Relationship'
                  )
                }}</small
              >
            </div>

            <!-- Phone -->
            <div class="p-field p-col-12 p-md-6">
              <label>phone No. *</label>
              <InputText
                type="number"
                v-model="v$.patientForm.contactInfo.phone.$model"
                placeholder="Phone No."
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.phone.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.contactInfo.phone.$invalid && submitted) ||
                  v$.patientForm.contactInfo.phone.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.phone.required.$message.replace(
                    'Value',
                    'Phone No.'
                  )
                }}</small
              >
            </div>

            <!-- address -->
            <div class="p-field p-col-12 p-md-6">
              <label>House No. and Road *</label>
              <InputText
                v-model="
                  v$.patientForm.contactInfo.address.addressLine_1.$model
                "
                placeholder="House No. and Road"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.addressLine_1.$invalid &&
                    submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.contactInfo.address.addressLine_1.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.addressLine_1.$pending
                    .$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.addressLine_1.required.$message.replace(
                    'Value',
                    'Address Line 1'
                  )
                }}</small
              >
            </div>
            <div class="p-field p-col-12 p-md-6">
              <label>Ward and Township *</label>
              <InputText
                v-model="
                  v$.patientForm.contactInfo.address.addressLine_2.$model
                "
                placeholder="Ward and Township"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.addressLine_2.$invalid &&
                    submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.contactInfo.address.addressLine_2.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.addressLine_2.$pending
                    .$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.addressLine_2.required.$message.replace(
                    'Value',
                    'Address Line 2'
                  )
                }}</small
              >
            </div>
            <div class="p-field p-col-12 p-md-6">
              <label>city *</label>
              <InputText
                v-model="v$.patientForm.contactInfo.address.city.$model"
                placeholder="City"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.city.$invalid &&
                    submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.contactInfo.address.city.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.city.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.city.required.$message.replace(
                    'Value',
                    'City'
                  )
                }}</small
              >
            </div>
            <div class="p-field p-col-12 p-md-6">
              <label>state Province *</label>
              <InputText
                v-model="
                  v$.patientForm.contactInfo.address.stateProvince.$model
                "
                placeholder="stateProvince"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.stateProvince.$invalid &&
                    submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.contactInfo.address.stateProvince.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.stateProvince.$pending
                    .$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.stateProvince.required.$message.replace(
                    'Value',
                    'State'
                  )
                }}</small
              >
            </div>
            <div class="p-field p-col-12 p-md-6">
              <label>Country *</label>
              <Dropdown
                :options="countries"
                optionLabel="name"
                placeholder="Country"
                v-model="v$.patientForm.contactInfo.address.country.$model"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.country.$invalid &&
                    submitted,
                }"
              />

              <small
                v-if="
                  (v$.patientForm.contactInfo.address.country.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.country.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.country.required.$message.replace(
                    'Value',
                    'Country'
                  )
                }}</small
              >
            </div>
            <div class="p-field p-col-12 p-md-6">
              <label>Postal Code *</label>
              <InputText
                type="number"
                placeholder="Postal Code"
                v-model="v$.patientForm.contactInfo.address.postalCode.$model"
                :class="{
                  'p-invalid':
                    v$.patientForm.contactInfo.address.postalCode.$invalid &&
                    submitted,
                }"
              />

              <small
                v-if="
                  (v$.patientForm.contactInfo.address.postalCode.$invalid &&
                    submitted) ||
                  v$.patientForm.contactInfo.address.postalCode.$pending
                    .$response
                "
                class="p-error"
                >{{
                  v$.patientForm.contactInfo.address.postalCode.required.$message.replace(
                    'Value',
                    'Postal Code'
                  )
                }}</small
              >
            </div>
            <!-- address end -->
            <div class="p-field p-col-12 p-md-6">
              <label>Date of Birth</label>
              <Calendar
                v-model="v$.patientForm.dateOfBirth.$model"
                placeholder="dd/mm/yyyy"
                :showIcon="true"
                :class="{
                  'p-invalid': v$.patientForm.dateOfBirth.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.dateOfBirth.$invalid && submitted) ||
                  v$.patientForm.dateOfBirth.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.dateOfBirth.required.$message.replace(
                    'Value',
                    'Date of Birth'
                  )
                }}</small
              >
            </div>
            <!-- Weight -->
            <div class="p-field p-col-12 p-md-6">
              <label>Weight in Kg</label>
              <InputNumber
                v-model="v$.patientForm.weightKg.$model"
                :min="0"
                :max="1000"
                suffix="Kg"
                :class="{
                  'p-invalid': v$.patientForm.weightKg.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.weightKg.$invalid && submitted) ||
                  v$.patientForm.weightKg.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.weightKg.required.$message.replace(
                    'Value',
                    'Weight'
                  )
                }}</small
              >
            </div>
            <!-- height -->
            <div class="p-field p-col-12 p-md-6">
              <label>Height in cm</label>
              <InputNumber
                v-model="v$.patientForm.heightCm.$model"
                suffix="cm"
                :min="0"
                :max="500"
                :class="{
                  'p-invalid': v$.patientForm.heightCm.$invalid && submitted,
                }"
              />
              <small
                v-if="
                  (v$.patientForm.heightCm.$invalid && submitted) ||
                  v$.patientForm.heightCm.$pending.$response
                "
                class="p-error"
                >{{
                  v$.patientForm.heightCm.required.$message.replace(
                    'Value',
                    'Height'
                  )
                }}</small
              >
            </div>
            <!-- end -->
          </div>
        </Fieldset>

        <!-- Medical history -->
        <Fieldset>
          <template #legend> Medical History of Patient </template>
          <div class="p-fluid p-grid">
            <!-- cvsDiseases -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="cvsDiseases"
                v-model="patientForm.medicalHistory.cvsDiseases.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.cvsDiseases.type = ''),
                    (patientForm.medicalHistory.cvsDiseases.duration = '')
                "
              />
              <label>Cvs Diseases </label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cvsDiseases.isChecked"
            >
              <label>Cvs Diseases Type</label>
              <InputText
                v-model="patientForm.medicalHistory.cvsDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cvsDiseases.isChecked"
            >
              <label>cvsDiseases duration</label>
              <InputText
                v-model="patientForm.medicalHistory.cvsDiseases.duration"
                placeholder="duration"
              />
            </div>
            <!-- cvsDiseases end -->
            <!-- diabetes -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="diabetes"
                v-model="patientForm.medicalHistory.diabetes.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.diabetes.type = ''),
                    (patientForm.medicalHistory.diabetes.duration = '')
                "
              />
              <label>Diabetes</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.diabetes.isChecked"
            >
              <label>Diabetes type</label>
              <InputText
                v-model="patientForm.medicalHistory.diabetes.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.diabetes.isChecked"
            >
              <label>Diabetes duration</label>
              <InputText
                v-model="patientForm.medicalHistory.diabetes.duration"
                placeholder="duration"
              />
            </div>
            <!-- diabetes end -->
            <!-- lungDiseases -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="lungDiseases"
                v-model="patientForm.medicalHistory.lungDiseases.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.lungDiseases.type = ''),
                    (patientForm.medicalHistory.lungDiseases.duration = '')
                "
              />
              <label>lung Diseases</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.lungDiseases.isChecked"
            >
              <label>lung Diseases type</label>
              <InputText
                v-model="patientForm.medicalHistory.lungDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.lungDiseases.isChecked"
            >
              <label>lung Diseases duration</label>
              <InputText
                v-model="patientForm.medicalHistory.lungDiseases.duration"
                placeholder="duration"
              />
            </div>
            <!-- lungDiseases end -->
            <!-- cancers -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="cancers"
                v-model="patientForm.medicalHistory.cancers.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.cancers.type = ''),
                    (patientForm.medicalHistory.cancers.duration = '')
                "
              />
              <label>cancers</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cancers.isChecked"
            >
              <label>Cancers type</label>
              <InputText
                v-model="patientForm.medicalHistory.cancers.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cancers.isChecked"
            >
              <label>Cancers duration</label>
              <InputText
                v-model="patientForm.medicalHistory.cancers.duration"
                placeholder="duration"
              />
            </div>
            <!-- cancers end -->

            <!-- kidneyDiseases -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="kidneyDiseases"
                v-model="patientForm.medicalHistory.kidneyDiseases.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.kidneyDiseases.duration = ''),
                    (patientForm.medicalHistory.kidneyDiseases.lastCretinine =
                      ''),
                    (patientForm.medicalHistory.kidneyDiseases.urineOutputPerDay =
                      ''),
                    (patientForm.medicalHistory.kidneyDiseases.otherInfo = '')
                "
              />
              <label>kidney Diseases</label>
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label>last Cretinine</label>
              <InputText
                v-model="
                  patientForm.medicalHistory.kidneyDiseases.lastCretinine
                "
                placeholder="lastCretinine"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label>duration</label>
              <InputText
                v-model="patientForm.medicalHistory.kidneyDiseases.duration"
                placeholder="duration"
              />
            </div>

            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label>urine Output</label>
              <InputText
                v-model="
                  patientForm.medicalHistory.kidneyDiseases.urineOutputPerDay
                "
                placeholder="Urine Output Per Day"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label>other Info</label>
              <InputText
                v-model="patientForm.medicalHistory.kidneyDiseases.otherInfo"
                placeholder="Other Info"
              />
            </div>
            <!-- kidneyDiseases end -->
            <!-- transplants -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="transplants"
                v-model="patientForm.medicalHistory.transplants.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.transplants.type = ''),
                    (patientForm.medicalHistory.transplants.medication = '')
                "
              />
              <label>transplants</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.transplants.isChecked"
            >
              <label>transplants type</label>
              <InputText
                v-model="patientForm.medicalHistory.transplants.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.transplants.isChecked"
            >
              <label>transplants medication</label>
              <InputText
                v-model="patientForm.medicalHistory.transplants.medication"
                placeholder="medication"
              />
            </div>
            <!-- transplants end -->
            <!-- hivAids -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="hivAids"
                v-model="patientForm.medicalHistory.hivAids.isChecked"
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.hivAids.duration = ''),
                    (patientForm.medicalHistory.hivAids.therapyName = ''),
                    (patientForm.medicalHistory.hivAids.lastViralLoad = ''),
                    (patientForm.medicalHistory.hivAids.otherInfo = '')
                "
              />
              <label>hiv/Aids</label>
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label>therapy Name</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.therapyName"
                placeholder="therapyName"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label>therapy Name</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.therapyName"
                placeholder="therapyName"
              />
            </div>

            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label>last Viral Load</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.lastViralLoad"
                placeholder="lastViralLoad"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label>other Info</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.otherInfo"
                placeholder="Other Info"
              />
            </div>
            <!-- hivAids end -->
            <!-- rheumatologyDiseases -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="rheumatologyDiseases"
                v-model="
                  patientForm.medicalHistory.rheumatologyDiseases.isChecked
                "
                :binary="true"
                @change="
                  ;(patientForm.medicalHistory.rheumatologyDiseases.duration =
                    ''),
                    (patientForm.medicalHistory.rheumatologyDiseases.type = ''),
                    (patientForm.medicalHistory.rheumatologyDiseases.therapyName =
                      ''),
                    (patientForm.medicalHistory.rheumatologyDiseases.otherInfo =
                      '')
                "
              />
              <label>rheumatology Diseases</label>
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label>type</label>
              <InputText
                v-model="patientForm.medicalHistory.rheumatologyDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label>duration</label>
              <InputText
                v-model="
                  patientForm.medicalHistory.rheumatologyDiseases.duration
                "
                placeholder="duration"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label>therapy Name</label>
              <InputText
                v-model="
                  patientForm.medicalHistory.rheumatologyDiseases.therapyName
                "
                placeholder="therapyName"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label>other Info</label>
              <InputText
                v-model="
                  patientForm.medicalHistory.rheumatologyDiseases.otherInfo
                "
                placeholder="Other Info"
              />
            </div>
            <!-- hivAids end -->
            <!-- foodDrugAllergies -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="foodDrugAllergies"
                v-model="patientForm.medicalHistory.foodDrugAllergies.isChecked"
                :binary="true"
                @change="
                  patientForm.medicalHistory.foodDrugAllergies.allergies = ''
                "
              />
              <label>food/Drug Allergies</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.foodDrugAllergies.isChecked"
            >
              <label>Allergies</label>
              <InputText
                v-model="patientForm.medicalHistory.foodDrugAllergies.allergies"
                placeholder="allergies"
              />
            </div>
            <!-- foodDrugAllergies end -->
            <!-- alcohol -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="alcohol"
                v-model="patientForm.medicalHistory.alcohol.isChecked"
                :binary="true"
                @change="patientForm.medicalHistory.alcohol.remarks = ''"
              />
              <label>alcohol</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.alcohol.isChecked"
            >
              <label>remarks</label>
              <InputText
                v-model="patientForm.medicalHistory.alcohol.remarks"
                placeholder="remarks"
              />
            </div>
            <!-- alcohol end -->
            <!-- others -->
            <div class="p-field-checkbox p-col-12 p-md-12">
              <Checkbox
                id="others"
                v-model="patientForm.medicalHistory.others.isChecked"
                :binary="true"
                @change="patientForm.medicalHistory.others.remarks = ''"
              />
              <label>others</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.others.isChecked"
            >
              <label>remarks</label>
              <InputText
                v-model="patientForm.medicalHistory.others.remarks"
                placeholder="remarks"
              />
            </div>
            <!-- others end -->
          </div>
          <div v-show="error" class="error">{{ this.errorMsg }}</div>
        </Fieldset>
        <!-- Medical history end -->

        <div class="PatientPage">
          <router-link :to="{ name: 'ClientForm' }" rel="back">
            <Button
              label="Back"
              class="p-button-raised p-button-text pagButton"
            />
          </router-link>

          <Button
            type="submit"
            label="Check and Submit"
            class="p-button-raised p-button-text pagButton"
          />
        </div>
      </div>
    </form>

    <!-- form-end -->
  </div>
  <pre>@{{ patientForm }}</pre>
  {{ patientForm.dateOfBirth.toString() }}
</template>

<script>
import Calendar from 'primevue/calendar'
import { db } from '@/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { required, maxLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import CountryService from '../Services/CountryService'

export default {
  setup: () => ({ v$: useVuelidate() }),
  name: 'PatientForm',
  components: {
    Calendar,
  },
  data() {
    return {
      patientForm: {
        prefixTitle: '',
        name: '',
        gender: '',
        nextOfKin: '',
        relationship: '',
        contactInfo: {
          phone: '',
          address: {
            addressLine_1: '',
            addressLine_2: '',
            city: '',
            stateProvince: '',
            country: '',
            postalCode: '',
          },
        },
        countries: null,
        dateOfBirth: '',
        weightKg: null,
        heightCm: null,

        medicalHistory: {
          cvsDiseases: {
            isChecked: false,
            type: '',
            duration: '',
          },
          diabetes: {
            isChecked: false,
            type: '',
            duration: '',
          },
          lungDiseases: {
            isChecked: false,
            type: '',
            duration: '',
          },
          cancers: {
            isChecked: false,
            type: '',
            duration: '',
          },
          kidneyDiseases: {
            isChecked: false,
            duration: '',
            lastCretinine: '',
            urineOutputPerDay: '',
            otherInfo: '',
          },
          transplants: {
            isChecked: false,
            type: '',
            medication: '',
          },
          hivAids: {
            isChecked: false,
            duration: '',
            therapyName: '',
            lastViralLoad: '',
            otherInfo: '',
          },
          rheumatologyDiseases: {
            isChecked: false,
            type: '',
            duration: '',
            therapyName: '',
            otherInfo: '',
          },
          foodDrugAllergies: {
            isChecked: false,
            allergies: [],
          },
          smoking: {
            isChecked: false,
            remarks: '',
          },
          alcohol: {
            isChecked: false,
            remarks: '',
          },
          others: {
            isChecked: false,
            remarks: '',
          },
        },

        vitalSigns: {
          timestamp: '',
          bloodPressure: {
            systolic: 0,
            diastolic: 0,
          },
          pulseRate: 0,
          respiratoryRate: 0,
          temperatureInCelsius: 0,
          spO2: 0,
          randomBloodSugar: 0,
          fastingBloodSugar: 0,
        },
      },
      prefixTitles: [
        { value: 'Daw' },
        { value: 'U' },
        { value: 'Ma' },
        { value: 'Mg' },
      ],
      gender: [{ value: 'Male' }, { value: 'Female' }, { value: 'Other' }],
      error: null,
      errorMsg: '',
      submitted: false,
    }
  },
  CountryServices: null,
  validations() {
    return {
      patientForm: {
        prefixTitle: { required },
        name: { required },
        gender: { required },
        nextOfKin: { required },
        relationship: { required },
        contactInfo: {
          phone: { required, maxLength: maxLength(12) },
          address: {
            addressLine_1: { required },
            addressLine_2: { required },
            city: { required },
            stateProvince: { required },
            country: { required },
            postalCode: { required, maxLength: maxLength(4) },
          },
        },

        dateOfBirth: { required },
        weightKg: { required },
        heightCm: { required },
      },
    }
  },
  created() {
    this.countryService = new CountryService()
  },
  mounted() {
    this.countryService.getCountries().then((data) => (this.countries = data))
  },
  methods: {
    async onSubmit(isFormValid) {
      console.log(this.patientForm)
      this.submitted = true
      if (!isFormValid) {
        return
      }
      //firebase test, replace after firebase created
      try {
        const patientsReg = await addDoc(collection(db, 'Paitents'), {
          timeSubmitted: Timestamp.now(),
          prefixTitle: this.patientForm.prefixTitle,
          name: this.patientForm.name,
          gender: this.patientForm.gender,
          relationship: this.patientForm.relationship,
          dateOfBirth: this.patientForm.dateOfBirth,
          weightKg: this.patientForm.weightKg,
          heightCm: this.patientForm.heightCm,
          contactInfo: this.patientForm.contactInfo,
          medicalHistory: this.patientForm.medicalHistory,
        })
        console.log('Document written with ID: ', patientsReg.id)
        // this.$router.push({ name: 'PatientsForm' })
      } catch (e) {
        console.error('Error adding document: ', e)
      }
      //firebase end
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/form.scss';
</style>
