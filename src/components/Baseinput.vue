<template>
  <div class="p-field p-col-12 p-md-6">
    <label>{{ label }}</label>
    <InputText
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
    />
  </div>
</template>
<script>
export default {
  props: {
    class: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
}
</script>
