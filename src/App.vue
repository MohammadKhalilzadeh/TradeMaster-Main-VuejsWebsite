<template>
  <div id="app" v-bind:dir="direction" v-bind:style="aligns">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      direction: localStorage.getItem("direction") || "rtl",
      aligns: localStorage.getItem("aligns") || "text-align: right ;",
    };
  },
};
</script>

<style lang="scss">
#app {
  background: white;
  color: #313131e1;
  min-height: 700px;
  overflow: hidden;
}
</style>
