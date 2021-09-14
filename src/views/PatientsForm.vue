<template>
  <div class="formContainer">
    <!-- form-start -->
    <form @submit.prevent="sendForm">
      <div class="card">
        <Fieldset>
          <template #legend> Patient Form </template>
          <div class="p-fluid p-grid">
            <!-- Prefix -->
            <div class="p-field p-col-12 p-md-4">
              <label>Prefix of the patient</label>
              <Dropdown
                v-model="patientForm.prefixTitle"
                :options="prefixTitles"
                optionLabel="value"
                placeholder="Select Your Prefix"
              />
            </div>
            <!-- Name-->
            <div class="p-field p-col-12 p-md-8">
              <label>Name</label>
              <InputText v-model="patientForm.name" placeholder="Name" />
            </div>
            <!-- Gender -->
            <div class="p-field p-col-12 p-md-6">
              <label>Gender of the patient</label>
              <Dropdown
                v-model="patientForm.gender"
                :options="gender"
                optionLabel="value"
                placeholder="Select Your Gender"
              />
            </div>
            <!-- relationship -->
            <BaseInput
              v-model="patientForm.relationship"
              label="Relationship with the patient"
            />
            <!-- Phone -->
            <BaseInput
              v-model="patientForm.contactInfo.phone"
              label="Phone No."
            />
            <!-- address -->
            <BaseInput
              v-model="patientForm.contactInfo.address.addressLine_1"
              label="House No. and Road"
            />
            <BaseInput
              v-model="patientForm.contactInfo.address.addressLine_2"
              label="Ward and Township"
            />
            <BaseInput
              v-model="patientForm.contactInfo.address.city"
              label="City"
            />
            <BaseInput
              v-model="patientForm.contactInfo.address.stateProvince"
              label="State"
            />
            <BaseInput
              v-model="patientForm.contactInfo.address.country"
              label="Country"
            />
            <BaseInput
              v-model="patientForm.contactInfo.address.postalCode"
              label="Postal Code"
            />
            <!-- address end -->
            <div class="p-field p-col-12 p-md-6">
              <label>Date of Birth</label>
              <Calendar
                v-model="patientForm.dateOfBirth"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <!-- Weight -->
            <div class="p-field p-col-12 p-md-6">
              <label>Weight in Kg</label>
              <InputNumber
                v-model="patientForm.weightKg"
                suffix="Kg"
                :min="0"
                :max="1000"
              />
            </div>
            <!-- height -->
            <div class="p-field p-col-12 p-md-6">
              <label>Height in cm</label>
              <InputNumber
                v-model="patientForm.heightCm"
                suffix="cm"
                :min="0"
                :max="500"
              />
            </div>
            <!-- end -->
          </div>
        </Fieldset>

        <!-- Medical history -->
        <Fieldset>
          <template #legend> Medical History of Patient </template>
          <div class="p-fluid p-grid">
            <!-- cvsDiseases -->
            <div class="p-field-checkbox p-col-12 p-md-4">
              <Checkbox
                id="cvsDiseases"
                v-model="patientForm.medicalHistory.cvsDiseases.isChecked"
                :binary="true"
                @change="patientForm.medicalHistory.cvsDiseases.type = ''"
              />
              <label>Cvs Diseases </label>
            </div>
            <div class="p-field p-col-12 p-md-4">
              <label>Cvs Diseases Type</label>
              <InputText
                v-model="patientForm.medicalHistory.cvsDiseases.type"
                placeholder="Name"
                :disabled="!patientForm.medicalHistory.cvsDiseases.isChecked"
              />
            </div>
          </div>
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
            label="Check and Submit"
            class="p-button-raised p-button-text pagButton"
          />
        </div>
      </div>
    </form>

    <!-- form-end -->
  </div>
  <pre>@{{ patientForm }}</pre>
</template>

<script>
import BaseInput from "@/components/Baseinput.vue"
import Calendar from "primevue/calendar"

export default {
  name: "PatientForm",
  components: {
    BaseInput,
    Calendar,
  },
  data() {
    return {
      patientForm: {
        id: "",
        prefixTitle: "",
        name: "",
        gender: "",
        // "nextOfKin": this.id
        relationship: "",
        contactInfo: {
          phone: "",
          address: {
            addressLine_1: "",
            addressLine_2: "",
            city: "",
            stateProvince: "",
            country: "",
            postalCode: "",
          },
        },

        dateOfBirth: "",
        weightKg: 0,
        heightCm: 0,

        medicalHistory: {
          cvsDiseases: {
            isChecked: false,
            type: "",
            duration: "",
          },
          diabetes: {
            isChecked: false,
            type: "",
            duration: "",
          },
          lungDiseases: {
            isChecked: false,
            type: "",
            duration: "",
          },
          cancers: {
            isChecked: false,
            type: "",
            duration: "",
          },
          kidneyDiseases: {
            isChecked: false,
            duration: "",
            lastCretinine: "",
            urineOutputPerDay: "",
            otherInfo: "",
          },
          transplants: {
            isChecked: false,
            type: "",
            medication: "",
          },
          hivAids: {
            isChecked: false,
            duration: "",
            therapyName: "",
            lastViralLoad: "",
            otherInfo: "",
          },
          rheumatologyDiseases: {
            isChecked: false,
            type: "",
            duration: "",
            therapyName: "",
            otherInfo: "",
          },
          foodDrugAllergies: {
            isChecked: false,
            allergies: [],
          },
          smoking: {
            isChecked: false,
            remarks: "",
          },
          alcohol: {
            isChecked: false,
            remarks: "",
          },
          others: "",
        },

        vitalSigns: {
          timestamp: "",
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
        { value: "Daw" },
        { value: "U" },
        { value: "Ma" },
        { value: "Mg" },
      ],
      gender: [{ value: "Male" }, { value: "Female" }, { value: "Other" }],
    }
  },
}
</script>
<style lang="scss">
@import "../assets/layout/form.scss";
</style>
