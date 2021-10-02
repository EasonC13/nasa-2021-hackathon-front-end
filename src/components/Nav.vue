<template>
<div>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="https://cdn-icons-png.flaticon.com/512/993/993845.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <span> Light Curve Demo</span>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item">
          <router-link class="nav-link link-dark" aria-current="page" to="Selector">選取資料</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark" to="rendering">Rendering</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle link-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            其他功能
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="scene_test">scene_test</router-link></li>
            <li><a class="dropdown-item disabled" href="#">待補充</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item disabled" href="#">待補充</a></li>
          </ul>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">聯絡作者</button>
        <!-- <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button> -->
      </div>
    </header>
  </div>

</template>
<script>
export default {
  name: "Nav"
}
</script>
<style lang="">

</style>
