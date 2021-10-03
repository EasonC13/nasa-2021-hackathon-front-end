<template>
<div>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="h1 d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="https://cdn-icons-png.flaticon.com/512/993/993845.png" alt="" width="60" height="48" class="d-inline-block align-text-top">
        <span class="ps-3"> Light Curve Demo</span>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item btn" :class="{
          'btn-light': currentRouteName=='About'}">
          <router-link class="nav-link text-decoration-none" :class="{
            'link-dark': currentRouteName!='About',
            'link-primary': currentRouteName=='About'}"
           aria-current="page" to="About">0. Introduction</router-link>
        </li>
        <li class="nav-item btn" :class="{
          'btn-light': currentRouteName=='Selector'}">
          <router-link class="nav-link text-decoration-none" :class="{
            'link-dark': currentRouteName!='Selector',
            'link-primary': currentRouteName=='Selector'}"
           aria-current="page" to="Selector">1. Select Asteroid</router-link>
        </li>
        <li class="nav-item btn" :class="{
          'btn-light': currentRouteName=='Parameter',
          '': currentRouteName!='Parameter',}">
          <router-link class="nav-link text-decoration-none" :class="{
            'link-dark': currentRouteName!='Parameter',
            'link-primary': currentRouteName=='Parameter'}"
           aria-current="page" to="Parameter">2. Specify Parameter</router-link>
        </li>
        <li class="nav-item btn" :class="{
          'btn-light': currentRouteName=='Renderer'}">
          <router-link class="nav-link text-decoration-none" :class="{
            'link-dark': currentRouteName!='Renderer',
            'link-primary': currentRouteName=='Renderer'}"
           aria-current="page" to="Renderer">3. Light curve analysis</router-link>
        </li>
        <li class="nav-item dropdown btn">
          <a class="nav-link dropdown-toggle link-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <li><router-link class="dropdown-item" to="Upload">Upload</router-link></li> -->
            <li><router-link class="dropdown-item" to="question">Challenge Game</router-link></li>
            <!-- <li><router-link class="dropdown-item" to="More-Model">More Model</router-link></li> -->
            <!-- <li><hr class="dropdown-divider"></li> -->
          </ul>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Contact Us</button>
        <!-- <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button> -->
      </div>
    </header>
  </div>

</template>
<script>
export default {
  name: "Nav",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    have_selected_asteroid(){
      return localStorage.asteroid == undefined
    }
},
}
</script>
<style lang="">

</style>
