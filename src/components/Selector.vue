<template>
  <div class="container">
    <div>
      <div>
        <h2 class="">
            {{step_instructions[step]}}
            <div class="float-end">
              <button class="btn btn-secondary" v-if="step!=0" @click="backStep">Back</button>
              <button class="btn btn-primary me-2" @click="nextStep">Next</button>
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
      <div v-if="step==1">
        <p>Now your astroid is
          <a :href="asteroids[select_index].read_more">{{asteroids[select_index].name}}</a>
          </p>

      </div>
      <div v-if="step==2">

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
  data () {
    return {
      step: 0,
      step_instructions: [
        "Select your asteroids",
        "Specify Parameter",
        "Final Check"
      ],
      asteroids : require("../assets/available_asteroids.json"),
      select_index: 0,
    }
  },
  mounted () {
    console.log(this.asteroids)
  },
  methods: {
    select(index){
      if(this.select_index == index){
        this.select_index = -1
      }else{
        this.select_index = index
      }
    },
    backStep(){
      this.step -= 1
    },
    nextStep(){
      this.step += 1
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
</style>
