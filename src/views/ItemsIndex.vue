<script>
import axios from "axios";
export default {
  data: function () {
    return {
      items: [],
    };
  },
  created: function () {
    this.indexItems();
  },
  methods: {
    indexItems: function () {
      axios.get("/items").then((response) => {
        console.log("items index", response);
        this.items = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <div class="items-index">
      <h1>Legendary Items</h1>
      <div class="container">
        <div class="row">
          <div v-for="legendary in items.legendary" v-bind:key="legendary.id" class="col-2">
            <h2 class="fs-6 mt-5">{{ legendary.Name }}</h2>
            <img
              onmouseover="legendary.description"
              style="height: 75px; width: 75px"
              v-bind:src="legendary.Image"
              v-bind:alt="legendary.Name"
            />
          </div>
          <h1>Mythic Items</h1>
          <div v-for="mythic in items.mythic" v-bind:key="mythic.id" class="col-2">
            <h2 class="fs-6 mt-5">{{ mythic.Name }}</h2>
            <img style="height: 75px; width: 75px" v-bind:src="mythic.Image" v-bind:alt="mythic.Name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
