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
          <v-chart class="col-12 col-sm-12 sub" :option="lightcurve_option" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-12 sub">
        <v-chart class="col-12 col-sm-12 sub" :option="lightcurve_option" />
      </div>
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
      <!-- <button @click="change"></button> -->
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
      lightcurve_option: {
        title: {
          text: "Light curve",
          left: "center"
        },
        tooltip: {
          triggerOn: 'none',
          position: function (pt) {
            return [pt[0], 130];
          }
        },
        height: 250,
        xAxis: {
          name: "Rational phase",
          title: '12',
          axisPointer: {
            value: 0,
            snap: true,
            lineStyle: {
              color: '#7581BD',
              width: 2
            },
            label: {
              show: true,
              backgroundColor: '#7581BD'
            },
            handle: {
              show: true,
              color: '#7581BD'
            }
          },
          min: 0,
          max: 180
        },
        yAxis: {
          name: "brightness gain",
          min: -20,
          max: 20
        },
        series: [
          {
            symbolSize: 10,
            data: [
                    [0,0],
                    [1,1]
                  ],
            type: 'scatter'
          },
          {
            symbolSize: 10,
            data: [[2,0]],
            type: 'scatter'
          }
        ]
      },
    };
  },methods: {
    change() {
      this.lightcurve_option.xAxis.axisPointer.value = (this.lightcurve_option.xAxis.axisPointer.value + 1)%180;
      console.log(this.lightcurve_option.xAxis.axisPointer.value);
    }
  },
  mounted () {
    timeTicket = setInterval(this.change, 100);
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
