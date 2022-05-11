<script>
import axios from "axios";
export default {
  data: function () {
    return {
      champions: [],
    };
  },
  created: function () {
    this.indexChampions();
  },
  methods: {
    indexChampions: function () {
      axios.get("/champions").then((response) => {
        console.log("champions index", response.data);
        this.champions = response.data;
      });
    },
  },
};
</script>
<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <div class="champions-index">
      <h1>All Champions</h1>
      <div class="container">
        <div class="row">
          <div v-for="champion in champions" v-bind:key="champion.id" class="col-3">
            <h2>{{ champion.Name }}</h2>
            <img style="height: 300px; width: 200px" v-bind:src="champion.Image" v-bind:alt="champion.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
