<template>

  <div class="container">
    <div>
      <div class="clearfix">
        <h2 class="">
            {{step_instruction}}
            <div class="float-end align-">
              <router-link class="btn btn-light me-2" to="Selector">Back</router-link>
              <router-link class="btn btn-primary me-2" to="Renderer">Next</router-link>
            </div>
        </h2>
      </div>
      <div>
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
                          <input v-model="param.rotateT"
                           id="" type="range" value="1" min="0" max="180" step="1" :disabled="false">
                          <span class="range-value"><span class="range-val" contenteditable="false">
                            {{param.rotateT}}
                          </span><span class="unit">°</span></span>
                        </div>
                        <br>
                        <div class="h4 d-inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                          <span class="">Rotate</span> ϕ
                        </div>
                        <div class="d-inline">
                          <input v-model="param.rotateF"
                          id="" type="range" value="1" min="0" max="360" step="1" :disabled="false">
                          <span class="range-value"><span class="range-val" contenteditable="false">
                            {{param.rotateF}}
                          </span><span class="unit">°</span></span>
                        </div>
                      </div>

                    </h3>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <vue-mathjax :formula="formula"></vue-mathjax>
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
              <div class="accordion" id="Parameter">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="intro_headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#intro_collapseOne" aria-expanded="true" aria-controls="intro_collapseOne">
                        Astroid NAME
                      </button>
                    </h2>
                    <div id="intro_collapseOne" class="accordion-collapse collapse show" aria-labelledby="intro_headingOne" data-bs-parent="#Parameter">
                      <div class="accordion-body">
                        A newly discovered asteroid is given a provisional designation (such as 2002 AT4) consisting of the year of discovery and an alphanumeric code indicating the half-month of discovery and the sequence within that half-month. Once an asteroid’s orbit has been confirmed, it is given a number, and later may also be given a name (e.g. 433 Eros). The formal naming convention uses parentheses around the number – e.g. (433) Eros – but dropping the parentheses is quite common. Informally, it is common to drop the number altogether, or to drop it after the first mention when a name is repeated in running text. In addition, names can be proposed by the asteroid’s discoverer, within guidelines established by the International Astronomical Union. 
                        <a href="https://en.wikipedia.org/wiki/Asteroid">ref</a>
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
import { VueMathjax } from "vue-mathjax";
export default {
  name: "Parameter",
  components: {
    "vue-mathjax": VueMathjax
  },
  data () {
    return {
      step_instruction: "Specify Parameter",
      param: {
        rotateT: 0,
        rotateF: 0,
        rotate_period: 1,
        avg_semi_major_axis: 0,
        radius: 1,
        absolute_magnitude: 0,
        formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
      },
    }
  },
  watch: {
      param: {
        handler(){
          localStorage.param = JSON.stringify(this.param)
      },
      deep: true
    }
  },
  computed: {
    target_asteroid: function(){
      try{
        return JSON.parse(localStorage.asteroid)
      }catch(e){
        alert("Please Select your asteroids first!")
        this.$router.push({ path: 'Selector' })
      }
    }
  },
  mounted () {
    try{
      this.param = JSON.parse(localStorage.param)
    }catch(e){}
  },
  methods: {
    pass(e){
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
