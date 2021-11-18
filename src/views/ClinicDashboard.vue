<template>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedPatients.length == 0"
  >
    <h3>Loading Patients.</h3>
  </div>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedPatients.length !== 0"
  >
    <Toast />
    <h3>List of Patients Registered.</h3>
    <DataTable
      v-model:editingRows="editingRows"
      @row-edit-save="onRowEditSave"
      editMode="row"
      class="editable-cells-table"
      :reorderableColumns="true"
      :resizableColumns="true"
      columnResizeMode="fit"
      :paginator="true"
      :rows="10"
      :value="patient"
      responsiveLayout="scroll"
      v-model:filters="filters"
      filterDisplay="menu"
      :globalFilterFields="[
        'name',
        'doctor',
        'representative.name',
        'contactInfo.phone',
        'nextOfKin.name',
      ]"
    >
      <template #header>
        <div class="p-d-flex p-jc-end">
          <span class="p-input-icon-left search">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
          <Button
            type="button"
            label="Clear"
            class="p-button-outlined"
            @click="clearFilter()"
          />
        </div>
      </template>
      <template #empty> No Patients found. </template>
      <template #loading> Loading Patients data. Please wait. </template>
      <Column
        :sortable="true"
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>

      <Column
        v-for="col of editColumns"
        :field="col.field"
        :header="col.header"
        :sortable="true"
        :key="col.field"
      >
        <template #editor="{ data, field }">
          <Dropdown
            v-model="data[field]"
            :options="doctors"
            optionLabel="name"
            placeholder="Doctors"
            ><template #option="slotProps">
              <span>{{ slotProps.option.name }}</span>
            </template>
          </Dropdown>
        </template>
        <template #body="slotProps">
          {{ slotProps.data.doctor.name }}
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
      <template #paginatorLeft
        ><Button
          type="button"
          @click="$store.dispatch('reload')"
          label="Reload"
      /></template>
      <template #paginatorRight>
        <router-link :to="{ name: 'Doctor' }">
          <Button type="button" label="To Doctor" />
        </router-link>
      </template>
    </DataTable>
  </div>
</template>

<script>
import updateData from '../Services/updateDataService'
import { FilterMatchMode } from 'primevue/api'

export default {
  name: 'clinicDashboard',
  components: {},

  data() {
    return {
      editingRows: [],
      columns: null,
      patient: null,
      doctors: null,
      filters: null,
      dropdownCol: null,
    }
  },
  created() {
    this.columns = [
      { field: 'prefixTitle.value', header: 'Prefix' },
      { field: 'name', header: 'Name' },
      { field: 'contactInfo.phone', header: 'Phone' },
      { field: 'nextOfKin.name', header: 'Next Of Kin' },
    ]
    this.editColumns = [{ field: 'doctor', header: 'Doctor' }]

    this.initFilters()
  },
  mounted() {
    this.loadPatient()
    this.loadDoctor()
  },
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Assigned Doctor Successfully',
        detail: 'Message Content',
        life: 3000,
      })
    },
    clearFilter() {
      this.initFilters()
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    },
    loadDoctor() {
      if (this.$store.state.RETRIVE_DOCTORS.length == 0) {
        this.$store.dispatch('showDoctors')
        this.doctors = this.$store.getters.getRetrivedDoctors
        console.log('doctor is loaded')
      } else {
        this.doctors = this.$store.getters.getRetrivedDoctors
        console.log('doctor isnt loaded')
      }
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
    async onRowEditSave(event) {
      let { newData, index } = event
      this.patient[index] = newData
      console.log(this.patient[index])
      //enable this when need offline data but havent implemented yet
      // this.$store.commit('ADD_DOCTOR_TO_PATIENTS', data)
      updateData
        .update('Patients', newData.id, {
          doctor: { name: newData.doctor.name, id: newData.doctor.id },
        })
        .then(this.showSuccess())
        .catch((err) => console.log(err))
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/clinic.scss';
@import '../assets/layout/form.scss';
</style>
