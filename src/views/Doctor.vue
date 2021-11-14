<template>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedDoctors.length == 0"
  >
    <h3>Loading Doctors.</h3>
  </div>
  <div
    class="PatientTable"
    v-show="$store.getters.getRetrivedDoctors.length !== 0"
  >
    <Toast position="bottom-right" />
    <h3>List of Doctors Registered.</h3>
    <DataTable
      editMode="row"
      v-model:editingRows="editingRows"
      @row-edit-save="onRowEditSave"
      class="editable-cells-table"
      :reorderableColumns="true"
      :resizableColumns="true"
      columnResizeMode="fit"
      :paginator="true"
      :rows="10"
      :value="doctors"
      responsiveLayout="scroll"
      v-model:filters="filters"
      filterDisplay="menu"
      :globalFilterFields="[
        'name',
        'gender.value',
        'speciality',
        'graduationYear',
        'degrees',
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
      <template #empty> No doctor found. </template>
      <template #loading> Loading doctor data. Please wait. </template>
      <Column
        :sortable="true"
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
        style="width: 20%"
        ><template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus /> </template
      ></Column>
      <Column :sortable="true" field="gender" header="Gender" style="width: 20%"
        ><template #editor="{ data, field }">
          <Dropdown
            v-model="data[field]"
            :options="gender"
            optionLabel="value"
            placeholder="Gender"
            ><template #option="slotProps">
              <span>{{ slotProps.option.value }}</span>
            </template>
          </Dropdown>
        </template>
        <template #body="slotProps">
          {{ slotProps.data.gender.value }}
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
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
import { FilterMatchMode } from 'primevue/api'
import updateData from '../Services/updateDataService'

export default {
  name: 'doctor',
  components: {},

  data() {
    return {
      editingRows: [],
      columns: null,
      doctors: null,
      filters: null,
      gender: this.$store.state.gender,
    }
  },
  created() {
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'speciality', header: 'Speciality' },
      { field: 'graduationYear', header: 'Graduation Year' },
      { field: 'degrees', header: 'Degrees' },
    ]
    this.initFilters()
  },
  mounted() {
    this.loadDoctor()
  },
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Updated Doctor Successfully',
        detail: 'Message Content',
        life: 3000,
      })
    },
    async onRowEditSave(event) {
      let { newData, index } = event
      this.doctors[index] = newData
      updateData
        .update('Doctors', newData.id, newData)
        .then(this.showSuccess())
        .catch((err) => console.log(err))
    },
    loadDoctor() {
      if (this.$store.state.RETRIVE_PATIENTS.length == 0) {
        this.$store.dispatch('showDoctors')
        this.doctors = this.$store.getters.getRetrivedDoctors
      } else {
        this.doctors = this.$store.getters.getRetrivedDoctors
      }
    },
    clearFilter() {
      this.initFilters()
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/layout/clinic.scss';
@import '../assets/layout/form.scss';
</style>
