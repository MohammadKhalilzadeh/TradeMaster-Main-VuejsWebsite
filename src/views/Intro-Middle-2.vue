<template>
  <div class="intro-middle">
  <center>
    <div id="head">
      <h2>
        {{ $t("Home_intro_title") }}
      </h2>
    </div>
  </center>
    <div class="Texty">
      <p style="width:90%;margin:5%;padding:1%;">
        {{ $t("Home_intro") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    SeeMore: function () {
      this.$router.push({
        name: "ARM",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-middle {
  overflow: hidden;
  width: 100%;
  min-height: 80vh;
  color: white;
  background: url("../assets/header2.jpeg") ;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.2),
    8px 8px 20px 4px rgba(0, 0, 0, 0.19);
}

#head {
  width: 100%;
  padding: 1%;
  background-color: #26262694;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    text-align: justify;
    color: #fff;
    background: #262626af;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
  }
}
</style>
