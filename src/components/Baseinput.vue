<template>
  <label>{{ label }}</label>
  <InputText
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
  />
</template>
<script>
export default {
  props: {
    class: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
