<template>
  <div class="bills">
    <center>
      <h1>رسیدها</h1>

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
          </table>
        </keep-alive>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bills",
  props: {
    msg: String,
  },
  data() {
    return {
      bills: [],
    };
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "bills/website/done";
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bills {
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


</style>
