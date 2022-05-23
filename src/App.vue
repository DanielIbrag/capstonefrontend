<template>
  <div class="p-3 mb-2 bg-dark text-white">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <img
          src="https://i.ibb.co/y82vVkM/Buildr-gg-transparency.png"
          width="200"
          alt=""
          class="d-inline-block align-middle mr-2"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/newfavorite">Create Favorite</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/viewfavorites">View Favorites</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/champions">Champions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/items">Items</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid p-3 mb-2 bg-dark text-white">
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100vh;
  background-color: #20262a;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
template {
  height: 100%;
}

h2 {
  font-family: "Oswald", sans-serif;
}
h1 {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
}
p {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
}
</style>
