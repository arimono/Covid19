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
    <h2>List of Doctors Registered</h2>
    <Toolbar class="p-mb-4">
      <template #left>
        <Button label="New" icon="pi pi-plus" class="p-mr-2" @click="openNew" />
      </template>
      <template #right>
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
    </Toolbar>

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
        style="width: 5%; min-width: 8rem; padding: 0"
        bodyStyle="text-align:center"
      ></Column>
      <Column>
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="confirmDeleteDoctor(slotProps.data)"
          />
        </template>
      </Column>

      <template #paginatorLeft
        ><Button
          type="button"
          @click="$store.dispatch('reload')"
          label="Reload"
      /></template>
      <template #paginatorRight>
        <router-link :to="{ name: 'ClinicDashboard' }">
          <Button type="button" label="To Patient" />
        </router-link>
      </template>
    </DataTable>
    <Dialog
      v-model:visible="addDoctorDialog"
      :style="{ width: '450px' }"
      header="Doctor Form"
      :modal="true"
      class="p-fluid"
    >
      <div class="p-field" v-for="col of columns" :key="col.field">
        <label for="speciality">{{ col.header }}</label>
        <InputText
          :id="col.field"
          v-model="addDoctor[col.field]"
          required="true"
          :class="{ 'p-invalid': submitted && !addDoctor[col.field] }"
        />
        <small class="p-error" v-if="submitted && !addDoctor[col.field]"
          >{{ col.header }} is required.</small
        >
      </div>
      <div class="p-field">
        <Dropdown
          v-model="addDoctor.gender"
          :options="gender"
          optionLabel="value"
          placeholder="Gender"
        />
      </div>
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
    <Dialog
      v-model:visible="deleteDoctorDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span v-if="addDoctor"
          >Are you sure you want to delete <b>{{ addDoctor.name }}</b
          >?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteDoctorDialog = false"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteDoctor"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api'
import updateData from '../Services/updateDataService'
import addData from '../Services/addDataServices'
import deleteData from '../Services/deleteDataService'

export default {
  name: 'doctor',
  components: {},

  data() {
    return {
      editingRows: [],
      columns: null,
      doctors: null,
      filters: null,
      addDoctor: null,
      submitted: false,
      addDoctorDialog: false,
      gender: this.$store.state.gender,
      deleteDoctorDialog: false,
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
    confirmDeleteDoctor(Doctor) {
      this.addDoctor = Doctor
      this.deleteDoctorDialog = true
    },
    deleteDoctor() {
      this.doctors = this.doctors.filter((val) => val.id !== this.addDoctor.id)
      deleteData
        .delete('Doctors', this.addDoctor.id)
        .then((this.deleteDoctorDialog = false), this.showDeleteSuccess())
        .catch((err) => console.log(err))
    },
    openNew() {
      this.addDoctor = {}
      this.submitted = false
      this.addDoctorDialog = true
    },
    hideDialog() {
      this.addDoctorDialog = false
      this.submitted = false
    },
    async saveDocotr() {
      var doctor = {
        name: this.addDoctor.name,
        speciality: this.addDoctor.speciality,
        graduationYear: this.addDoctor.graduationYear,
        degrees: this.addDoctor.degrees,
        gender: this.addDoctor.gender,
        id: '',
      }
      await addData
        .create('Doctors', doctor)
        .then(
          (this.submitted = true),
          (this.addDoctorDialog = false),
          (this.doctors = null),
          (this.addDoctor = {}),
          console.log(this.doctors)
        )
        .catch((err) => console.log(err))
      await this.$store.commit('CLEAR_RETRIVE_DOCTORS')
      await this.$store.dispatch('showDoctors')
      this.doctors = await this.$store.getters.getRetrivedDoctors
      console.log(this.doctors)
    },
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Updated Doctor Successfully',
        detail: 'Message Content',
        life: 3000,
      })
    },
    showDeleteSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Deleted Doctor Successfully',
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
