<template>
  <div class="orders">
    <center>
      <h1>مدیریت سفارشات</h1>

      <div  class="search-box">
        <input type="text" name="search" id="search" placeholder="search..." v-model="search" @keyup="searchit">
        
        <div v-if="!state.nosearch && state.searchResults.length > 0" >
          <div class="results" v-for="(result,index) in state.searchResults" :key="index">
            <hr v-if="index > 0">

            
              <br />
              <keep-alive>
                <table>
                  <tr>
                    <td v-if="result.Status == 'Pending'">وضعیت : درانتظار</td>
                    <td v-if="result.Status == 'Seen'">وضعیت : در حال بررسی</td>
                    <td v-if="result.Status == 'On Way'">وضعیت : ارسال شده</td>
                    <td>{{ result.Datetime }}</td>
                  </tr>
                  <tr>
                    <td>قیمت کل : {{ result.TotalPrice }} ریال</td>
                    <td>سهم مالک : {{ result.PartnerShare }} ریال</td>
                  </tr>
                  <tr>
                    <td>آدرس خریدار : {{ result.CustomerAddress }}</td>
                    <td>تلفن خریدار : {{ result.CustomerPhone }}</td>
                  </tr>
                  <!-- <tr>
                    <td>نام محصول : {{ result.item.name }}</td>
                    <td>قیمت محصول : {{ result.item.price }} ریال</td>
                  </tr> -->
                  <tr>
                    <td>
                      <button @click="deletebill(result._id)">
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text"> حذف </span>
                      </button>
                    </td>
                    <td>
                      <h6 v-if="result.Status == 'Delivered'">
                        تحویل داده شده
                      </h6>
                      <button v-else @click="updateStatus(result._id, result.Status)">
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text"> آپدیت </span>
                      </button>
                    </td>
                  </tr>
                </table>
              </keep-alive>

          </div>
        </div>

        <div v-else-if="!state.nosearch" >
          <p> No results </p>
        </div>
      </div>

      <div class="orders-form" v-for="bill in bills" :key="bill._id">
        <br />
        <keep-alive>
          <table>
            <tr>
              <td v-if="bill.Status == 'Pending'">وضعیت : درانتظار</td>
              <td v-if="bill.Status == 'Seen'">وضعیت : در حال بررسی</td>
              <td v-if="bill.Status == 'On Way'">وضعیت : ارسال شده</td>
              <td>{{ bill.Datetime }}</td>
            </tr>
            <tr>
              <td>قیمت کل : {{ bill.TotalPrice }} ریال</td>
              <td>سهم مالک : {{ bill.PartnerShare }} ریال</td>
            </tr>
            <tr>
              <td>آدرس خریدار : {{ bill.CustomerAddress }}</td>
              <td>تلفن خریدار : {{ bill.CustomerPhone }}</td>
            </tr>
            <tr>
              <td>نام محصول : {{ bill.item.name }}</td>
              <td>قیمت محصول : {{ bill.item.price }} ریال</td>
            </tr>
            <tr>
              <td>
                <button @click="deletebill(bill._id)">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span class="front text"> حذف </span>
                </button>
              </td>
              <td>
                <button @click="updateStatus(bill._id, bill.Status)">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span class="front text"> آپدیت </span>
                </button>
              </td>
            </tr>
          </table>
        </keep-alive>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Orders",
  props: {
    msg: String,
  },
  data() {
    return {
      bills: [],
      search:"",
      state : {searchResults:[],
              nosearch:true,},
    };
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "bills/website/orders";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status == 200) {
          this.bills = res.data;
        } else if (res.status == 500) {
          alert(" اختلال در دریافت سفارشات ");
        } else {
          alert(" مشکل در برقراری اطلاعات با سرور ");
        }
      });
  },
  methods: {
    searchit(){
      let url = process.env.VUE_APP_API_URL + "bills/search";
      axios.post(url,{search:this.search}).then(res => {
        if(this.search === ''){
          this.state.nosearch = true
          return
        }
        this.state.nosearch = false
        this.state.searchResults = res.data.map(bill => bill)
      })
      .catch(err => {throw new Error(err)})

    },



    updateStatus(id, state) {
      let nextStatus = "";
      if (state == "Pending") {
        nextStatus = "Seen";
      }
      if (state == "Seen") {
        nextStatus = "On Way";
      }
      if (state == "On Way") {
        nextStatus = "Delivered";
      }

      let url = process.env.VUE_APP_API_URL + "bills/chngstatus/" + id;
      axios
        .patch(
          url,
          {
            field: "Status",
            value: nextStatus,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.reload();
            alert(" سفارش در مرحله جدید قرار گرفت ");
          } else {
            alert(response.status + " : " + " خطا در تغییر وضعیت سفارش ");
          }
        })
        .catch(function (error) {
          console.log(error.response);
          alert(" خطا " + error);
        });
    },
    deletebill(id) {
      let url = process.env.VUE_APP_API_URL + "bills/" + id;
      axios
        .delete(url, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.reload();
            alert(" سفارش حذف شد ");
          } else {
            alert(" خطا در پردازش درخواست ");
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orders {
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

.orders-form {
  width: 80%;
  margin: 5% 10%;
  padding: 2%;
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.579);
  background: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

.search-box{
  width: 80%;
  padding: 2%;
  color: rgba(0, 0, 0, 0.579);
  border-radius: 15px;
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

table,
th,
td {
  border: 2px solid rgba(0, 0, 0, 0.579);
  padding: 1%;
}

table {
  width: 98%;
  margin: 1%;
}

/* From cssbuttons.io */
button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(175deg, 79%, 16%) 0%,
    hsl(238deg, 60%, 50%) 8%,
    hsl(238deg, 60%, 50%) 92%,
    hsl(175deg, 79%, 16%) 100%
  );
}

.front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(238deg, 60%, 50%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

button:hover {
  filter: brightness(110%);
}

button:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

button:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

button:focus:not(:focus-visible) {
  outline: none;
}
</style>
