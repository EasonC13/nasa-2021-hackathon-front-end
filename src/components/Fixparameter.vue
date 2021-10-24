<template>
  <div>
    <div class="accordion" id="accordion_fixparameter">
      <div class="accordion-item">
        <h3 class="accordion-header" id="phase_angle">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#phase_angle_1" aria-expanded="true" aria-controls="phase_angle_1">
            Phase angle δ= {{ param.phase_angle }} °
          </button>
        </h3>
        <div id="phase_angle_1" class="accordion-collapse collapse show" aria-labelledby="phase_angle" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Phase angle in astronomical observations is the angle
            between the light incident onto an observed object and
            the light reflected from the object. In the context of
            astronomical observations, this is usually the angle
            Sun-object-observer.In order to simplify the problem, we
            set the phase angle = 0 and the asteroid is in
            conditions of ideal solar opposition.
            <img src="https://i.imgur.com/psOphVP.png" alt="" class="intro_img"/>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" id="Rotation_Period">
          <button v-if="can_edit_rotation_period" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Rotation_Period_1" aria-expanded="true" aria-controls="Rotation_Period_1">
            Rotation Period = {{ target_asteroid["Rotation period(hr)"] }} (hr)
          </button>
          <button v-if="can_edit_rotation_period == false" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Rotation_Period_1" aria-expanded="true" aria-controls="Rotation_Period_1">
            Rotation Period uneditable
          </button>
        </h3>
        <div id="Rotation_Period_1" class="accordion-collapse collapse show" aria-labelledby="Rotation_Period" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>
              The rotation period of the asteroid around Rotation
              axis vector where is angular speed direction,
              counterclockwisely.
            </p>
            <p>
              Rotation period's value can't be edit at custom
              asteroid object.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fixparameter',
  props:{can_edit_rotation_period: Boolean},
  data() {
    return {
      param: {
        phase_angle: 0,
      },
    }
  },
  computed: {
    target_asteroid: function () {
      try {
        return JSON.parse(localStorage.asteroid);
      } catch (e) {
        alert("Please Select your asteroids first!");
        this.$router.push({ path: "Selector" });
      }
    },
  }
}
</script>
<style scoped>
.intro_img {
  width: 90%;
}
</style>