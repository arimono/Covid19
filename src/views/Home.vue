<template>
  <div class="PatientRegistration">
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
  </div>
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'Home',
  components: {
    Button: Button,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.RegHeader {
  margin: 40px 0;
}
h1 {
  text-align: center;
}
p {
  font-size: 1.4rem;
  text-align: center;
}
a {
  color: #42b983;
}
.RegButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
}
.RegButton button {
  height: 4rem;
  font-size: 1.7rem;
}
</style>
