<template>
  <div class="container">
    <div>
      <div class="clearfix">
        <h2 class="">
            {{step_instruction}}
            <div class="float-end align-">
              <router-link class="btn btn-light me-2" to="About">About This Project</router-link>
              <router-link class="btn btn-primary me-2" to="Parameter">Next</router-link>
            </div>
        </h2>
      </div>
      <div v-if="step==0">
        <div>
          <div class="overflow-scroll">
            <div class="row" style="height: 75vh">
              <div class="col-md-4 col-sm-12 col-lg-3" style="padding-bottom: 1%;"
              v-for="(asteroid, index) in asteroids"
              :key=index @click="select(index)">
                <div class="card" :class="{
                  card_selected: index==select_index,
                  card_unselected: index!=select_index,}">
                  <img class="card-img-top" :src="asteroid.image_url" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{asteroid.name}}</h5>
                    <p class="card-text">{{asteroid.description.substring(0, 150) + "..."}}</p>
                    <div class="text-end">
                      <a :href="asteroid.read_more" class="float-right">Know more</a>
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
const axios = require('axios');
import { Scene } from 'three';

const scene = new Scene();
export default {
  name: "Selector",
  components: {
  },
  data () {
    return {
      step: 0,
      step_instruction: "Select your asteroids",
      asteroids : require("../assets/available_asteroids.json"),
      select_index: 0,
      param: {
        rotateT: 0,
        rotateF: 0,
        rotate_period: 1,
        avg_semi_major_axis: 0,
        radius: 1,
        absolute_magnitude: 0,
      },
    }
  },
  computed: {
    target_asteroid: function(){
      return this.asteroids[this.select_index]
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
