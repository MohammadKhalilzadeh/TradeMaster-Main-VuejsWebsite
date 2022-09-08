<template>
  <div class="tickets">
    <center>
      <h1>تیکت‌ها</h1>

      <!-- <div class="search-box">
        <input type="text" placeholder="search..." v-model="search" @keyup="searchit">
      </div> -->


      <div v-if="!state.nosearch && state.searchResults.length > 0">
        <div class="ticket-paper" v-for="(result,index) in state.searchResults" :key="index">
          <table>
            <tr>
              <th>{{ result.firstname }}</th>
              <th>{{ result.lastname }}</th>
            </tr>
            <tr>
              <th>{{ result.email }}</th>
              <th v-if="result.seen">بررسی شده</th>
              <th v-else>نیاز به رسیدگی</th>
            </tr>
          </table>
          <table>
            <tr>
              <td>{{ result.desc }}</td>
            </tr>
          </table>

          <button @click="seen(result._id)">بررسی شد</button>
        </div>
      </div>


      <div v-else class="ticket-paper" v-for="ticket in tickets" :key="ticket._id">
        <table>
          <tr>
            <th>{{ ticket.firstname }}</th>
            <th>{{ ticket.lastname }}</th>
          </tr>
          <tr>
            <th>{{ ticket.email }}</th>
            <th v-if="ticket.seen">بررسی شده</th>
            <th v-else>نیاز به رسیدگی</th>
          </tr>
        </table>
        <table>
          <tr>
            <td>{{ ticket.desc }}</td>
          </tr>
        </table>

        <button @click="seen(ticket._id)">بررسی شد</button>
      </div>


    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Tickets",
  props: {
    msg: String,
  },
  data() {
    return {
      tickets: [],
      search:"",
      state : {searchResults:[],
              nosearch:true,},
    };
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "tickets";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status == 200) {
          this.tickets = res.data;
        } else {
          alert(" خطا در دریافت اطلاعات ");
        }
      });
  },
  methods: {
    seen(id) {
      let url = process.env.VUE_APP_API_URL + "tickets/" + id;
      axios
        .patch(
          url,
          {
            seen: true,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(function (res) {
          if (res.status == 200) {
            window.location.reload();
            alert(" وضعیت تیکت تغییر یافت ");
          } else {
            alert(" خطا در پردازش درخواست ");
          }
        });
    },

    searchit(){
      let url = process.env.VUE_APP_API_URL + "tickets/search";
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tickets {
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

.ticket-paper {
  width: 70%;
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

table {
  border: 2px solid rgba(44, 44, 44, 0.825);
  padding: 1%;
}

th {
  width: 50%;
  border: 2px solid rgba(44, 44, 44, 0.825);
  padding: 1%;
}

td {
  width: 100%;
  padding: 1%;
}

table {
  width: 98%;
  margin: 1%;
}

button {
  width: 30%;
  background: #3339CB;
  color: white;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #3339CB;
}

  .search-box{
    padding: 1% 10% ;
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
</style>
