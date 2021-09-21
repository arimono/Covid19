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
              <label style="text-transform: capitalize"
                >Prefix of the patient</label
              >
              <Dropdown
                v-model="patientForm.prefixTitle"
                :options="prefixTitles"
                optionLabel="value"
                placeholder="Select Your Prefix"
              />
            </div>
            <!-- Name-->
            <div class="p-field p-col-12 p-md-8">
              <label style="text-transform: capitalize">Name</label>
              <InputText v-model="patientForm.name" placeholder="Name" />
            </div>
            <!-- Gender -->
            <div class="p-field p-col-12 p-md-6">
              <label style="text-transform: capitalize"
                >Gender of the patient</label
              >
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
              <label style="text-transform: capitalize">Date of Birth</label>
              <Calendar
                v-model="patientForm.dateOfBirth"
                placeholder="dd/mm/yyyy"
                :showIcon="true"
              />
            </div>
            <!-- Weight -->
            <div class="p-field p-col-12 p-md-6">
              <label style="text-transform: capitalize">Weight in Kg</label>
              <InputNumber
                v-model="patientForm.weightKg"
                suffix="Kg"
                :min="0"
                :max="1000"
              />
            </div>
            <!-- height -->
            <div class="p-field p-col-12 p-md-6">
              <label style="text-transform: capitalize">Height in cm</label>
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
              <label style="text-transform: capitalize">Cvs Diseases </label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cvsDiseases.isChecked"
            >
              <label style="text-transform: capitalize"
                >Cvs Diseases Type</label
              >
              <InputText
                v-model="patientForm.medicalHistory.cvsDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cvsDiseases.isChecked"
            >
              <label style="text-transform: capitalize"
                >cvsDiseases duration</label
              >
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
              <label style="text-transform: capitalize">Diabetes</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.diabetes.isChecked"
            >
              <label style="text-transform: capitalize">Diabetes type</label>
              <InputText
                v-model="patientForm.medicalHistory.diabetes.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.diabetes.isChecked"
            >
              <label style="text-transform: capitalize"
                >Diabetes duration</label
              >
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
              <label style="text-transform: capitalize">lungDiseases</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.lungDiseases.isChecked"
            >
              <label style="text-transform: capitalize"
                >lungDiseases type</label
              >
              <InputText
                v-model="patientForm.medicalHistory.lungDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.lungDiseases.isChecked"
            >
              <label style="text-transform: capitalize"
                >lungDiseases duration</label
              >
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
              <label style="text-transform: capitalize">cancers</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cancers.isChecked"
            >
              <label style="text-transform: capitalize">Cancers type</label>
              <InputText
                v-model="patientForm.medicalHistory.cancers.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.cancers.isChecked"
            >
              <label style="text-transform: capitalize">Cancers duration</label>
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
              <label style="text-transform: capitalize">kidneyDiseases</label>
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label style="text-transform: capitalize">lastCretinine</label>
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
              <label style="text-transform: capitalize">duration</label>
              <InputText
                v-model="patientForm.medicalHistory.kidneyDiseases.duration"
                placeholder="duration"
              />
            </div>

            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.kidneyDiseases.isChecked"
            >
              <label style="text-transform: capitalize">urine Output</label>
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
              <label style="text-transform: capitalize">other Info</label>
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
              <label style="text-transform: capitalize">transplants</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.transplants.isChecked"
            >
              <label style="text-transform: capitalize">transplants type</label>
              <InputText
                v-model="patientForm.medicalHistory.transplants.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.transplants.isChecked"
            >
              <label style="text-transform: capitalize"
                >transplants medication</label
              >
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
              <label style="text-transform: capitalize">hivAids</label>
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label style="text-transform: capitalize">therapyName</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.therapyName"
                placeholder="therapyName"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label style="text-transform: capitalize">therapyName</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.therapyName"
                placeholder="therapyName"
              />
            </div>

            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label style="text-transform: capitalize">lastViralLoad</label>
              <InputText
                v-model="patientForm.medicalHistory.hivAids.lastViralLoad"
                placeholder="lastViralLoad"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.hivAids.isChecked"
            >
              <label style="text-transform: capitalize">other Info</label>
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
              <label style="text-transform: capitalize"
                >rheumatologyDiseases</label
              >
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label style="text-transform: capitalize">type</label>
              <InputText
                v-model="patientForm.medicalHistory.rheumatologyDiseases.type"
                placeholder="type"
              />
            </div>
            <div
              class="p-field p-col-12 p-md-3"
              v-show="patientForm.medicalHistory.rheumatologyDiseases.isChecked"
            >
              <label style="text-transform: capitalize">duration</label>
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
              <label style="text-transform: capitalize">therapyName</label>
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
              <label style="text-transform: capitalize">other Info</label>
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
              <label style="text-transform: capitalize"
                >foodDrugAllergies</label
              >
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.foodDrugAllergies.isChecked"
            >
              <label style="text-transform: capitalize"
                >foodDrugAllergies</label
              >
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
              <label style="text-transform: capitalize">alcohol</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.alcohol.isChecked"
            >
              <label style="text-transform: capitalize">remarks</label>
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
              <label style="text-transform: capitalize">others</label>
            </div>
            <div
              class="p-field p-col-12 p-md-4"
              v-show="patientForm.medicalHistory.others.isChecked"
            >
              <label style="text-transform: capitalize">remarks</label>
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
</template>

<script>
import BaseInput from "@/components/Baseinput.vue"
import Calendar from "primevue/calendar"
import { db } from "@/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"

export default {
  name: "PatientForm",
  components: {
    BaseInput,
    Calendar,
  },
  data() {
    return {
      patientForm: {
        prefixTitle: "",
        name: "",
        gender: "",
        nextOfKin: "",
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
          others: {
            isChecked: false,
            remarks: "",
          },
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
  methods: {
    async onSubmit() {
      if (
        this.PatientForm.prefixTitle !== "" &&
        this.PatientForm.name !== "" &&
        this.PatientForm.gender !== "" &&
        this.PatientForm.relationship !== "" &&
        this.PatientForm.dateOfBirth !== "" &&
        this.PatientForm.weightKg !== 0 &&
        this.PatientForm.heightCm !== 0 &&
        this.PatientForm.contactInfo.phone !== "" &&
        this.PatientForm.contactInfo.address.addressLine_1 !== "" &&
        this.PatientForm.contactInfo.address.addressLine_2 !== "" &&
        this.PatientForm.contactInfo.address.city !== "" &&
        this.PatientForm.contactInfo.address.stateProvince !== "" &&
        this.PatientForm.contactInfo.address.country !== "" &&
        this.PatientForm.contactInfo.address.postalCode !== ""
      ) {
        this.error = false
        this.errorMsg = ""

        try {
          const patientReg = await addDoc(collection(db, "Patients"), {
            timeSubmitted: Timestamp.now(),
            prefixTitle: this.PatientForm.prefixTitle,
            name: this.PatientForm.name,
            gender: this.PatientForm.gender,
            dateOfBirth: this.PatientForm.dateOfBirth,
            weightKg: this.PatientForm.weightKg,
            heightCm: this.PatientForm.heightCm,
            relationship: this.PatientForm.relationship,
            contactInfo: this.PatientForm.contactInfo,
            medicalHistory: this.medicalHistory,
          })
          console.log("Document written with ID: ", patientReg.id)
        } catch (e) {
          console.error("Error adding document: ", e)
        }
        return
      }
      this.error = true
      this.errorMsg = "Please fill the Patient Form fields. Thanks."
      return
    },
  },
}
</script>
<style lang="scss">
@import "../assets/layout/form.scss";
</style>
