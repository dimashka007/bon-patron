<template>
  <div class="d-flex flex-column">
    <div class="col-7 mx-auto my-5">
      <div class="header d-flex justify-content-between">
        <nuxt-link to="/">
          <h1 class="logo">
            Bon<span>Patron</span>
          </h1>
        </nuxt-link>
        <b-button variant="primary">
          <nuxt-link to="/suggest">Suggest an interesting spot</nuxt-link>
        </b-button>
      </div>
    </div>
    <div class="col-5 mx-auto mb-5">
      <div class="col-12 mx-auto info text-center">
        <p class="font-weight-bold">{{ websiteDataMain }}</p>
      </div>
    </div>
    <div class="col-7 mx-auto">
      <nuxt />
    </div>
    <div class="col-7  mx-auto">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  computed: {
    websiteDataMain() {
      return this.$store.getters.websiteDataMain
    },
  },
  created() {
    this.$store.dispatch('getData')
  }
};
</script>


