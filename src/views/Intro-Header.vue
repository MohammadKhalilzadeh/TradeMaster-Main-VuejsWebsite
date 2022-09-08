<template>
  <div class="intro-header">
    <center>
      <Navbar></Navbar>
    </center>
  </div>
</template>

<script>
import Navbar from "./Navbar2.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-header {
  background: url("../assets/prodheader.jpg") ;
  background-size: cover ;
  background-repeat: no-repeat;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
}
</style>
