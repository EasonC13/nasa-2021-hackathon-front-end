<template>
  <div class="container">
    <div>
      <div class="clearfix">
        <h2 class="">
            {{step_instructions[step]}}
            <div class="float-end align-">
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
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="d-block">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingOne">
                      <div class="ps-3">
                        <button class="float-end btn button-light d-inline no-focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Rotate θ
                        </div>
                          <div class="d-inline">
                            <input v-model="param.rotateT" id="" type="range" value="1" min="1" max="360" step="1" :disabled="false">
                            <span class="range-value"><span class="range-val" contenteditable="false">
                              {{param.rotateT}}
                            </span><span class="unit">°</span></span>
                          </div>
                        </div>
                    </h3>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingTwo">
                      <div class="ps-3">
                        <button class="float-end btn button-light d-inline no-focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Rotate ϕ
                        </div>
                          <div class="d-inline">
                            <input v-model="param.rotateF" id="" type="range" value="1" min="1" max="360" step="1" :disabled="false">
                            <span class="range-value"><span class="range-val" contenteditable="false">
                              {{param.rotateF}}
                            </span><span class="unit">°</span></span>
                          </div>

                        </div>
                    </h3>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingFive">
                      <div class="ps-3">
                        <button class="float-end btn button-light d-inline no-focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Period
                        </div>
                          <div class="d-inline">
                            <input v-model="param.rotate_period" id="" type="range" value="1" min="1" max="10" step="0.5" :disabled="false">
                            <span class="range-value"><span class="range-val" contenteditable="false">
                              {{param.rotate_period}}
                            </span><span class="unit">hour</span></span>
                          </div>
                        </div>
                    </h3>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingThree">
                      <div class="ps-3">
                        <button class="float-end btn button-light d-inline no-focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Perihelion Distance
                        </div>
                        <div class="d-inline">
                          <input v-model="param.avg_semi_major_axis" id="" type="range" value="1" min="1" max="5" step="1" :disabled="false">
                          <span class="range-value"><span class="range-val" contenteditable="false">
                            {{param.avg_semi_major_axis}}
                          </span><span class="unit">km</span></span>
                        </div>
                        </div>
                    </h3>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingFour">
                      <div class="ps-3">
                        <button class="float-end btn button-light d-inline no-focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Size
                        </div>
                          <div class="d-inline">
                            <input v-model="param.radius" id="" type="range" value="1" min="1" max="360" step="0.01" :disabled="false">
                            <span class="range-value"><span class="range-val" contenteditable="false">
                              {{param.radius}}
                            </span><span class="unit">km</span></span>
                          </div>
                        </div>
                    </h3>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the four item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                </div>


              </div>

            </div>
            <div class="col-sm-12 col-md-6">
              <p class="h5">The astroid you select is
                <a :href="target_asteroid.read_more">{{target_asteroid.name}}</a>
              </p>
              <img class="w-100" :src="target_asteroid.image_url" alt="Card image cap">
            </div>
          </div>
        </div>


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
  components: {
  },
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
      param: {
        rotateT: 0,
        rotateF: 0,
        rotate_period: 1,
        avg_semi_major_axis: 0,
        radius: 1,
        absolute_magnitude: 0,
      }
    }
  },
  computed: {
    target_asteroid: function(){
      return this.asteroids[this.select_index]
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
      if(this.step === 1){
        localStorage["description"] = this.asteroids[this.select_index].description;
        localStorage["url"] = this.asteroids[this.select_index].image_url;
        this.$router.push('/rendering');
      }else{
        this.step += 1
      }
    },
    pass(e){
      console.log(e)
      e.cancelBubble = true;
      e.stopPropagation()
      // e.stopPropagation()
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
