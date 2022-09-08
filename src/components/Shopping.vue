<template>
  <div class="shopping">
    <Intro> </Intro>
    <Services> </Services>
    <Footer> </Footer>
  </div>
</template>

<script>
import Intro from "../views/Shop/GoShop-Intro.vue";
import Services from "../views/Shop/GoShop-Services.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Intro,
    Services,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
