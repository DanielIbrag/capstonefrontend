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
  <div class="items-index">
    <h1>All Items</h1>
    <div v-for="item in items" v-bind:key="item.id">
      <h2>{{ item.Name }}</h2>
      <img v-bind:src="item.Image" v-bind:alt="item.Name" />
    </div>
  </div>
</template>
