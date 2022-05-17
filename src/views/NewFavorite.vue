<script>
import axios from "axios";
export default {
  data: function () {
    return {
      count: 0,
      favorites: [],
      champions: [],
      items: [],
      newFavoriteParams: {
        legendary_image1: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
        legendary_image2: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
        legendary_image3: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
        legendary_image4: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
        legendary_image5: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
        mythic_image: "https://i.ibb.co/fHbZdLc/Screen-Shot-2022-05-16-at-6-53-59-PM.png",
      },
      legendary: [],
    };
  },
  created: function () {
    this.indexChampions();
    this.indexItems();
  },
  methods: {
    createFavorite: function () {
      axios
        .post("/favorites", this.newFavoriteParams)
        .then((response) => {
          console.log("favorites create", response);
          this.favorites.push(response.data);
          this.newFavoriteParams = {};
        })
        .catch((error) => {
          console.log("favorites create error", error.response);
        });
      window.location.href = "http://localhost:8080/viewfavorites";
    },
    indexItems: function () {
      axios.get("/items").then((response) => {
        console.log("items index", response);
        this.items = response.data;
      });
    },
    indexChampions: function () {
      axios.get("/champions").then((response) => {
        console.log("champions index", response.data);
        this.champions = response.data;
      });
    },
    indexFavorites() {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response);
        this.favorites = response.data;
      });
    },
    legendaryItems(count, name, image) {
      switch (count) {
        case 1:
          this.newFavoriteParams.legendary_name1 = name;
          this.newFavoriteParams.legendary_image1 = image;
          break;
        case 2:
          this.newFavoriteParams.legendary_name2 = name;
          this.newFavoriteParams.legendary_image2 = image;
          break;
        case 3:
          this.newFavoriteParams.legendary_name3 = name;
          this.newFavoriteParams.legendary_image3 = image;
          break;
        case 4:
          this.newFavoriteParams.legendary_name4 = name;
          this.newFavoriteParams.legendary_image4 = image;
          break;
        case 5:
          this.newFavoriteParams.legendary_name5 = name;
          this.newFavoriteParams.legendary_image5 = image;
      }
    },
  },
};
</script>

<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <div class="home">
      <h1>Begin Your custom build!</h1>
      <div class="container">
        <div class="row">
          <div class="col-5 float-right text-right">
            <h2>{{ newFavoriteParams.champion_name }}</h2>
            <img
              class="rounded"
              v-bind:src="newFavoriteParams.champion_image"
              v-bind:alt="newFavoriteParams.champion_name"
            />
          </div>
          <div class="col-6">
            <div class="row pt-5">
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.mythic_name }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.mythic_image"
                  v-bind:alt="newFavoriteParams.mythic_name"
                />
              </div>
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.legendary_name1 }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.legendary_image1"
                  v-bind:alt="newFavoriteParams.legendary_name1"
                />
              </div>
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.legendary_name2 }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.legendary_image2"
                  v-bind:alt="newFavoriteParams.legendary_name2"
                />
              </div>
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.legendary_name3 }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.legendary_image3"
                  v-bind:alt="newFavoriteParams.legendary_name3"
                />
              </div>
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.legendary_name4 }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.legendary_image4"
                  v-bind:alt="newFavoriteParams.legendary_name4"
                />
              </div>
              <div class="pt-4 col-4">
                <p>{{ newFavoriteParams.legendary_name5 }}</p>
                <img
                  style="height: 50px; width: 50px"
                  v-bind:src="newFavoriteParams.legendary_image5"
                  v-bind:alt="newFavoriteParams.legendary_name5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Pick Your Champion!
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div
                    v-for="champion in champions"
                    v-bind:key="champion.id"
                    class="col-3"
                    v-on:click="
                      (newFavoriteParams.champion_name = champion.Name),
                        (newFavoriteParams.champion_image = champion.Image)
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      data-toggle="button"
                      aria-pressed="false"
                      autocomplete="off"
                    >
                      <h2 class="mt-5">{{ champion.Name }}</h2>
                      <img
                        class="rounded"
                        style="height: 300px; width: 200px"
                        v-bind:src="champion.Image"
                        v-bind:alt="champion.Name"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Pick Your Mythic Item
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div
                    v-for="mythic in items.mythic"
                    v-bind:key="mythic.id"
                    class="col-2"
                    v-on:click="
                      (newFavoriteParams.mythic_name = mythic.Name), (newFavoriteParams.mythic_image = mythic.Image)
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      data-toggle="button"
                      aria-pressed="false"
                      autocomplete="off"
                    >
                      <h2 class="mt-5">{{ mythic.Name }}</h2>
                      <img style="height: 75px; width: 75px" v-bind:src="mythic.Image" v-bind:alt="mythic.Name" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Pick your legendary Items
            </button>
          </h2>
          <h2>{{ count }}</h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div
                    v-for="legendary in items.legendary"
                    v-bind:key="legendary.id"
                    class="col-2"
                    v-on:click="(count += 1), legendaryItems(count, legendary.Name, legendary.Image)"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      data-toggle="button"
                      aria-pressed="false"
                      autocomplete="off"
                    >
                      <h2 class="mt-5">{{ legendary.Name }}</h2>
                      <img style="height: 75px; width: 75px" v-bind:src="legendary.Image" v-bind:alt="legendary.Name" />
                    </button>
                  </div>
                </div>
              </div>
              <button v-on:click="createFavorite()">Create Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
