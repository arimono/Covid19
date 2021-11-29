<template>
  <div class="p-fluid p-grid">
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
    <div class="p-field p-col-12 p-md-6">
      <pre>
      {{ selectedPatient.name }}
      {{ selectedPatient.gender.value }}
      {{ selectedPatient }}
      {{ selectedPatient.name }}
      </pre>
    </div>
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
        console.log('patient is loaded')
      } else {
        this.patient = this.$store.getters.getRetrivedPatients
        console.log('patient isnt loaded')
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
</style>
