<template>
  <div class="product-details">
    <div class="detail-box">
      <div class="row row-cols-auto">
        <div class="col col1">
          <h2>
            {{ product.name }}
          </h2>
          <br /><br />

          <p id="prod-price">قیمت : {{ product.price }} ریال</p>

          <div class="row row-cols-auto amount" v-if="mode">
            <div class="col col4">
              <button @click="sum">+</button>
            </div>
            <div class="col col4">
              {{ amount }}
            </div>
            <div class="col col4">
              <button @click="sub">-</button>
            </div>
          </div>
          <div v-else>
            <p>برای خرید وارد شوید</p>
          </div>

          <button id="pay" v-if="mode" @click="sendorder">
            {{ paying }} ریال پرداخت
          </button>

          <input type="text" v-if="mode" v-bind:placeholder="$t('GetStart_field4')" v-model="phone" />

          <input type="text" v-if="mode" v-bind:placeholder="$t('GetStart_field8')" v-model="Custaddress" />
        </div>
        <div class="col col2">
          <img :src="address + product.imagename" alt="" />
        </div>
      </div>
      <div class="prod-desc">
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product-Details",
  props: {
    msg: String,
  },
  data() {
    return {
      product: {},
      paying: 0,
      phone: "",
      Custaddress: "",
      amount: 0,
      address: process.env.VUE_APP_API_URL,
      mode: this.$route.params.mode,
    };
  },
  created() {
    console.log(this.$route.params.id);
    let url = this.address + "products/" + this.$route.params.id;
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        this.product = res.data;
      })
      .catch(err => {
        alert(err)
      });
  },
  methods: {
    sum() {
      this.amount = this.amount + 1;
      this.paying = this.amount * this.product.price;
    },
    sub() {
      if (this.amount > 0) {
        this.amount = this.amount - 1;
        this.paying = this.amount * this.product.price;
      }
    },
    sendorder() {
      let url = process.env.VUE_APP_API_URL + "bills/website";
      axios
        .post(
          url,
          {
            ShopName: "TradeMaster" ,
            CustomerPhone: this.phone,
            CustomerAddress: this.Custaddress,
            TotalPrice: this.paying,
            PartnerShare: this.paying * 0.9,
            owner: this.product.owner,
            Datetime: Date.now(),
            item: {
              name: this.product.name,
              price: this.product.price,
              amount: this.amount,
            },
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(function (res) {
          if (res.status == 200) {
            this.$router.push({
              name: "Home",
            });
            window.open(res.data.url,);
          } else {
            alert(
              "خطا در درخواست برای درگاه پرداخت، لطفا بعدا مجددا امتحان کنید"
            );
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


img {
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

.prod-desc {
  background-color: white ;
  padding: 5% 3%;
  width: 94%;
  margin: 4% 3%;
  border-radius: 25px;
  color: rgba(0, 0, 0, 0.579);
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

#prod-price {
  font-size: 25px;
}

.amount {
  width: 90%;
  margin: 5% 5%;
  text-align: center;
  border: 1px solid #262626a2;
  border-radius: 25px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

button {
  width: 94%;
  margin: 1% 2%;
  border-radius: 15px;
  background: #10BFAF;
  color: white;
  border: 1px solid #10BFAF;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

#pay {
  width: 90%;
  margin: 3% 5%;
  border-radius: 15px;
  background: #10BFAF;
  color: white;
  border: 1px solid #10BFAF;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}


input {
  width: 90%;
  margin: 5% 5%;
  padding: 3%;
  border-radius: 10px;
  border: 1px solid #262626a2;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}
@media screen and (min-width: 320px) {
  .product-details {
  width: 100%;
  padding: 3%;
  min-height:100vh;
  background: url("../../assets/s-wp.jpg") ;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  }


  .col {
    width: 90%;
    margin: 2% 5%;
    padding: 2%;
  }
}

@media screen and (min-width: 900px) {
  .product-details {
  width: 100%;
  padding: 3%;
  min-height:60vh;
  background: url("../../assets/s-wp.jpg") ;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  }


  .col1 {
    width: 30%;
    padding: 5% 2%;
    margin: 0;
  }

  .col2 {
    width: 70%;
    padding: 1%;
    margin: 0;
  }

  .col4 {
    width: 33%;
    padding: 2%;
    margin: 0;
  }
}
</style>
