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
            <img class="w-75" :src="asteroids_image_url">
            
          </div>
          <div @mouseover="mouseover" @mouseleave="monseleave" class="col-12 col-sm-12 sub">
            <v-chart :option="lightcurve_option"/>
          </div>
          <!-- <v-chart class="col-12 col-sm-12 sub" :option="lightcurve_option"/> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6 sub">
          關於此行星
          <p>
            {{ description }}
          </p>
          <div>
            LightCurve
            <p></p>
            In astronomy, a light curve is a graph of light intensity of a celestial object or region, as a function of time.
          </div>
        </div>
        <div class="col-6 sub">小行星的3D Model 顯示或者是高清圖片
          <img class="w-75" :src="asteroids_image_url">
        </div>
        
      </div>
      <button @click="mouseover"></button>
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
      description: localStorage["description"],
      asteroids_image_url: localStorage["url"],
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
            snap: false,
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
          max: 360
        },
        yAxis: {
          name: "brightness gain",
          min: -20,
          max: 20
        },
        series: [
          {
            symbolSize: 10,
            data: [],
            type: 'scatter'
          }
        ]
      },
    };
  },methods: {
    change: function() {
      this.lightcurve_option.xAxis.axisPointer.value = (this.lightcurve_option.xAxis.axisPointer.value + 1)%180;
    },
    mouseover: function() {
      clearInterval(this.time);
    },
    monseleave: function(){
      this.time = setInterval(this.change, 100);
    }
  },
  mounted () {
    this.time = setInterval(this.change, 100);

    //Compute

    this.lightcurve_option.series[0].data = [[100, 2], [200,3]];
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
