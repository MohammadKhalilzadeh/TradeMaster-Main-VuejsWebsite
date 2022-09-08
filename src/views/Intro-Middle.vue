<template>
  <div class="intro-middle">
    <center>
      <Navbar></Navbar>
    </center>
      <div class="Texty">
        <center>
          <img src="../assets/sideplate1.png" alt="TradeMaster" srcset="">
        </center>
        <p>
          {{ $t("Home_intro") }}
        </p>
      </div>
  </div>
</template>

<script>
import Navbar from "./Navbar2.vue";
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
.intro-middle {
  overflow: hidden;
  width: 100%;
  background: url("../assets/header1.jpeg") ;
  color: #313131;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

img {
  width: 50%;
}

@media screen and (min-width: 320px) {

  .Texty {
    padding: 5%;
    width: 80vw;
    margin: 5vh 10vw ;
    color: #fff;
    background: #262626af;
    text-align: justify;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
  }
}

@media screen and (min-width: 500px) {

  .Texty {
    padding: 5%;
    width: 80vw;
    margin: 10vh 10vw ;
    color: #fff;
    background: #262626af;
    text-align: justify;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
  }
}

@media (min-width: 900px) {

  .Texty {
    padding: 5%;
    width: 60vw;
    margin: 10vh 20vw ;
    color: #fff;
    background: #262626af;
    text-align: justify;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
  }
}
</style>
