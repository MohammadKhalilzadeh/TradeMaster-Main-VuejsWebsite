<template>
  <div class="intro-middle">
    <center>
      <Navbar></Navbar>
    </center>
    <div class="section1">
      <div class="row row-cols-auto">
          <div class="col1">
            <img src="../assets/sideplate1.png" alt="sideplate1">
          </div>
          <div class="col1">
            <img src="../assets/sideplate2.png" alt="sideplate2">
          </div>

      </div>
    </div>
    <div class="section2">
      <center>
        <div class="title">
          <h2>
            {{ $t("Home_intro_title") }}
          </h2>
        </div>
        <p style="width:90%;margin:5%;padding:1%;">
          {{ $t("Home_intro") }}
        </p>
      </center>
    </div>
    <div class="section3">
      <center>
        <div class="title">
          <h2>
            {{ $t("Home_intro_title4") }}
          </h2>
        </div>
        <div class="row row-cols-auto">

          <div class="col">
            <div class="card">
              <img src="../assets/sideplate1.png" alt="sideplate1">
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="../assets/BTS.png" alt="sideplate1">
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="../assets/EC.png" alt="sideplate1">
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="../assets/fk.png" alt="sideplate1">
            </div>
          </div>

        </div>
      </center>
    </div>
  </div>
</template>

<script>

import Navbar from "./Navbar2.vue";

export default {
  props: {
    msg: String,
  },
  methods: {
  },
  components:{
    Navbar,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-middle {
  overflow: hidden;
  background: url("../assets/header1.jpeg") ;
  background-size: cover ;
  color: #313131;
}

.section1{
  width: 100%;
}

.section2{
  width: 100%;
}
.section3{
  width: 100%;
}


img{
  width: 90%;
  margin: 0% 5%;
}


.card {
 width: 90%;
 background: white;
 box-shadow: 4px 4px 4px 4px #646466;
 border-radius: 10px;
 color: #F9F9F9;
 padding: 5%;
 margin: 5% 5% 8% 5%;
 transition: all .3s;
}

.card:hover {
 margin-top: -30px;
}

.row{
  width: 100%;
}

.title{
  width: 100%;
  margin: 0% 0% 3% 0%;
  padding: 1%;
  background-color: #80B918;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button{
  width: 80%;
  margin: 10%;
}

@media screen and (min-width: 320px) {
  .col{
    width: 50%;
    padding: 1%;
  }

  .col1{
    width: 100%;
  }

  #team{
    width: 50%;
    margin: 1% 25% 10% 25%;
    background-color: #80B918;
    color: white;
    border-radius: 15px;
    padding: 1%;
    border: 1px solid #80B918;
  }
}

@media screen and (min-width: 500px) {
  .col{
    width: 33.2%;
    padding: 1%;
  }

  .col1{
    width: 50%;
  }

  #team{
    width: 30%;
    margin: 1% 25% 10% 25%;
    background-color: #80B918;
    color: white;
    border-radius: 15px;
    padding: 1%;
    border: 1px solid #80B918;
  }
}

@media (min-width: 900px) {
  .col{
    width: 33.2%;
    padding: 1%;
  }

  .col1{
    width: 50%;
  }

  #team{
    width: 20%;
    margin: 1% 25% 10% 25%;
    background-color: #80B918;
    color: white;
    border-radius: 15px;
    padding: 1%;
    border: 1px solid #80B918;
  }  
}

#team:hover{
    background-color: white;
    color: #80B918;
    border: 1px solid #80B918;
  }
</style>
