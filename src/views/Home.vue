<template>
  <div class="PatientRegistration">
    <Dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '80vw' }"
      :style="{ width: '50vw' }"
      position="top"
    >
      <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
        <i
          class="pi pi-exclamation-circle"
          :style="{ fontSize: '6rem', color: 'red' }"
        ></i>
        <h2><b>Warning!</b></h2>
        <p
          :style="{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            textIndent: '1rem',
            textAlign: 'center',
            margin: '2rem ',
          }"
        >
          <b>You are about to delete the local cache!</b><br />
          Use this Feature only when you want to resubmit
          <span style="color: red">another Client Form</span>
          or in case something goes wrong and
          <span style="color: red">doesn't work anymore.</span>
          This won't affect the already submitted Data.
          <br />
        </p>
      </div>
      <template #footer>
        <div class="p-d-flex p-jc-center">
          <Button label="Cancel" @click="cancelDialog" class="p-button-text" />
          <Button label="OK" @click="confirmDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>
    <h1>Patient Registration Form (လူနာမှတ်တမ်းတင် ပုံစံ)</h1>
    <div class="RegHeader">
      <p>
        We provide COVID care services ONLY for the families of YTU teachers and
        families of YTU/PTU alumni graduating in 2003 Oct and 2004 Apr batches.
        <br /><br />
        ကျွန်ုပ်တို့အဖွဲ့သည် YTU/PTU မှ ဆရာဆရာမများ၊ သူတို့၏ မိသားစုများ၊ 2003 -
        2004 YTU/PTU‌ ကျောင်းသားကျောင်းသူဟောင်းများ၊ သူတို့၏ မိသားစုများကို
        ကိုဗစ်ရောဂါ ခံစားနေရပါက အခမဲ့ ကျန်းမာ‌ရေးစောင့်ရှောက်မှု ပေးရန်
        စီစဉ်ထားခြင်း ဖြစ်ပါသည်။ အထက်ဖော်ပြပါ သူများ မဟုတ်ပါက ကျနော်တို့၏
        ကျန်းမာရေး စောင့်ရှောက်မှု အကူအညီများကို မပေးနိုင်ပါကြောင်း ဝမ်းနည်းစွာ
        ကြိုတင် အသိပေးအပ်ပါသည်။
      </p>
    </div>
    <div class="RegButton">
      <router-link :to="{ name: 'ClientForm' }"
        ><Button
          label="Agreed and Proceed to Form"
          class="p-button-raised p-button-text"
      /></router-link>
    </div>
    <div class="btmPage btmPosition">
      <Button
        type="button"
        @click="ConfirmDelete()"
        label="Clear Cache"
        class="p-button-raised p-button-text pagButton"
      />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'Home',
  components: {
    Button: Button,
  },
  data() {
    return { showMessage: false }
  },
  methods: {
    ConfirmDelete() {
      this.toggleDialog()
    },
    toggleDialog() {
      this.showMessage = !this.showMessage
    },
    cancelDialog() {
      this.showMessage = !this.showMessage
    },
    confirmDialog() {
      this.showMessage = !this.showMessage

      localStorage.clear()
      window.location.reload()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/layout/form.scss';
</style>
