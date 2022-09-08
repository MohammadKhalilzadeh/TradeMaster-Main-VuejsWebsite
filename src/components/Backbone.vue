<template>
  <div class="backbone">
   <Middle> </Middle>
    <Middle2> </Middle2>
    <Middle3> </Middle3>
    <Footer> </Footer>
  </div>
</template>

<script>
import Middle2 from "../views/Intro-Middle-2.vue";
import Middle3 from "../views/Intro-Middle-3.vue";
import Middle from "../views/Intro-Middle.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Middle,
    Middle2,
    Middle3,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
