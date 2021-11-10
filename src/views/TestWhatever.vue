<template>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedPatients.length !== 0"
  >
    <h3>List of patients registered.</h3>
    <DataTable
      :paginator="true"
      :rows="10"
      :value="patient"
      responsiveLayout="scroll"
    >
      <Column
        :paginator="true"
        :sortable="true"
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
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
// import { db } from '@/firebase'
// import { collection, getDocs } from 'firebase/firestore'

export default {
  name: 'ClinicAssist',
  components: {},
  data() {
    return { columns: null, patient: null }
  },
  created() {
    this.columns = [
      { field: 'prefixTitle.value', header: 'Prefix' },
      { field: 'name', header: 'Name' },
      { field: 'relationship', header: 'Relationship' },
      { field: 'contactInfo.phone', header: 'Phone' },
      { field: 'nextOfKin.name', header: 'Next Of Kin' },
    ]
  },
  mounted() {
    this.$store.dispatch('showPatient')
    this.patient = this.$store.getters.getRetrivedPatients
  },
  methods: {},
}
</script>
<style lang="scss">
@import '../assets/layout/clinic.scss';
@import '../assets/layout/form.scss';
</style>
