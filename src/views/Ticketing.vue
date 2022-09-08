<template>
  <div class="ticket">
    <div class="header">
      <center>
        <Navbar></Navbar>

        <div class="theform">
            <h4>{{ $t("Contact_us") }}</h4>
            <div class="tik-form">
              <div class="row row-cols-auto tikf">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-bind:placeholder="$t('GetStart_field1')"
                    v-model="form.firstname"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-bind:placeholder="$t('GetStart_field2')"
                    v-model="form.lastname"
                  />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                v-bind:placeholder="$t('GetStart_field3')"
                v-model="form.email"
              />
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-bind:placeholder="$t('Contact_Comment')"
                v-model="form.desc"
              >
              </textarea>
              <br />
              <button v-on:click="submit()">{{ $t("Contactus_btn") }}</button>
            </div>
        </div>

      </center>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar2.vue";

export default {
  props: {
    msg: String,
  },
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        desc: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        this.form.firstname == "" ||
        this.form.lastname == "" ||
        this.form.email == "" ||
        this.form.desc == ""
      ) {
        alert(" همه فیلدها باید پر شوند ");
      } else {
        let url = process.env.VUE_APP_API_URL + "tickets";
        axios
          .post(url, this.form, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(function (res) {
            console.log(res.data);
            if (res.status == 200) {
              window.location.reload();
              alert(
                "تیکت شما با موفقیت ارسال شد، منتظر پاسخ کارشناسان باشید. از شکیبایی شما متشکریم",
              );
            } else {
              alert(
                "خطایی در ارسال تیکت شما رخ داد، لطفا پس ار چند دقیقه مجددا امتحان کنید",
              );
            }
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket {
  background: white;
  color: white;
}

.theform{
  width: 80%;
  margin: 2% 10%;
  padding: 3%;
  background: #262626ba;
  border-radius: 25px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}

img {
  width: 90%;
  border-radius: 20px;
}

input {
  margin: 1%;
  background-color: rgba(255, 255, 255, 0.421);
}

textarea {
  margin: 1%;
  background-color: rgba(255, 255, 255, 0.421);
}

::placeholder {
  color: white;
}

button {
  background-color: #262626ba;
  color: white;
  border: 1px solid white;
  padding: 10px 40px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
}

button:hover {
  background-color: white;
  color: #262626ba;
  border: 1px solid #262626ba;
}

@media screen and (min-width: 320px) {

  .header{
    width: 100%;
    min-height: 70vh;
    background: url("../assets/tkt-header.jpeg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col {
    width: 100%;
  }
}

@media screen and (min-width: 500px) {

  .header{
    width: 100%;
    min-height: 80vh;
    background: url("../assets/tkt-header.jpeg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col1 {
    width: 60%;
    padding: 2%;
    margin: 5% 0%;
  }

  .col2 {
    width: 40%;
    padding: 2%;
    margin: 5% 0%;
  }

  .tikf .col {
    width: 50%;
  }
}

@media screen and (min-width: 900px) {
  .header{
    width: 100%;
    min-height: 100vh;
    background: url("../assets/tkt-header.jpeg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .col1 {
    width: 60%;
    padding: 2%;
    margin: 5% 0%;
  }

  .col2 {
    width: 40%;
    padding: 2%;
    margin: 5% 0%;
  }

  .tikf .col {
    width: 50%;
  }
}

</style>
