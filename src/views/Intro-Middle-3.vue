<template>
  <div class="intro-middle">
  <center>
    <div id="head">
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
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    SeeMore: function () {
      window.open("https://farshekhatam.ir/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-middle {
  overflow: hidden;
  width: 100%;
  background : url("../assets/header3.webp") ;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  color: white ;
  box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.2),
    8px 8px 20px 8px rgba(0, 0, 0, 0.19);
}

#head {
  width: 100%;
  padding: 1%;
  background-color: #26262694;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



img{
  width: 90%;
  margin: 0% 5%;
}


.card {
 width: 90%;
 background: rgba(255, 255, 255, 0.158);
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
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
  padding: 2%;
}


button {
  width: 30%;
  margin: 1% 35%;
  padding: 1%;
  border-radius: 15px;
  border: 2px solid #e9e9e9;
  background: #313131;
  color: #e9e9e9;
}

button:hover {
  border: 2px solid #313131;
  background: #e9e9e9;
  color: #313131;
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
