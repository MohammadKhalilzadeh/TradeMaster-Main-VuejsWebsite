<template>
  <div class="allies">
    <center>
      <h3>مدیریت برندهای همکار</h3>

      <div class="ally-form">
        <div class="row row-cols-auto">
          <div class="col col1">
            <input type="text" placeholder="نام" v-model="form.name" />
          </div>
          <div class="col col1">
            <input type="text" placeholder="تلفن" v-model="form.phone" />
          </div>
          <div class="col col1">
            <input type="text" placeholder="ایمیل" v-model="form.email" />
          </div>
          <div class="col" style="width: 100%">
            <input type="text" placeholder="شماره شبا" v-model="form.sheba" />
          </div>
          <div class="col" style="width: 100%">
            <input type="text" placeholder="آدرس" v-model="form.address" />
          </div>
          <div class="col" style="width: 100%">
            <input class="myfile" type="file" @change="handleFileUpload" />
          </div>
        </div>
        <progress max="100" :value.prop="uploadPercentage"></progress>
        <button id="create" v-on:click="submit()">ایجاد</button>
      </div>

      <div class="ally-form">
        <h4>لیست همکاران</h4>
        <br />

        <div v-for="ally in allies" :key="ally._id" class="row row-cols-4 tile">
          <div class="col">{{ ally.name }}</div>
          <div class="col">{{ ally.phone }}</div>
          <div class="col">{{ ally.address }}</div>
          <div class="col">
            <button id="delete" v-on:click="deleteally(ally._id)">
              حذف
            </button>
          </div>
        </div>

        <!-- <keep-alive>
          <table>
            <tr>
              <th style="width:30%">نام</th>
              <th style="width:20%">تلفن</th>
              <th style="width:40%">آدرس</th>
              <th style="width:10%">عملیات</th>
            </tr>
            <tr v-for="ally in allies" :key="ally._id" class="trs">
              <td>{{ ally.name }}</td>
              <td>{{ ally.phone }}</td>
              <td>{{ ally.address }}</td>
              <td>
                <button id="delete" v-on:click="deleteally(ally._id)">
                  حذف
                </button>
              </td>
            </tr>
          </table>
        </keep-alive> -->
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Allies",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        address: "",
        email: "",
        sheba: "",
        image: null,
      },
      allies: [],
      uploadPercentage: 0,
    };
  },
  methods: {
    submit() {
      let formData = new FormData();
      formData.append("image", this.form.image, this.form.image.name);
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("sheba", this.form.sheba);
      formData.append("address", this.form.address);
      console.log(this.form);
      let url = process.env.VUE_APP_API_URL + "ally";
      console.log(url);
      axios
        .post(url, formData, {
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          }.bind(this),
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },)
        .then(function (res) {
          console.log(res);
          if (res.status == 200) {
            window.location.reload();
            alert(" برند جدید ایجاد شد ");
          } else {
            alert(" خطا در ایجاد برند ");
          }
        });
    },
    async deleteally(id) {
      let url = process.env.VUE_APP_API_URL + "ally/" + id;
      await axios
        .delete(url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.reload();
          } else {
            alert(" برند مورد نظر حذف شد ");
          }
        });
    },
    handleFileUpload(event) {
      this.form.image = event.target.files[0];
    },
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "ally";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status == 200) {
          this.allies = res.data;
        } else {
          alert(" مشکل در دریافت اطلاعات ");
        }
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allies {
  padding: 3%;
  background: linear-gradient(225deg, rgba(68,76,228,1) 14%, rgba(44,52,170,1) 87%);
  background-repeat: no-repeat;
  background-size: cover ;
  background-attachment: fixed;
  background-position: center;
  color: white;
  font-family: "IranNastaliq", Arial, sans-serif;
}

.ally-form {
  width: 80%;
  margin: 5% 10%;
  padding: 2%;
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.579);
  background: #DDE3F0;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

input {
  color: rgba(0, 0, 0, 0.579);
  padding: 3%;
  width: 90%;
  margin: 2%;
  border-radius: 10px;
  height: 40px;
  border: 2px solid #e6e7e8;
  align-items: center;
  align-content: center ;
  align-self: center;
}


#create {
  width: 30%;
  background: #3339CB;
  color: white;
  margin: 3%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #3339CB;
}

#delete {
  width: 90%;
  background: #d51637;
  color: white;
  margin: 3%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #d51637;
}

th{
  text-align: center ;
  padding: 2% 1% ;
}


td{
  text-align: center ;
  padding: 2% 2% ;
}
.trs {
  background: #fff ;
  box-shadow:
    0px 1.1px 5.3px rgba(0, 0, 0, 0.06),
    0px 3.8px 17.9px rgba(0, 0, 0, 0.072),
    0px 17px 80px rgba(0, 0, 0, 0.11)
  ;


}

table {
  width: 98%;
  padding: 1%;
}

progress {
  width: 100%;
}

@media screen and (min-width: 900px) {

  .tile{
    width: 94%;
    padding: 1%;
    margin: 3% ;
    background-color: #ECEFF5 ;
    border-radius: 25px ;
    box-shadow:
      0px 3.2px 2.7px rgba(0, 0, 0, 0.17),
      0px 5.3px 6.9px rgba(0, 0, 0, 0.093),
      0px 6.9px 14.2px rgba(0, 0, 0, 0.086),
      0px 8.7px 29.2px rgba(0, 0, 0, 0.084),
      0px 15px 80px rgba(0, 0, 0, 0.074)
    ;

  }
  .col1{
    width: 33%;
  }

  .tile .col {
    min-width: 10%;
    align-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
  }

}
</style>
