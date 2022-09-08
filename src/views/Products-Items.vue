<template>
  <div class="p-items">

    <div class="header">
      <center>
        <Navbar></Navbar>
      </center>
    </div>

    <div class="section">
      <center>
        <h4 >محصولات ما</h4>

        <div class="search-box">
          <input type="text" placeholder="search..." v-model="search" @keyup="searchit">
        </div>

        <div v-if="!state.nosearch && state.searchResults.length > 0" class="row row-cols-auto">
          <div class="col" v-for="(result,index) in state.searchResults" :key="index">
            <div class="card">
              <img
                :src="url + result.imagename"
                class="card-img-top"
                alt="Img"
              />
              <div class="card-body">
                <h5 class="card-title" >
                  {{ result.name }}
                </h5>
                <h6 class="card-text">{{ result.price }} تومان</h6>
                <button @click="seedetails(result._id)">
                  مشاهده کالا
                </button>
              </div>
            </div>
          </div>
        </div>



        <div v-else class="row row-cols-auto">
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
                <button @click="seedetails(product._id)">
                  مشاهده کالا
                </button>
              </div>
            </div>
          </div>
        </div>


      </center>
      <br>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar2.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      products: [],
      url: process.env.VUE_APP_API_URL,
      search:"",
      state : {searchResults:[],
              nosearch:true,},
    };
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "products/buy";
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          this.products = res.data;
          console.log(this.products);
        } else {
          alert(
            "خطا در دریافت اطلاعات از سرور. کاربر گرامی لطفا بعدا مجددا امتحان کنید."
          );
        }
      });
  },
  methods: {
    seedetails(p) {
      console.log(p);
      this.$router.push({
        name: "ProductDetails",
        params: { id: p, mode: true },
      });
    },

    searchit(){
      let url = process.env.VUE_APP_API_URL + "products/search";
      axios.post(url,{search:this.search}).then(res => {
        if(this.search === ''){
          this.state.nosearch = true
          return
        }
        this.state.nosearch = false
        this.state.searchResults = res.data.map(product => product)
      })
      .catch(err => {throw new Error(err)})

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-items {
  color: white;
  text-align: justify;
}

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
  color: #262626;
}
h5{
 color: #fff;
}
h6{
  color: #10CCB3;
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



@media screen and (min-width: 300px) {
  .header{
    width: 100%;
    background: url("../assets/prodheader.jpg") ;
    min-height:40vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .section{
    width: 100%;
    padding: 5%;
    min-height:40vh;
    background: url("../assets/s-wp.jpg") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col {
    width: 48%;
    margin: 1%;
  }
}

@media screen and (min-width: 500px) {
  .header{
    width: 100%;
    min-height:30vh;
    background: url("../assets/prodheader.jpg") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .section{
    width: 100%;
    padding: 3%;
    min-height:50vh;
    background: url("../assets/s-wp.jpg") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col {
    width: 31%;
    margin: 1%;
  }
}

@media screen and (min-width: 900px) {
  .header{
    width: 100%;
    min-height:40vh;
    background: url("../assets/prodheader.jpg") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .section{
    width: 100%;
    padding: 3%;
    min-height:60vh;
    background: url("../assets/s-wp.jpg") ;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col {
    width: 18%;
    margin: 1%;
  }

  .search-box{
    padding: 5% 10% ;
    width: 80% ;
  }

  input{
    width: 60% ;
    padding: 2% 4%;
    border-radius: 20px;
    border: none;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
  }
}
</style>
