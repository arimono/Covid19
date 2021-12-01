<template>
  <div class="p-fluid p-grid p-jc-center">
    <div class="p-field p-col-12 p-md-3">
      <Toast />
      <DataTable
        v-model:selection="selected"
        selectionMode="single"
        scrollHeight="50vh"
        :scrollable="true"
        @row-click="rowClick"
        scrollDirection="both"
        :reorderableColumns="true"
        :resizableColumns="true"
        columnResizeMode="fit"
        :value="patient"
        responsiveLayout="scroll"
        v-model:filters="filters"
        filterDisplay="menu"
        :globalFilterFields="['name']"
      >
        <template #empty> No Patients found. </template>
        <template #loading> Loading Patients data. Please wait. </template>

        <Column
          style="width: 100%"
          :sortable="true"
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
          ><template #footer>
            <div class="p-d-flex p-jc-end">
              <span class="p-input-icon-left search">
                <i class="pi pi-search" />
                <InputText
                  class="p-column-filter"
                  v-model="filters['global'].value"
                  placeholder="Patient"
                />
              </span></div></template
        ></Column>
      </DataTable>
    </div>
    <Divider layout="vertical" />
    <div
      class="p-field p-col-12 p-md-5"
      v-if="Object.keys(selectedPatient).length != 0"
    >
      <pre>
      Patient name: {{ selectedPatient.name }}
      Gender:{{ selectedPatient.gender.value }}
      DOB: {{ selectedPatient.dateOfBirth.toDate().toDateString().slice(4) }}
      Weight: {{ selectedPatient.weightKg }}kg
      Height: {{ selectedPatient.heightCm }}cm
      
      
      </pre>
      <ul class="mainKey">
        <li v-for="(key, value) in selectedPatient.medicalHistory" :key="key">
          {{
            value.charAt(0).toUpperCase() +
            value
              .replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5')
              .slice(1)
          }}
          <ul>
            <li v-for="(item, index) in key" :key="item">
              {{
                index.charAt(0).toUpperCase() +
                index
                  .replace(
                    /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g,
                    '$1$4 $2$3$5'
                  )
                  .slice(1)
              }}
              - {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      class="p-field p-col-12 p-md-8 p-fluid p-grid p-jc-center p-ai-center"
      v-else
    >
      <h3>Please Select the patient.</h3>
    </div>
    <Divider
      layout="vertical"
      v-if="Object.keys(selectedPatient).length != 0"
    />
    <div
      class="p-field p-col-12 p-md-3"
      v-if="Object.keys(selectedPatient).length != 0"
    >
      {{ symptoms }}{{ vitalSigns }}
      <Button label="+Record" @click="openNew" />
    </div>
    <Dialog
      v-model:visible="addMedRecDialog"
      :style="{ width: '450px' }"
      header="Doctor Form"
      :modal="true"
      class="p-fluid"
      ><medicalRecord
        v-on:symptoms="getSymptoms($event)"
        v-on:vitalSigns="getVitalSigns($event)"
      />
      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveMedicalRecord"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api'
import medicalRecord from '@/components/MedicalRecord.vue'
import { Timestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default {
  name: 'clinicDashboard',
  components: { medicalRecord },

  data() {
    return {
      patient: null,
      filters: null,
      selectedPatient: {},
      selected: {},
      medRec: {},
      submitted: false,
      addMedRecDialog: false,
      symptoms: {},
      vitalSigns: {},
      time: Timestamp.now(),
    }
  },
  created() {
    this.columns = [{ field: 'name', header: 'Patient List' }]
    this.initFilters()
  },
  mounted() {
    this.loadPatient()
  },

  methods: {
    getSymptoms(e) {
      this.symptoms = e
    },
    getVitalSigns(e) {
      this.vitalSigns = e
    },
    openNew() {
      this.medRec = {}
      this.submitted = false
      this.addMedRecDialog = true
    },
    hideDialog() {
      this.addMedRecDialog = false
      this.submitted = false
    },
    async saveMedicalRecord() {
      this.medRec = {
        symptoms: this.symptoms,
        vitalSigns: this.vitalSigns,
        patient: {
          id: this.selectedPatient.id,
          name: this.selectedPatient.name,
        },
      }
      console.log(this.medRec)
      await setDoc(
        doc(db, 'MedicalRecord', this.selectedPatient.id),
        this.medRec
      )
      this.addMedRecDialog = false
      this.medRec = {}
      console.log(this.medRec)
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    },
    rowClick(event) {
      this.selectedPatient = event.data
    },
    loadPatient() {
      if (this.$store.state.RETRIVE_PATIENTS.length == 0) {
        this.$store.dispatch('showPatients')
        this.patient = this.$store.getters.getRetrivedPatients
      } else {
        this.patient = this.$store.getters.getRetrivedPatients
      }
    },
  },
}
</script>
<style lang="scss">
.p-sortable-column-icon {
  font-size: 0.8rem;
}
.p-datatable-tfoot {
  .cell {
    justify-content: flex-end;
  }
}
.layout-main {
  padding: 2rem;
}

.mainKey {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
