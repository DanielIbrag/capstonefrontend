<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
    };
  },
  created: function () {
    this.indexFavorites();
  },
  methods: {
    destroyFavorite: function (favorite) {
      axios.delete("/favorites/" + favorite.id).then((response) => {
        console.log("favorites destroy", response);
        location.reload();
      });
    },
    indexFavorites: function () {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response);
        this.favorites = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <div class="favorites-index">
      <h1>All Favorites</h1>
      <div v-for="favorite in favorites" v-bind:key="favorite.id">
        <!-- <button v-on:click="destroyFavorite(favorite)">Destroy Favorite</button> -->

        <div class="container">
          <div class="row">
            <div class="col-5 float-right text-right">
              <h2>{{ favorite.champion_name }}</h2>
              <img class="rounded" v-bind:src="favorite.champion_image" v-bind:alt="favorite.champion_name" />
            </div>
            <div class="col-6">
              <div class="row pt-5">
                <div class="pt-4 col-4">
                  <p>{{ favorite.mythic_name }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.mythic_image"
                    v-bind:alt="favorite.mythic_name"
                  />
                </div>
                <div class="pt-4 col-4">
                  <p>{{ favorite.legendary_name1 }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.legendary_image1"
                    v-bind:alt="favorite.legendary_name1"
                  />
                </div>
                <div class="pt-4 col-4">
                  <p>{{ favorite.legendary_name2 }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.legendary_image2"
                    v-bind:alt="favorite.legendary_name2"
                  />
                </div>
                <div class="pt-4 col-4">
                  <p>{{ favorite.legendary_name3 }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.legendary_image3"
                    v-bind:alt="favorite.legendary_name3"
                  />
                </div>
                <div class="pt-4 col-4">
                  <p>{{ favorite.legendary_name4 }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.legendary_image4"
                    v-bind:alt="favorite.legendary_name4"
                  />
                </div>
                <div class="pt-4 col-4">
                  <p>{{ favorite.legendary_name5 }}</p>
                  <img
                    style="height: 50px; width: 50px"
                    v-bind:src="favorite.legendary_image5"
                    v-bind:alt="favorite.legendary_name5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-button center" v-on:click="destroyFavorite(favorite)">
          <h4 class="center">Destroy Favorite</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-button {
  width: 250px;
  height: 75px;
  color: antiquewhite;
  background-color: teal;
  border: solid 3px #ffffff;
  border-radius: 8px;
}
.custom-button:hover {
  cursor: pointer;
  background-color: #000000;
}
.center {
  margin: auto;
  padding: 10px;
}
</style>
