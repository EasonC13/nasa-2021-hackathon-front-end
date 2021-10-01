<template>
  <div id="app">
    <Nav></Nav>

    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  name: 'App',
  head: {
       link: [
             {
                 rel: "icon",
                 href: require("./assets/analyze.png")
             },
          ]
       },
  components: {
    Nav: Nav,
  }
}
</script>

<style>
  @import './assets/bootstrap.5.0.2.css';
  @import './assets/main.css';
</style>
