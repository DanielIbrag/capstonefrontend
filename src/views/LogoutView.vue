<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  },
};
</script>

<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <div class="logout"></div>
  </div>
</template>
