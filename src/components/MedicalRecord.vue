<template>
  <div v-for="(value, propertyName) in symptoms" :key="propertyName">
    <div v-if="propertyName == 'otherSymptoms'">
      <h5>Other symptoms</h5>
      <Textarea
        v-model="symptoms[propertyName]"
        rows="5"
        cols="100"
        style="margin-bottom: 30px"
      />
    </div>
    <div v-else>
      <h3>{{ value['des'] }}</h3>

      <div class="p-field-radiobutton">
        <RadioButton
          id="check1"
          :value="true"
          name="mark"
          v-model="value['yesNo']"
        />
        <label for="check1">Yes</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="check2"
          :value="false"
          name="mark"
          v-model="value['yesNo']"
        />
        <label for="check2">No</label>
      </div>

      <div v-if="value['yesNo']">
        <h5>If Yes, please provide start date</h5>
        <div class="p-fluid p-grid p-formgrid">
          <div class="p-field p-col-12 p-md-4">
            <label for="icon">Icon</label>
            <Calendar id="icon" v-model="value['startDate']" :showIcon="true" />
          </div>
        </div>
      </div>
      <h5>Remarks</h5>
      <Textarea
        v-model="value['remarks']"
        rows="5"
        cols="100"
        style="margin-bottom: 30px"
      />
    </div>
  </div>

  <h2>Vital signs</h2>

  <h3>Blood Pressure</h3>
  <div class="p-fluid p-grid">
    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <InputText
          id="inputtext"
          type="text"
          v-model="vitalSigns.bloodPressure.systolic"
        />
        <label for="inputtext">systolic</label>
      </span>
    </div>
    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label">
        <InputText
          id="inputtext"
          type="text"
          v-model="vitalSigns.bloodPressure.diastolic"
        />
        <label for="inputtext">diastolic</label>
      </span>
    </div>
  </div>

  <h3>Pulse Rate</h3>
  <InputText
    type="text"
    v-model="vitalSigns.pulseRate"
    style="margin-bottom: 20px"
  />
  <h3>Respiratory Rate</h3>
  <InputText
    type="text"
    v-model="vitalSigns.respiratoryRate"
    style="margin-bottom: 20px"
  />

  <div :class="{ error: v$.vitalSigns.temperatureInCelsius.$errors.length }">
    <h3>Temperature in Celsius</h3>
    <InputText
      type="text"
      v-model="vitalSigns.temperatureInCelsius"
      style="margin-bottom: 10px"
      @blur="v$.vitalSigns.temperatureInCelsius.$touch"
    />
  </div>
  <div
    v-if="v$.vitalSigns.temperatureInCelsius.$error"
    class="p-error"
    style="margin-bottom: 20px"
  >
    <span
      id="error"
      v-for="(error, index) of v$.vitalSigns.temperatureInCelsius.$errors"
      :key="index"
    >
      <small class="p-error">{{ error.$message }}</small>
    </span>
  </div>

  <h3>spO2</h3>
  <InputText
    type="text"
    v-model="vitalSigns.spO2"
    style="margin-bottom: 20px"
  />

  <h3>Random Blood Sugar</h3>
  <InputText
    type="text"
    v-model="vitalSigns.randomBloodSugar"
    style="margin-bottom: 20px"
  />

  <h3>Fasting Blood Sugar</h3>
  <InputText
    type="text"
    v-model="vitalSigns.fastingBloodSugar"
    style="margin-bottom: 20px"
  />
  <pre>{{ symptoms }}</pre>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, between, helpers } from '@vuelidate/validators'

import moment from 'moment'

export default {
  name: 'medicalRecord',
  components: {},
  created() {
    let today = new Date()
    let month = today.getMonth()
    let year = today.getFullYear()
    let prevMonth = month === 0 ? 11 : month - 1
    let prevYear = prevMonth === 11 ? year - 1 : year
    let nextMonth = month === 11 ? 0 : month + 1
    let nextYear = nextMonth === 0 ? year + 1 : year
    this.minDate = new Date()
    this.minDate.setMonth(prevMonth)
    this.minDate.setFullYear(prevYear)
    this.maxDate = new Date()
    this.maxDate.setMonth(nextMonth)
    this.maxDate.setFullYear(nextYear)

    let invalidDate = new Date()
    invalidDate.setDate(today.getDate() - 1)
    this.invalidDates = [today, invalidDate]
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      symptoms: {
        timeStamp: moment().format(),
        cough: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Cough',
        },
        fever: { yesNo: null, startDate: '', remarks: '', des: 'Fever' },

        dysponea: { yesNo: null, startDate: '', remarks: '', des: 'Dysponea' },
        headache: { yesNo: null, startDate: '', remarks: '', des: 'Headache' },

        runnyNose: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Runny Nose',
        },
        soreThroat: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Sore Throat',
        },
        diarrhea: { yesNo: null, startDate: '', remarks: '', des: 'Diarrhea' },
        abdominalPain: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Abdominal Pain',
        },
        nausea: { yesNo: null, startDate: '', remarks: '', des: 'Nausea' },
        vomiting: { yesNo: null, startDate: '', remarks: '', des: 'Vomiting' },

        lossOfSmell: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Loss of Smell',
        },
        lossOfTaste: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Loss of Taste',
        },
        generalizedWeakness: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Generalized Weakness',
        },
        skinRash: { yesNo: null, startDate: '', remarks: '', des: 'Skin Rash' },
        conjunctivitis: {
          yesNo: null,
          startDate: '',
          remarks: '',
          des: 'Conjunctivitis',
        },
        otherSymptoms: null,
      },
      vitalSigns: {
        timeStamp: moment().format(),
        bloodPressure: { systolic: null, diastolic: null },
        pulseRate: null,
        respiratoryRate: null,
        temperatureInCelsius: null,
        spO2: null,
        randomBloodSugar: null,
        fastingBloodSugar: null,
      },
    }
  },
  mounted() {
    this.$emit('symptoms', this.symptoms)
    this.$emit('vitalSigns', this.vitalSigns)
  },
  methods: {
    formatDate(value) {
      return moment(value).format()
    },
  },
  validations() {
    return {
      vitalSigns: {
        temperatureInCelsius: {
          required: helpers.withMessage(
            'Temperature field cannot be empty',
            required
          ),
          between: helpers.withMessage(
            'Temperature field must be between 35.6 and 40.6',
            between(35.6, 40.6)
          ),
        },
      },
    }
  },
}
</script>

<style scoped>
.special-day {
  text-decoration: line-through;
}
</style>
