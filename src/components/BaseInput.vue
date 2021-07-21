<template>
  <div>
    <label v-if="label" for="">{{ label }}</label>
    <input @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  //tell that the attributes sent to the component don't go to the <div> which is the default behavior.
  //then, we can use v-bind="$attrs" where we want the extra attributes to be added
  inheritAttrs: false,
  props: {
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
