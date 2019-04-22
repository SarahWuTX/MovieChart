<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">榜单</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #404040;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #404040;
  margin: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #409eff;
}

::selection {
  background: #404040;
  color: whitesmoke;
}
</style>
