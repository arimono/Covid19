<template>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedPatients.length == 0"
  >
    <h3>No patient has been registered yet.</h3>
  </div>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedPatients.length !== 0"
  >
    <h3>List of patients registered.</h3>
    <DataTable
      @cell-edit-complete="onCellEditComplete"
      editMode="cell"
      class="editable-cells-table"
      :reorderableColumns="true"
      :resizableColumns="true"
      columnResizeMode="fit"
      :paginator="true"
      :rows="10"
      :value="patient"
      responsiveLayout="scroll"
    >
      <Column
        :sortable="true"
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
      <Column field="data.doctor" header="Doctor" :sortable="true">
        <template #editor="{ data, field }">
          <Dropdown
            v-model="data[field]"
            :options="doctors"
            optionLabel="name"
          />
        </template>
      </Column>
      <template #paginatorLeft></template>
      <template #paginatorRight>
        <Button
          type="button"
          @click="$store.dispatch('reload')"
          label="Reload"
        />
      </template>
    </DataTable>
  </div>
</template>

<script>
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
export default {
  name: 'clinicDashboard',
  components: {},
  data() {
    return {
      columns: null,
      patient: null,
      doctors: null,
    }
  },
  created() {
    this.columns = [
      { field: 'data.prefixTitle.value', header: 'Prefix' },
      { field: 'data.name', header: 'Name' },
      { field: 'data.contactInfo.phone', header: 'Phone' },
      { field: 'data.nextOfKin.name', header: 'Next Of Kin' },
    ]
  },
  mounted() {
    this.$store.dispatch('showPatients')
    this.$store.dispatch('showDoctors')
    this.patient = this.$store.getters.getRetrivedPatients
    this.doctors = this.$store.getters.getRetrivedDoctors
  },
  methods: {
    async onCellEditComplete(event) {
      let { data, newValue, field } = event

      data.data[field] = newValue.name
      // this.$store.commit('ADD_DOCTOR_TO_PATIENTS', data)
      console.log('instant', newValue)

      const patientRef = doc(db, 'Patients', data.id)

      // Set the "capital" field of the city 'DC'
      await updateDoc(patientRef, {
        doctor: newValue.name,
      })
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/clinic.scss';
@import '../assets/layout/form.scss';
</style>
