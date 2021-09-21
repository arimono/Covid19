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
      <h3>{{ propertyName }}</h3>

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

  <div>{{ symptoms }}</div>
  <h2>Vital signs</h2>
  <div v-for="(value, propertyName) in vitalSigns" :key="propertyName">
    <div v-if="propertyName == 'bloodPressure'">
      <h5>Blood Pressure</h5>
      <div class="p-fluid p-grid">
        <div class="p-field p-col-12 p-md-4">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="value['systolic']" />
            <label for="inputtext">systolic</label>
          </span>
        </div>
        <div class="p-field p-col-12 p-md-4">
          <span class="p-float-label">
            <InputText
              id="inputtext"
              type="text"
              v-model="value['diastolic']"
            />
            <label for="inputtext">diastolic</label>
          </span>
        </div>
      </div>
    </div>
    <div v-else-if="propertyName == 'timeStamp'">
      <!-- do nth -->
    </div>
    <div v-else>
      <h5>{{ propertyName }}</h5>
      <InputText
        type="text"
        v-model="vitalSigns[propertyName]"
        style="margin-bottom: 20px"
      />
    </div>
  </div>

  <span :style="{ marginLeft: '.5em' }">{{ vitalSigns }}</span>
</template>

<script>
export default {
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
  data() {
    return {
      symptoms: {
        cough: { yesNo: null, startDate: "", remarks: "" },
        fever: { yesNo: null, startDate: "", remarks: "" },

        dysponea: { yesNo: null, startDate: "", remarks: "" },
        headache: { yesNo: null, startDate: "", remarks: "" },

        runnyNose: { yesNo: null, startDate: "", remarks: "" },
        soreThroat: { yesNo: null, startDate: "", remarks: "" },
        diarrhea: { yesNo: null, startDate: "", remarks: "" },
        abdominalPain: { yesNo: null, startDate: "", remarks: "" },
        nausea: { yesNo: null, startDate: "", remarks: "" },
        vomiting: { yesNo: null, startDate: "", remarks: "" },

        lossOfSmell: { yesNo: null, startDate: "", remarks: "" },
        lossOfTaste: { yesNo: null, startDate: "", remarks: "" },
        generalizedWeakness: { yesNo: null, startDate: "", remarks: "" },
        skinRash: { yesNo: null, startDate: "", remarks: "" },
        conjunctivitis: { yesNo: null, startDate: "", remarks: "" },
        otherSymptoms: null,
      },
      vitalSigns: {
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
}
</script>

<style scoped>
.special-day {
  text-decoration: line-through;
}
</style>
