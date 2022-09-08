<template>
  <div class="shopPlatforms">
    <center>
      <h3>{{ $t("Shopping_Platforms") }}</h3>
      <div class="platforms">
        <div class="row row-cols-auto">
          <div class="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-window"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
              />
              <path
                d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"
              />
            </svg>
          </div>
          <div class="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-app"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopPlatforms {
  background: linear-gradient(
    138deg,
    rgba(12, 88, 112, 1) 19%,
    rgba(25, 153, 171, 1) 89%
  );
  padding: 3%;
  color: white;
}

.platforms {
  width: 80%;
}

svg {
  width: 70%;
}

@media screen and (min-width: 320px) {
  .col {
    width: 100%;
    margin: 0px;
    padding: 5%;
  }
}

@media screen and (min-width: 500px) {
  .col {
    width: 50%;
    margin: 0px;
    padding: 5%;
  }
}
</style>
