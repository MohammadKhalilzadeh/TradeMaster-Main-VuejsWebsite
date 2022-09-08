<template>
  <div class="product">
    <center>
      <h2>محصولات</h2>

      <div class="product-maker">
        <div class="row row-cols-auto" style="width: 100%">
          <div class="col">
            <input type="text" placeholder="نام" v-model="form.name" />
          </div>
          <div class="col">
            <select
              class="custom-select"
              v-model="form.unit"
              @change="handleChange1($event)"
            >
              <option value="number">تعدادی</option>
              <option value="weigh">وزنی</option>
            </select>
          </div>
          <div class="col">
            <input type="text" placeholder="قیمت" v-model="form.price" />
          </div>
          <div class="col">
            <select
              class="custom-select"
              v-model="form.available"
              @change="handleChange2($event)"
            >
              <option :value="true">موجود</option>
              <option :value="false">ناموجود</option>
            </select>
          </div>
          <div class="col">
            <select
              class="custom-select"
              v-model="form.owner"
              @change="handleChange3($event)"
              aria-placeholder="مالک"
            >
              <option
                :value="ally.sheba"
                v-for="ally in allies"
                :key="ally._id"
              >
                {{ ally.name }}
              </option>
            </select>
          </div>
          <div class="col1">
            <input type="file" @change="handleFileUpload" />
          </div>
          <div class="col1">
            <textarea
              name="message"
              rows="5"
              cols="35"
              placeholder="توضیحات"
              v-model="form.description"
            ></textarea>
          </div>
        </div>
        <button id="create" v-on:click="submit">ایجاد</button>
        <br>
        <progress max="100" :value.prop="uploadPercentage"></progress>
      </div>

      <div class="product-maker">
        <h3>لیست محصولات</h3>

        <br />

        <div>
          <div v-for="product in products" :key="product._id" class="row row-cols-4 tile" >
            <div class="col">
              {{ product.name }}
            </div>
            <div class="col">
              <select
                class="custom-select"
                v-model="product.available"
                @change="updateavaiablity($event, product._id)"
              >
                <option :value="true">موجود</option>
                <option :value="false">ناموجود</option>
              </select>
            </div>
            <div class="col">
              <img :src="url + product.imagename" alt="" />
            </div>
            <div class="col"><button id="delete" v-on:click="deletep(product._id)">حذف</button></div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  props: {
    msg: String,
  },
  data: function () {
    return {
      form: {
        name: "",
        unit: "number",
        price: null,
        available: true,
        owner: "trademaster",
        description: "",
        image: null,
      },
      update: true,
      file: null,
      products: [],
      allies: [],
      url: process.env.VUE_APP_API_URL,
      uploadPercentage: 0,
    };
  },
  methods: {
    submit() {
      let formData = new FormData();
      formData.append("image", this.form.image, this.form.image.name);
      formData.append("unit", this.form.unit);
      formData.append("price", this.form.price);
      formData.append("available", this.form.available);
      formData.append("owner", this.form.owner);
      formData.append("description", this.form.description);
      formData.append("name", this.form.name);
      let url = process.env.VUE_APP_API_URL + "products";
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
        })
        .then( (res) => {
          if (res.status == 200) {
            window.location.reload();
            alert("کالای جدید ایجاد شد");
          } else {
            alert(res.status + " : " + " مشکل در پردازش درخواست ");
          }
        });
    },
    handleChange1(event) {
      this.form.unit = event.target.value;
    },
    handleChange2(event) {
      this.form.available = event.target.value;
    },
    handleChange3(event) {
      this.form.owner = event.target.value;
    },
    updateavaiablity(event, id) {
      axios
        .patch(
          process.env.VUE_APP_API_URL + "products/" + id,
          {
            value: event.target.value,
            field:"available",
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            alert(" به روز رسانی انجام شد ");
            window.location.reload();
          }
          else if (response.status == 404) {
            alert(" چنین کالایی یافت نشد ");
            window.location.reload();
          } else {
            alert(response.status + " : " + " خطای سیستم ");
          }
        });
    },
    deletep(id) {
      let url = process.env.VUE_APP_API_URL + "products/" + id;
      axios
        .delete(url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.status == 200) {
            alert(" محصول حذف شد ");
            window.location.reload();
          } else if (response.status == 404) {
            alert(" کالا با این مشخصات فات نشد ");
          } else {
            alert(response.status + " : " + " خطای سیستم ");
          }
        });
    },
    handleFileUpload(event) {
      this.form.image = event.target.files[0];
    },
  },
  created() {
    let url = process.env.VUE_APP_API_URL + "products";
    axios.get(url).then((res) => {
      this.products = res.data;
    });

    let url2 = process.env.VUE_APP_API_URL + "ally";
    axios.get(url2).then((res) => {
      this.allies = res.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
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

.product-maker {
  padding: 2%;
  width: 79%;
  margin: 5% 10%;
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.579);
  background: #DDE3F0;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

input,
select,
option {
  color: rgba(0, 0, 0, 0.579);
  padding: 0;
  width: 90%;
  margin: 5%;
  border-radius: 10px;
  height: 40px;
  text-align: center;
  border: 2px solid #e6e7e8;
}

select {
  color:black ;
}

.col1 {
  width: 100%;
}

textarea {
  width: 99%;
  margin: 1%;
  border-radius: 10px;
}

#create {
  width: 30%;
  background: #3339CB;
  color: #fff;
  margin: 3%;
  padding: 1%;
  border-radius: 10px;
  border: 2px solid #3339CB;
}

th{
  text-align: center ;
  padding: 5% ;
}


td{
  text-align: center ;
  padding: 2% ;
}
.trs {
  background: #fff ;
  padding: 3%;
  box-shadow:
    0px 1.1px 5.3px rgba(0, 0, 0, 0.06),
    0px 3.8px 17.9px rgba(0, 0, 0, 0.072),
    0px 17px 80px rgba(0, 0, 0, 0.11)
  ;


}

table {
  width: 98%;
  margin: 1%;
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


@media screen and (min-width: 900px) {
  .col {
    width: 20%;
    margin: 0px;
    padding: 0px;
  }

  .tile{
    width: 94%;
    padding: 1% 3%;
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

  .tile .col {
    min-width: 25%;
    align-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
  }

  img{
    width: 80% ;
    height: 100px ;
    border-radius: 20px;
    box-shadow:
      0px 3.2px 2.7px rgba(0, 0, 0, 0.17),
      0px 5.3px 6.9px rgba(0, 0, 0, 0.093),
      0px 6.9px 14.2px rgba(0, 0, 0, 0.086),
      0px 8.7px 29.2px rgba(0, 0, 0, 0.084),
      0px 15px 80px rgba(0, 0, 0, 0.074)
    ;
  }
}
</style>
