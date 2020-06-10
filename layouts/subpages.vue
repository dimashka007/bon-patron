<template>
  <div class="d-flex flex-column">
    <div class="col-7 mx-auto my-5">
      <div class="header d-flex justify-content-between">
        <nuxt-link to="/">
          <h1 class="logo">
            Bon<span>Patron</span>
          </h1>
        </nuxt-link>
      </div>
    </div>
    <div class="col-5 mx-auto mb-5">
      <div class="col-10 mx-auto info text-center">
        <p class="font-weight-bold">{{ websiteData }}</p>
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
    websiteData() {
      return this.$store.getters.websiteDataSub
    },
    
  },
  created() {
    this.$store.dispatch('getData')
  }
};
</script> 