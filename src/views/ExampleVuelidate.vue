<template>
  <form @submit.prevent="submit">
    <input
      type="email"
      placeholder="What's your email"
      v-model="email"
      @blur="$v.email.$touch()"
      :class="{ error: $v.email.$error }"
    />
    <div v-if="$v.email.$error">
      <p class="errorMessage" v-if="!$v.email.email">
        Please enter a valid email
      </p>
      <p class="errorMessage" v-if="!$v.email.required">Email is required</p>
    </div>

    <button :disabled="$v.$invalid" type="submit">Submit</button>
    <p v-if="$v.$anyError">Please fill out the required fields</p>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("Form is good to go!", this.email);
      }
    },
  },
};
</script>
<style>
input:focus {
  border: 1px dashed blue;
}
.error {
  border: 1px solid red;
}
.error:focus,
.error:active {
  border: 1px dashed red;
}
.errorMessage {
  color: red;
}
</style>
