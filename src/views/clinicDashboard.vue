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
    <Toast />
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
      <Column field="doctor" header="Doctor" :sortable="true">
        <template #editor="{ data, field }">
          <Dropdown
            v-model="data[field]"
            :options="doctors"
            optionLabel="name"
            placeholder="Assign Doctor"
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
import updateData from '../Services/updateDataService'

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
      { field: 'prefixTitle.value', header: 'Prefix' },
      { field: 'name', header: 'Name' },
      { field: 'contactInfo.phone', header: 'Phone' },
      { field: 'nextOfKin.name', header: 'Next Of Kin' },
    ]
  },
  mounted() {
    this.$store.dispatch('showPatients')
    this.$store.dispatch('showDoctors')
    console.log(this.$store.getters.getRetrivedPatients)
    this.patient = this.$store.getters.getRetrivedPatients
    this.doctors = this.$store.getters.getRetrivedDoctors
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
    async onCellEditComplete(event) {
      let { data, newValue, field } = event

      data[field] = newValue.name
      //enable this when need offline data but havent implemented yet
      // this.$store.commit('ADD_DOCTOR_TO_PATIENTS', data)
      updateData
        .update('Patients', data.id, { doctor: newValue.name })
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
