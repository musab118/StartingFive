<template>
  <div id="app">
    <Navbar />
    <div id="app-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// Imports the Navbar and the Footer files
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },
  beforeCreate: function() {
    // on boot check whether the user is authenticated or logged in.
    this.$store.dispatch("authenticate");
  }
};
</script>