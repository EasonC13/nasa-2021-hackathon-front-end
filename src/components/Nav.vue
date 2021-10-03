<template>
<div>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="h3 d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="https://cdn-icons-png.flaticon.com/512/993/993845.png" alt="" width="60" height="48" class="d-inline-block align-text-top">
        <span class="ps-3"> Super Emulator for Asteroid Lightcurve</span>
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
            <li><router-link class="dropdown-item disabled" to="About">Contact Us</router-link></li>
            <!-- <li><router-link class="dropdown-item" to="More-Model">More Model</router-link></li> -->
            <!-- <li><hr class="dropdown-divider"></li> -->
          </ul>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <!-- <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button> -->
        <a style="padding-right: 10px" href="https://github.com/EasonC13/nasa-2021-hackathon-front-end" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg><svg style="padding-left: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 16" width="90" height="32"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path></svg></a>
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
