<template>
  <div class="products-list">
    <center>
      <div class="row row-cols-auto" id="navbtns">
        <div class="col btncol">
          <button class="navbtn" @click="back">بازگشت</button>
        </div>
      </div>
      <br />
      <h2>لیست محصولات</h2>

    <div
      class="row row-cols-auto"
      style="width: 96%; border: 1px solid #80B918; border-radius: 10px; margin: 2%;padding:2%;"
    >
      <div class="col" v-for="product in products" :key="product._id">
          <div class="card">
            <img
              :src="url + product.imagename"
              class="card-img-top"
              alt="Img"
            />
            <div class="card-body">
              <h5 class="card-title" >
                {{ product.name }}
              </h5>
              <h6 class="card-text">{{ product.price }} تومان</h6>
              <button @click="seedetails(product)">سفارش</button>
            </div>
          </div>
        </div>
    </div>
    </center>

    <Footer> </Footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../views/Footer.vue";

export default {
  name: "Products-List",
  props: {
    msg: String,
  },
  components: {
    Footer,
  },
  data() {
    return {
      products: [],
      url: process.env.VUE_APP_API_URL,
      id: this.$route.params.id,
    };
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "products";
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
  },
  methods: {
    seedetails(p) {
      console.log(p);
      this.$router.push({
        name: "ProductDetails",
        params: { id: p._id, mode: true },
      });
    },
    back() {
      this.$router.push({
        name: "Profile",
        params: { id: this.id },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



img {
  width: 100%;
  border-radius: 10px 10px 0px 0px ;
}

.card {
 width: 90%;
 background: #262626a2;
 box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
 border-radius: 10px;
 padding: 0%;
 margin: 5% 5% 8% 5%;
 transition: all .3s;
}

.card:hover {
 margin-top: -20px;
}

.card-body{
  padding: 1rem 0 0 0;
}

h4{
  margin: 0 0 5% 0;
}
h5{
  color: #fff;
}
h6{
  color: #e80909;
}

button{
  margin: 2% 0 0 0;
  padding: 4%;
  width: 100%;
  border-radius: 0 0 10px 10px ;
  background-color: #262626ba;
  color: white;
  border: 1px solid white;
}

button:hover{
  background-color: white;
  color: #262626ba;
  border: 1px solid #262626ba;
}



.navbtn {
  width: 94%;
  margin: 1% 3%;
  padding: 5%;
}

@media screen and (min-width: 320px) {
  .products-list {
      width: 100%;
      min-height:100vh;
      background: url("../assets/s-wp.jpg") ;
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
  }

  .col {
    width: 100%;
    padding: 2%;
  }
  
  #navbtns {
    width: 50%;
    margin: 1% 25%;
  }
  .btncol {
    width: 90%;
    margin: 1% 5%;
  }
}

@media screen and (min-width: 500px) {
  .products-list {
      width: 100%;
      min-height:100vh;
      background: url("../assets/s-wp.jpg") ;
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
  }

  .col {
    width: 33%;
    padding: 2%;
  }
  
  #navbtns {
    width: 80%;
    margin: 1% 10%;
  }

  .btncol {
    width: 50%;
    margin: 1% 25%;
  }
}

@media screen and (min-width: 900px) {
  .products-list {
      width: 100%;
      min-height:100vh;
      background: url("../assets/s-wp.jpg") ;
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
  }

  .col {
    width: 25%;
    padding: 2%;
  }

  #navbtns {
    width: 50%;
    margin: 1% 25%;
  }

  .btncol {
    width: 90%;
    margin: 1% 5%;
  }
}

</style>
