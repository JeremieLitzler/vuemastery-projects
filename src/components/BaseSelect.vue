<template>
  <div>
    <label v-if="label" for="">{{ label }}</label>
    <select @input="updateValue" v-bind="$attrs">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  //tell that the attributes sent to the component don't go to the <div> which is the default behavior.
  //then, we can use v-bind="$attrs" where we want the extra attributes to be added
  inheritAttrs: false,
  props: {
    options: { type: Array, required: true },
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(htmltEvent) {
      //event is the html event, not the data event in the app ;-)
      this.$emit("input", htmltEvent.target.value);
    },
  },
};
</script>

<style scoped></style>
