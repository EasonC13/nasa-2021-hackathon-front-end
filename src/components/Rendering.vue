<template>
  <div class="container">
    <div class="clearfix">
        <h2 class="">
            Renderer
            <div class="float-end align-">
              <router-link class="btn btn-light me-2" to="Parameter">Back</router-link>
              <router-link class="btn btn-primary me-2" to="Selector">Select New</router-link>
            </div>
        </h2>
    </div>
    <div class="row">
      <div class="col-8 main">
        <div>
          <!-- <img class="w-75" src="https://i.imgur.com/FECuMyW.jpg"> -->
          <canvas id="animate"></canvas>
        </div>
        <!-- real_time_rendering -->
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 col-sm-12 sub">
            <!-- model
            <img class="w-75" :src="asteroids_image_url"> -->
            <canvas id="model"></canvas>
          </div>
          <div
            @mouseover="mouseover"
            @mouseleave="monseleave"
            class="col-12 col-sm-12 sub"
          >
            <v-chart :option="lightcurve_option" />
          </div>
          <!-- <v-chart class="col-12 col-sm-12 sub" :option="lightcurve_option"/> -->
        </div>
      </div>
    </div>
    <div class="">
      <div class="row">
        <div class="col-6 sub">
          關於此行星
          <p>
            {{ description }}
          </p>
          <div>
            LightCurve
            <p></p>
            In astronomy, a light curve is a graph of light intensity of a
            celestial object or region, as a function of time.
          </div>
        </div>
        <div class="col-6 sub">
          小行星的3D Model 顯示或者是高清圖片
          <img class="w-75" :src="asteroids_image_url" />
        </div>
      </div>
      <button @click="mouseover"></button>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function initAnimate(data) {
  const MAXSIZE = 50;
  let scene;
  let camera;
  let canvas;
  let renderer;
  let mainOBJ;
  let theta = 0;
  let phi = 90;
  let dt = 1;
  let period = 180;
  let now = 0;
  let scale = 1;

  function caculateMagnitude(pixels) {
    let AU = 149597870.7;
    let perihelion = 2 * AU; // need to add
    let albedo = 1; // need to add
    let Dbs = Math.abs(perihelion - AU);

    let normalize_factor = scale;

    let AREA =
      Math.pow(50, 2) / 230400 * pixels * Math.pow(normalize_factor, -2);
    let d = Math.pow(AREA / 4 / Math.PI, 0.5);
    let H = -26.74 - 5 * Math.log10((Math.pow(albedo, 0.5) * d) / 2 / AU);
    let m = H + 5 * Math.log10((perihelion * Dbs) / Math.pow(AU, 2));
    console.log(m);
    return m;
  }
  // console.log(caculateMagnitude(230400));

  function countPixel() {
    let size = renderer.domElement;
    let width = size.width;
    let height = size.height;

    if (width == 0 || height == 0) return;

    let gl = canvas.getContext("webgl2", {
      preserveDrawingBuffer: true,
    });
    let pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    let imageData = new ImageData(new Uint8ClampedArray(pixels), width, height);

    const allPixal = imageData.data.length / 4;
    let whitePixal = 0;

    for (let index = 0; index < imageData.data.length; index += 4) {
      const rgba = [
        imageData.data[index],
        imageData.data[index + 1],
        imageData.data[index + 2],
        imageData.data[index + 3] / 255,
      ];
      if (rgba[0] == 0 && rgba[1] == 0 && rgba[2] == 0) continue;
      whitePixal +=
        1 -
        Math.sqrt(
          Math.pow(255 - rgba[0], 2) +
            Math.pow(255 - rgba[1], 2) +
            Math.pow(255 - rgba[2], 2)
        ) /
          Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2));
    }

    // console.log(whitePixal, allPixal);
    if (now < 360 && whitePixal > 0) {
      // data.push([now++, ((whitePixal / 230400) * 2 - 1) * 20]);
      data.push([now++, caculateMagnitude(whitePixal)]);
    }
  }

  function addLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 100, 0);
    light.target.position.set(0, -100, 0);
    scene.add(light);
    scene.add(light.target);
  }

  function addCamera() {
    const fov = 45;
    const aspect = 2;
    const near = 0.01;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 100, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  function addHelper(obj, visible) {
    var helper = new THREE.BoxHelper(obj, 0xff0000);
    helper.update();
    // If you want a visible bounding box
    if (visible) scene.add(helper);
    var box3 = new THREE.Box3();
    box3.setFromObject(helper); // or from mesh, same answer
    camera.position.set(0, box3.max.y + 100, 0);
  }

  function animation() {
    if (mainOBJ) {
      let axis = new THREE.Vector3(
        Math.cos(phi) * Math.sin(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(theta)
      );
      mainOBJ.rotateOnAxis(axis, Math.PI / 180);
    }
  }

  function caculateScale(obj) {
    const box = new THREE.Box3().setFromObject(obj);
    const x = box.max.x - box.min.x;
    const y = box.max.y - box.min.y;
    const z = box.max.z - box.min.z;
    const longest = Math.max(x, y, z);
    return MAXSIZE / longest;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    animation();
    renderer.render(scene, camera);
    countPixel();
    requestAnimationFrame(render);
  }

  canvas = document.querySelector("#animate");
  renderer = new THREE.WebGLRenderer({
    canvas,
  });
  scene = new THREE.Scene();
  scene.background = new THREE.Color("black");

  addCamera();
  addLight();

  const objLoader = new OBJLoader();
  objLoader.load("/static/objs/kleo.obj", (obj) => {
    mainOBJ = obj;
    obj.scale.x = obj.scale.y = obj.scale.z = scale = caculateScale(obj);
    scene.add(obj);
    addHelper(obj, false);
  });
  countPixel();
  requestAnimationFrame(render);
}

function initModel() {
  const MAXSIZE = 50;
  let scene;
  let camera;
  let canvas;
  let renderer;
  let mainOBJ;
  let theta = 60;
  let phi = 50;
  let dt = 1;
  let period = 180;

  function addLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 100, 0);
    light.target.position.set(0, -100, 0);
    scene.add(light);
    scene.add(light.target);
  }

  function addCamera() {
    const fov = 45;
    const aspect = 2;
    const near = 0.01;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 100, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  function addControls() {
    const controls = new OrbitControls(camera, canvas);
    controls.update();
  }

  function addAxes() {
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
  }

  function addHelper(obj, visible) {
    var helper = new THREE.BoxHelper(obj, 0xff0000);
    helper.update();
    // If you want a visible bounding box
    if (visible) scene.add(helper);
    var box3 = new THREE.Box3();
    box3.setFromObject(helper); // or from mesh, same answer
    camera.position.set(0, box3.max.y + 100, 0);
  }

  function caculateScale(obj) {
    const box = new THREE.Box3().setFromObject(obj);
    const x = box.max.x - box.min.x;
    const y = box.max.y - box.min.y;
    const z = box.max.z - box.min.z;
    const longest = Math.max(x, y, z);
    return MAXSIZE / longest;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  canvas = document.querySelector("#model");
  renderer = new THREE.WebGLRenderer({
    canvas,
  });
  scene = new THREE.Scene();
  scene.background = new THREE.Color("black");

  addCamera();
  addLight();
  addControls();
  addAxes();

  const objLoader = new OBJLoader();
  objLoader.load("/static/objs/kleo.obj", (obj) => {
    mainOBJ = obj;
    obj.scale.x = obj.scale.y = obj.scale.z = caculateScale(obj);
    scene.add(obj);
    addHelper(obj, true);
  });
  requestAnimationFrame(render);
}

export default {
  name: "Rendering",
  components: {},
  data() {
    return {
      param: {},
      asteriod: {},
      description: localStorage["description"],
      asteroids_image_url: localStorage["url"],
      lightcurve_option: {
        title: {
          text: "Light curve",
          left: "center",
        },
        tooltip: {
          triggerOn: "none",
          position: function (pt) {
            return [pt[0], 130];
          },
        },
        height: 250,
        xAxis: {
          name: "Rational phase",
          title: "12",
          axisPointer: {
            value: 0,
            snap: false,
            lineStyle: {
              color: "#7581BD",
              width: 2,
            },
            label: {
              show: true,
              backgroundColor: "#7581BD",
            },
            handle: {
              show: true,
              color: "#7581BD",
            },
          },
          min: 0,
          max: 360,
        },
        yAxis: {
          name: "brightness gain",
          min: -20,
          max: 20,
        },
        series: [
          {
            symbolSize: 10,
            data: [],
            type: "scatter",
          },
        ],
      },
    };
  },
  methods: {
    change: function () {
      this.lightcurve_option.xAxis.axisPointer.value =
        (this.lightcurve_option.xAxis.axisPointer.value + 1) % 360;
    },
    mouseover: function () {
      clearInterval(this.time);
    },
    monseleave: function () {
      this.time = setInterval(this.change, 100);
    },
  },
  mounted() {
    // load parameter and asteroid
    this.param = JSON.parse(localStorage.param)
    this.asteriod = JSON.parse(localStorage.asteroid)


    this.time = setInterval(this.change, 100);

    //Compute
    initAnimate(this.lightcurve_option.series[0].data);
    initModel();
  },
};
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

#animate {
  width: 100%;
  height: 100%;
  display: block;
}

#model {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
