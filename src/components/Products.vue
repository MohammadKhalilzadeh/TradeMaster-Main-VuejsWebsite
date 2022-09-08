<template>
  <div class="products">
    <Products> </Products>
    <Footer> </Footer>
  </div>
</template>

<script>
import Products from "../views/Products-Items.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Products,
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
