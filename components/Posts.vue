<template>
  <div class="row flex-wrap">
      <div class="post col-3 mb-4" v-for="(post, index) in posts" :key="index">
        <div style="height: 100%" class="d-flex flex-column justify-content-between mb-4">
          <img style="width: 100%; height: auto" :src="post.previewImg"/>
          <div class="d-flex flex-column mt-3">
            <p class="mb-0">{{ post.category }}/{{ post.location }}</p>
            <h2>{{ post.name }}</h2>
            <nuxt-link v-if="!isAdmin" style="color: black" :to="`/${post._id}`"><span style="cursor: pointer">Learn More</span></nuxt-link>
            <template v-else>
              <nuxt-link  style="color: black" :to="`/admin/${post._id}`"><span style="cursor: pointer">Edit Post</span></nuxt-link>
              <b-button variant="primary" @click="deletePost(post._id)">Delete</b-button>
            </template>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: false
    },
  },
  computed: {
     posts() {
      return this.$store.getters.posts;
    }
  },
  created(){
     this.$store.dispatch('getPosts');
  },
  methods: {
    deletePost(index) {
       this.$store.dispatch('deletePost', index);
    }
  }
}
</script>