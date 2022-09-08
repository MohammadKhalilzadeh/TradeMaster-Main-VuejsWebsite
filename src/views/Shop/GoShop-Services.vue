<template>
  <div class="goshop-services">
    
    <div class="header">
      <center>
        <h3>{{ $t("Go_Shopping_serv") }}</h3>
      </center>
    </div>

    <div class="service">
      <h4>{{ $t("Go_shop_title1") }}</h4>
      <p>{{ $t("Go_Shopping_Owners") }}</p>
    </div>
    <div class="service">
      <h4>{{ $t("Go_shop_title2") }}</h4>
      <p>{{ $t("Go_Shopping_C") }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.header{
  width: 100%;
  padding: 1%;
  background-color: #26262694;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.banner {
  width: 100%;
}

@media screen and (min-width: 300px) {
  .goshop-services {
    background: url("../../assets/shop-body.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    min-height: 80vh;
  }

  .service {
    width: 80%;
    margin: 5vh 10vw;
    padding: 5%;
    background: #262626ce;
    color: white;
    border-radius: 25px;
  }
}

@media screen and (min-width: 500px) {
  .goshop-services {
    background: url("../../assets/shop-body.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    min-height: 80vh;
  }

  .service {
    width: 80%;
    margin: 3vh 10vw;
    padding: 5%;
    background: #262626ce;
    color: white;
    border-radius: 25px;
  }
}

@media screen and (min-width: 900px) {
  .goshop-services {
    background: url("../../assets/shop-body.webp") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    min-height: 100vh;
  }

  .service {
    width: 80%;
    margin: 5vh 10vw;
    padding: 5%;
    background: #262626ce;
    color: white;
    border-radius: 25px;
  }
}

</style>
