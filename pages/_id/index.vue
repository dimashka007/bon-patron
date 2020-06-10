<template>
  <div class="row mb-5">
    <div class="col-6 d-flex flex-wrap justify-content-center">
      <div v-for="img in post[0].images" class="col-6 mb-4">
        <img style="width: 100%" :src="img" alt />
      </div>
    </div>
    <div class="col-6">
      <div class="d-flex flex-column">
        <p class="font-weight-bold">{{ post[0].category }}/{{post[0].location}}</p>
        <h3 class="font-weight-bold">{{ post[0].name }}</h3>
        <p class="font-weight-bold">{{ post[0].address}}</p>
        <p>{{ post[0].description}}</p>
        <p>{{ post[0].personalTouch}}</p>
        <b-button variant="outline-primary" class="mt-5"><a style="color: black; text-decoration: none" target="_blank" :href="post[0].cta">CTA</a></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "subpages",
  asyncData(context) {
    return axios
      .get(`/api/posts?post=${context.params.id}`)
      .then(res => {
        return { post: res.data };
      })
  },
};
</script>