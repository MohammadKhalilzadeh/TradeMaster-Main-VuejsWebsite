<template>
  <div class="identify">
    <center>
      <h1>احرازهویت‌ها</h1>
      
      <div  class="searchbox">
        <input type="text" name="search" id="search" placeholder="search..." v-model="search" @keyup="searchit">

        <div v-if="!state.nosearch && state.searchResults.length > 0" >
          <div class="results" v-for="(result,index) in state.searchResults" :key="index">
            <hr v-if="index > 0">
                <div class="row row-cols-3">
                  <div class="col">
                  نام : 
                    {{ result.firstname }}
                  </div>
                  <div class="col">
                    <button v-if="result.verified == false" @click="verifyit(result._id)">
                      تایید کاربر
                    </button>
                    <p v-else> تایید شده </p>
                  </div>
                  <div class="col">
                  نام خانوادگی : 
                    {{ result.lastname }}
                  </div>

                  <div class="col">
                  ایمیل : 
                    {{ result.email }}
                  </div>
                  <div class="col">
                  مود : 
                    {{ result.role }}
                  </div>
                  <div class="col">
                  تلفن : 
                    {{ result.phone }}
                  </div>

                  <div class="col">
                  شهر : 
                    {{ result.city }}
                  </div>
                  <div class="col">
                  استان : 
                    {{ result.province }}
                  </div>
                  <div class="col">
                  کدپستی : 
                    {{ result.postalcode }}
                  </div>
                </div>

                <div class="row row-cols-1">
                  <div class="col">
                  آدرس : 
                    {{ result.address }}
                  </div>
                </div>

                <div class="row row-cols-2">
                  <div class="col">
                  شماره شبا : 
                    {{ result.sheba }}
                  </div>
                  <div class="col">
                  شماره کارت : 
                    {{ result.card }}
                  </div>
                </div>

                <div class="row row-cols-2" v-if="result.imgs.length > 0">
                  <div class="col">
                    <img :src="urladrs + result.imgs[0]" alt="image1" srcset="">
                  </div>
                  <div class="col">
                    <img :src="urladrs + result.imgs[0]" alt="image2" srcset="">
                  </div>
                </div>
          </div>
        </div>

        <div v-else-if="!state.nosearch" >
          <p> No results </p>
        </div>
      </div>

      <br><br><br>

      <div class="searchbox">

        <div class="results" v-for="result in results" :key="result._id" >

          <div class="row row-cols-3">
            <div class="col">
            نام : 
              {{ result.firstname }}
            </div>
            <div class="col">
              <button v-if="result.verified == false" @click="verifyit(result._id)">
                تایید کاربر
              </button>
              <p v-else> تایید شده </p>
            </div>
            <div class="col">
            نام خانوادگی : 
              {{ result.lastname }}
            </div>

            <div class="col">
            ایمیل : 
              {{ result.email }}
            </div>
            <div class="col">
            مود : 
              {{ result.role }}
            </div>
            <div class="col">
            تلفن : 
              {{ result.phone }}
            </div>

            <div class="col">
            شهر : 
              {{ result.city }}
            </div>
            <div class="col">
            استان : 
              {{ result.province }}
            </div>
            <div class="col">
            کدپستی : 
              {{ result.postalcode }}
            </div>
          </div>

          <div class="row row-cols-1">
            <div class="col">
            آدرس : 
              {{ result.address }}
            </div>
          </div>

          <div class="row row-cols-2">
            <div class="col">
            شماره شبا : 
              {{ result.sheba }}
            </div>
            <div class="col">
            شماره کارت : 
              {{ result.card }}
            </div>
          </div>

          <div class="row row-cols-2" v-if="result.imgs.length > 0">
            <div class="col">
              <img :src="urladrs + result.imgs[0]" alt="image1" srcset="">
            </div>
            <div class="col">
              <img :src="urladrs + result.imgs[0]" alt="image2" srcset="">
            </div>
          </div>

        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Identify",
  props: {
    msg: String,
  },
  data(){
    return {
      urladrs: process.env.VUE_APP_API_URL + "images/userspics/" ,
      search:"",
      results:[],
      resulttxt:null,
      state : {searchResults:[],
              nosearch:true,},
    }
  },
  mounted(){
      let url = process.env.VUE_APP_API_URL + "users/unverifieds";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status == 200) {
          this.results = res.data;
        } else if (res.status == 500) {
          alert(" اختلال در دریافت سفارشات ");
        } else {
          alert(" مشکل در برقراری اطلاعات با سرور ");
        }
      });
  },
  methods:{
    searchit(){
      let url = process.env.VUE_APP_API_URL + "users/search";
      axios.post(url,{search:this.search}).then(res => {
        if(this.search === ''){
          this.state.nosearch = true
          return
        }
        this.state.nosearch = false
        this.state.searchResults = res.data.map(user => user)
      })
      .catch(err => {throw new Error(err)})

    },

    verifyit(id){
      console.log(localStorage.getItem("token"));
      let url = process.env.VUE_APP_API_URL + "users/verify/" + id;
      axios
        .put(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
        .then((res) => {
          if (res.status == 200) {
            alert("موفق")
            window.location.reload();
          } else {
            alert(" خطا در انجام عملیات ")
          }
        });
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.identify {
  padding: 3%;
  background: linear-gradient(225deg, rgba(68,76,228,1) 14%, rgba(44,52,170,1) 87%);
  background-repeat: no-repeat;
  background-size: cover ;
  background-attachment: fixed;
  background-position: center;
  color: white;
  overflow: hidden;
  font-family: "IranNastaliq", Arial, sans-serif;
}

.searchbox{
  width: 80%;
  padding: 2%;
  color: rgba(0, 0, 0, 0.579);
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

input{
  width: 60%;
  margin: 2% 20%;
  padding: 1%;
  border-radius: 15px;
  border: 2px solid gray;
}

.results{
  width: 96%;
  margin: 2% 2%;
  padding: 2%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.599);
  box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.529), 0 6px 20px 0 rgba(17, 17, 17, 0.529);
  color: black;
}

.col {
  margin: 1% 0%;
  padding: 1% 1%;
}

button {
  width: 90%;
  margin: 1% 5%;
  padding: 1%;
  border-radius: 20px;
  background: #3339CB ;
  color: #fff;
  border: 2px solid #3339CB;
}

img{
  width: 100%;
}

</style>
