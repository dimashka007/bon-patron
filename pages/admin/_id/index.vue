<template>
  <div>
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="newPost[0].name"
          required
          placeholder="Enter location name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="newPost[0].address"
          required
          placeholder="Enter address"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Description:"
        label-for="input-3"
      >
        <b-form-textarea
          id="input-3"
          v-model="newPost[0].description"
          required
          placeholder="Enter description"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Personal touch:"
        label-for="input-4"
      >
        <b-form-textarea
          id="input-4"
          v-model="newPost[0].personalTouch"
          required
          placeholder="Enter personal touch"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Location:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="newPost[0].location"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>
      <multiselect v-model="newPost[0].category" :options="categories" class="my-4"></multiselect>
      <p>
        Images:
        <b-list-group>
          <b-list-group-item class="d-flex flex-row justify-content-between align-items-center" v-for="(image, index) in newPost[0].images" :key="index">
            <img :src="image" style="height: 100px" alt="">
            <span style="cursor: pointer" @click="deleteImge(index)">DELETE</span>
          </b-list-group-item>
        </b-list-group>
      </p>
      <b-form-group
        id="input-group-7"
        label="Image:"
        label-for="input-7"
      >
        <b-form-input
          id="input-7"
          v-model="imageUrl"
          required
          placeholder="Paste url to image"
        ></b-form-input>
        <b-button class="mt-3" variant="primary" @click="pushImage()">Add image Url</b-button>
      </b-form-group>
      <b-form-group
        id="input-group-8"
        label="CTA:"
        label-for="input-8"
      >
        <b-form-input
          id="input-8"
          v-model="newPost[0].cta"
          required
          placeholder="Enter CTA link"
        ></b-form-input>
      </b-form-group>
      <b-button class="my-5" variant="primary" @click="updatePost()">Update Post</b-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: 'subpages',
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  asyncData(context) {
    return axios
      .get(`/api/posts?post=${context.params.id}`)
      .then(res => {
        return { newPost: res.data };
      })
  },
  data() {
    return {
      imageUrl: '',
    } 
  },
  methods: {
    updatePost() {
      this.$store.dispatch('updatePost', this.newPost[0])
    },
    deleteImge(index) {
        this.newPost[0].images.splice(index, 1);
    }
  }
};
</script>