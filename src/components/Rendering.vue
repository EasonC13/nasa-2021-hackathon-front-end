<template>
  <div class="container">
    <div class="row">
      <v-chart class="chart col-8" :option="option" />
      <div class="col-4">
        <div class="row">
          <div class="col-12 col-sm-12 model">
            model
            <img class="w-75" src="https://i.imgur.com/FECuMyW.jpg">
          </div>
          <div class="col-12 col-sm-12 real_time_rendering">
            <div>
              <img class="w-75" src="https://i.imgur.com/FECuMyW.jpg">
            </div>
            real_time_rendering
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-12">timeline</div>
      <div class="row">
        <div class="col-6">關於行星與LightCurve的文字資料</div>
        <div class="col-6">小行星的3D Model 顯示或者是高清圖片</div>
      </div>
    </div>
  </div>
</template>
<script>
import VChart from "vue-echarts";
import * as echarts from 'echarts';


export default {
  name: "Rendering",
  components: {
    VChart
  },
  data() {
    return {
      option: {
        title: {
          text: "Light curve",
          left: "center"
        },
        height: 450,
        xAxis: {},
        yAxis: {},
  series: [
    {
      symbolSize: 10,
      data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68]
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
.chart {
  height: 550px;
}

.model, .real_time_rendering {
  height: 200px;
}
</style>
