<template>
  <div class="adminPanel">
    <ul>
      <li v-if="employess.product">
        <router-link class="navs" to="/panel/products">محصولات</router-link>
      </li>
      <li v-if="employess.orders">
        <router-link class="navs" to="/panel/orders">سفارشات</router-link>
      </li>
      <li v-if="employess.bills">
        <router-link class="navs" to="/panel/bills">صورتحساب‌ها</router-link>
      </li>
      <li v-if="employess.identifying">
        <router-link class="navs" to="/panel/identifications" >احراز هویت‌ها</router-link>
      </li>
      <li v-if="employess.tickets">
        <router-link class="navs" to="/panel/tickets">تیکت‌ها</router-link>
      </li>
      <li v-if="employess.allies">
        <router-link class="navs" to="/panel/allies">همکاران</router-link>
      </li>
      <li class="navs">
        <button class="navs" @click="goout">
          خروج
        </button>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPanel",
  props: {
    msg: String,
  },
  data() {
    return {
      employess: {},
      url: localStorage.getItem("Empid"),
    };
  },
  mounted() {
    let newurl = process.env.VUE_APP_API_URL + "employees/" + this.url;

    axios
      .get(newurl, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        if (response.status == 200) {
          this.employess = response.data;
        }
      });
  },
  methods:{
    goout(){
      // this.$router.back();
      this.$router.push({
              name: "Home",
            });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.adminPanel{
  background-color : #444CE4;
  background-repeat: no-repeat;
  background-size: cover ;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 10%;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-family: "IranNastaliq", Arial, sans-serif;
  color: black;
  background: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
}

.navs {
  display: block;
  color: rgba(0, 0, 0, 0.579);
  padding: 8px 16px;
  text-decoration: none;
}

.navs:hover:not(.active) {
  background-color: #444CE4;
  color: white;
}

button {
  background: white ;
  border: none;
}

button :hover{
  background-color: #444CE4;
  color: white;
}
</style>
