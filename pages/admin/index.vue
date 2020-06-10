<template>
  <div>
    <p>Main page info</p>
    <b-form-textarea
      id="textarea"
      v-model="websiteDataMainText"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <p>Subpages info</p>
    <b-form-textarea
      id="textarea"
      v-model="websiteDataSubText"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button class="my-4" variant="primary" @click="updateText">Update header texts</b-button>
    <p>Amount of suggested posts: {{ suggestedPosts.length }}</p>
    <b-list-group class="mb-5">
      <b-list-group-item v-for="(item, index) in suggestedPosts" :key="index">
        Name: {{ item.name }}
        <br />
        Email: {{ item.email }}
        <br />
        Description: {{ item.description }}
        <br />
        <b-button variant="primary" @click="deleteSuggest(item._id)">Delete</b-button>
      </b-list-group-item>
    </b-list-group>
    <div class="d-flex flex-row flex-wrap align-items-center my-5 justify-content-between">
      <b-button class="m-3" v-for="(category, index) in categories" :key="index" variant="primary" @click="removeCategory(category)">
        {{ category }}
        X
      </b-button>
      <b-input-group>
        <b-form-input v-model="newCategory"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" @click="addCategory">Add category</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <Posts isAdmin />
    <b-button class="my-4" variant="primary">
          <nuxt-link to="/admin/newPost">Create new post</nuxt-link>
        </b-button>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";

export default {
  layout: "subpages",
  components: {
    Posts
  },
  data() {
    return {
      newCategory: '',
      websiteDataMainText: '',
      websiteDataSubText: ''
    };
  },
  computed: {
    suggestedPosts() {
      return this.$store.getters.suggestedPosts;
    },
    categories() {
      return this.$store.getters.categories;
    },
    websiteDataMain() {
      return this.$store.getters.websiteDataMain
    },
     websiteDataSub() {
      return this.$store.getters.websiteDataSub
    },
  },
  watch: {
    websiteDataMain(value){
      this.websiteDataMainText = value
    },
    websiteDataSub(value){
      this.websiteDataSubText = value
    }
  },
  methods: {
    async deleteSuggest(index) {
      await this.$store.dispatch('deleteSuggest', index)
    },
    async addCategory() {
      await this.$store.dispatch('addCategory', this.newCategory)
      this.newCategory = ''
    },
    async removeCategory(category) {
      await this.$store.dispatch('deleteCategory', category)
    },
    async updateText() {
      await this.$store.dispatch('updateText', {
        mainText: this.websiteDataMainText,
        subText: this.websiteDataSubText
      })
    },
  },
  created() {
     this.$store.dispatch('getCategories')
     this.$store.dispatch('getSuggest')
     this.$store.dispatch('getData')
  }
};
</script>