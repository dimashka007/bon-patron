<template>
  <div class="d-flex flex-column my-5 col-6">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="suggestForm.name"
          required
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="suggestForm.email"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Description:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="suggestForm.description"
          required
          placeholder="Enter description of the place"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button variant="primary" @click="onSubmit">Suggest</b-button>
  </div>
</template>

<script>
export default {
  layout: "subpages",
  data() {
    return {
      suggestForm: {
        name: '',
        email: '',
        description: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addSuggest', this.suggestForm)
    }
  }
};
</script>