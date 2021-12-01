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
    <div class="p-field p-col-12 p-md-5" v-else>
      <h3>Please Select the patient.</h3>
    </div>
    <Divider layout="vertical" />
    <div class="p-field p-col-12 p-md-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
        numquam assumenda nobis temporibus ad, sed nesciunt ab ipsum repellat.
        Perspiciatis, voluptas. Autem modi exercitationem tempore, harum non
        maxime laborum.
      </p>
      <Button label="+Record" @click="openNew" />
    </div>
    <Dialog
      v-model:visible="addDoctorDialog"
      :style="{ width: '450px' }"
      header="Doctor Form"
      :modal="true"
      class="p-fluid"
    >
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
          @click="saveDocotr"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api'

export default {
  name: 'clinicDashboard',
  components: {},

  data() {
    return {
      patient: null,
      filters: null,
      selectedPatient: {},
      selected: {},
      addDoctor: {},
      submitted: false,
      addDoctorDialog: false,
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
    openNew() {
      this.addDoctor = {}
      this.submitted = false
      this.addDoctorDialog = true
    },
    hideDialog() {
      this.addDoctorDialog = false
      this.submitted = false
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    },
    rowClick(event) {
      this.selectedPatient = event.data
      console.log(this.selectedPatient)
    },
    loadPatient() {
      if (this.$store.state.RETRIVE_PATIENTS.length == 0) {
        this.$store.dispatch('showPatients')
        this.patient = this.$store.getters.getRetrivedPatients
      } else {
        this.patient = this.$store.getters.getRetrivedPatients
      }
    },
    addMedicalRecord() {},
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
