<template>
  <div>
    <div class="d-flex justify-content-center mb-3">
      <span style="cursor: pointer" @click="filterCategory(item)" v-for="(item, index) in categories" class="mx-2" :key="index">{{ item }}</span>
    </div>
    <div class="col-9 mx-auto info text-center">
      <p class="font-weight-bold mb-5">{{ websiteData }}</p>
    </div>
    <Posts />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  components: {
    Posts
  },
  data() {
    return {
      infoText:
        "Cyprus is full of incredible rtisan baking, brewing, fermenting, crafting, and growing unique products. Try them out and help the local economy"
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
   websiteData() {
      return this.$store.getters.websiteDataSub
    },
  },
  methods: {
    filterCategory(category) {
      this.$store.dispatch('filterPosts', category)
    }
  },
  created() {
     this.$store.dispatch('getCategories');
   }
};
</script>

<style>
</style>
