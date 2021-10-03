<template>
  <div class="container">
    <div>
      <div class="clearfix">
        <MoreModel></MoreModel>
        <h2 class="">
            {{step_instruction}}
            <div class="float-end">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#moreModal">
                Where to find more asteroid model?
              </button>
              <button class="btn btn-danger me-2" @click="clear_upload" v-if="have_custom">Clear Cache</button>
              <router-link class="btn btn-light me-2" to="About">About This Project</router-link>
              <router-link class="btn btn-primary me-2" to="Parameter">Next</router-link>
            </div>
        </h2>
      </div>
      <div>
        <div>
          <div class="overflow-scroll">
            <div class="row" style="height: 75vh">
              <Upload></Upload>


              <div class="col-md-4 col-sm-12 col-lg-3" style="padding-bottom: 1%;"
              v-for="(asteroid, index) in asteroids"
              :key=index @click="select(index)">
                <div class="card" :class="{
                  card_selected: index==select_index,
                  card_unselected: index!=select_index,}">
                  <img class="card-img-top" :src="asteroid.picture" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{asteroid.Name}}</h5>
                    <p v-if='asteroid["Asteroid category"]'>Category: {{asteroid["Asteroid category"]}}</p>
                    <p v-if='asteroid.type=="upload"'>Custom Upload Object</p>
                    <p class="card-text">{{asteroid.Description.substring(0, 150) + " "}}
                      <a :href="asteroid.Wiki_Link" target="_blank" class="text-secondary" v-if="asteroid.Wiki_Link">...more</a></p>
                    <div class="text-end" v-if="asteroid.Wiki_Link">
                      <a :href="asteroid.Wiki_Link" target="_blank" class="float-right">Know more</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Upload from "./Upload.vue"
import MoreModel from "./MoreModel.vue"
export default {
  name: "Selector",
  components: {
    Upload: Upload,
    MoreModel,
  },
  data () {
    return {
      step: 0,
      step_instruction: "Select your asteroids",
      base_asteroids : require("../assets/available_asteroids.json"),
      select_index: 0,
    }
  },
  computed: {
    target_asteroid: function(){
      return this.asteroids[this.select_index]
    },
    asteroids: function(){
      let custom = []
      if(localStorage.custom_objs != undefined){
        custom = JSON.parse(localStorage.custom_objs)
        custom = custom.reverse()
      }
      return custom.concat(this.base_asteroids)
    },
    have_custom: function(){
      return localStorage.custom_objs != undefined
    }
  },
  mounted () {
    if(localStorage.select_index != undefined){
      this.select_index = localStorage.select_index
    }else{
      this.select_index = 0
      localStorage.asteroid = JSON.stringify(this.asteroids[this.select_index])
    }
  },
  methods: {
    select(index){
      if(this.select_index == index){
        this.select_index = -1
      }else{
        this.select_index = index
        localStorage.select_index = this.select_index
        localStorage.asteroid = JSON.stringify(this.asteroids[this.select_index])
      }
    },
    triggerUpload(){

    },
    clear_upload(){
      if (confirm('Are you sure you want to remove all uploaded custom objects?')) {
        localStorage.removeItem('custom_objs')
        location.reload()
      } else {
      }
    }
  }
}

</script>
<style lang="">
  .card_unselected:hover{
    border:1px solid #0059a9;
  }

  .card_selected{
    border:3px solid red
  }

  .config{
    display: inline-block;
  }
  .no-focus-btn:focus {
    outline: none;
    box-shadow: none;
  }

</style>
