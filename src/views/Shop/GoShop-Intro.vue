<template>
  <div class="goshop-intro">
    <div class="header">
      <center>
        <Navbar></Navbar>
      </center>
    </div>

    <div class="tmbody">
      <center>
        <h1>
          {{ $t("Go_Shopping") }}
        </h1>
      </center>
      <div class="intro">
        <h3>
          {{ $t("Go_Shopping_Q") }}
        </h3>
        <p>
          {{ $t("Go_Shopping_Desc") }}
        </p>
      </div>
      <center>
        <button>
          {{ $t("dwnlod_btn") }}
        </button>
      </center>
    </div>

  </div>
</template>

<script>

import Navbar from "../Navbar2.vue";

export default {
  props: {
    msg: String,
  },
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  padding: 2%;
}

.intro {
  width: 90%;
  margin: 3% 5%;
}

p {
  width: 100%;
  justify-content: stretch;
}

button {
  width: 30%;
  margin: 0% 35%;
  padding: 1%;
  border-radius: 15px;
  background-color: white;
  color: #262626ce;
  border: 1px solid white;
}

button:hover {
  background-color: #262626ce;
  color: white;
  border: 1px solid white;
}

@media screen and (min-width: 300px) {
  .goshop-intro {
    min-height: 100vh;
    background: url("../../assets/shop-header.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
  }

  .tmbody{
    background: #262626ce;
    width: 80%;
    margin: 1% 10%;
    padding: 3%;
    color: white;
    border-radius: 25px;
  }
}

@media screen and (min-width: 500px) {
  .goshop-intro {
    min-height: 100vh;
    background: url("../../assets/shop-header.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
  }

  .tmbody{
    background: #262626ce;
    width: 80%;
    margin: 1% 10%;
    padding: 3%;
    color: white;
    border-radius: 25px;
  }
}

@media screen and (min-width: 900px) {
  .goshop-intro {
    min-height: 100vh;
    background: url("../../assets/shop-header.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
  }

  .tmbody{
    background: #262626ce;
    width: 80%;
    margin: 1% 10%;
    padding: 3%;
    color: white;
    border-radius: 25px;
  }
}

</style>
