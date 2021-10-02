<template>
  <div class="container">
    <div class="row">
      
      <div class="col-8 main">
        <div>
          <img class="w-75" src="https://i.imgur.com/FECuMyW.jpg">
        </div>
        real_time_rendering
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 col-sm-12 sub">
            model
            <img class="w-75" src="https://i.imgur.com/FECuMyW.jpg">
          </div>
          <v-chart class="col-12 col-sm-12 sub" :option="option" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-12 sub">timeline</div>
      <div class="row">
        <div class="col-6 sub">
          關於行星的文字資料

          {{ description }}
          <div>
            LightCurve
            <p></p>
            In astronomy, a light curve is a graph of light intensity of a celestial object or region, as a function of time.
          </div>
        </div>
        <div class="col-6 sub">小行星的3D Model 顯示或者是高清圖片</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: "Rendering",
  components: {
    
  },
  data() {
    return {
      description: localStorage[""],
      option: {
        title: {
          text: "Light curve",
          left: "center"
        },
        height: 300,
        xAxis: [{
          name: "Rational phase",
          title: '12',
          min: 0.0,
          max: 1.0
        }],
        yAxis: {
          name: "brightness gain",
          min: -20,
          max: 20
        },
        series: [
          {
            symbolSize: 10,
            data: [
                    [0,0]
                    [20,1]
                  ],
                  type: 'scatter'
            }
        ]
      }
    };
  }
}

</script>
<style scoped>
.main {
  height: 800px;
  border: solid;
}

.sub {
  height: 400px;
  border: solid;
}
</style>
