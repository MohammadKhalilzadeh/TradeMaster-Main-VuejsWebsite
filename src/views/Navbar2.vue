<template>
  <div class="navigator">
    <center>
      <div class="row row-cols-4">
        <div class="col" @click="handleChange(en)">
          <a href="">
            <CountryFlag country='us' size='normal'></CountryFlag>
          </a>
        </div>
        <div class="col" @click="handleChange(fr)">
          <a href="">
            <CountryFlag country='fr' size='normal'></CountryFlag>
          </a>
        </div>
        <div class="col" @click="handleChange(fa)">
          <a href="">
            <CountryFlag country='ir' size='normal'></CountryFlag>
          </a>
        </div>
        <div class="col" @click="handleChange(ar)">
          <a href="">
            <CountryFlag country='ae' size='normal'></CountryFlag>
          </a>
        </div>
      </div>
    </center>
    
<div class="scrollmenu">

  <router-link to="/products">
    {{ $t("Button_6") }}
  </router-link>

  <router-link :to="{ name: 'TM Shopping' }">
    {{ $t("Button_3") }}
  </router-link>

  <router-link :to="{ name: 'Contact Us' }">
    {{ $t("Button_7") }}
  </router-link>


</div>

  </div>
</template>

<script>
//import $ from 'jquery'
import CountryFlag from 'vue-country-flag'
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components:{
    CountryFlag,
  },
  data: function () {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      fa:"fa",
      en:"en",
      fr:"fr",
      ar:"ar",
    };

  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event);
      if (event == "ar" || event == "fa") {
        localStorage.setItem("direction", "rtl");
        localStorage.setItem("aligns", "text-align: right ;");
      } else {
        localStorage.setItem("direction", "ltr");
        localStorage.setItem("aligns", "text-align: left ;");
      }
      window.location.reload();
    },
  },
  mounted(){
     
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navigator{
  padding: 1% 0% 5% 0%;
  overflow: hidden;
}

div.scrollmenu {
  background-color: #26262694;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}


a{
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 320px) {
  .row{
    padding: 1% 0px;
    width: 80%;
    margin: 0%;
  }

  .col{
    width: 25%;
    padding: 3%;
  }
}

@media screen and (min-width: 500px) {
  .row{
    padding: 2% 0px;
    width: 50%;
    margin: 0%;
  }

  .col{
    width: 25%;
    padding: 2%;
  }
}

@media (min-width: 900px) {
  .row{
    padding: 1% 0% 2% 0px;
    width: 30%;
    margin: 0%;
  }

  .col{
    width: 25%;
    padding: 2%;
  }
}

</style>
