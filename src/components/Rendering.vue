<template>
  <div class="container">
    <div class="clearfix">
      <h2 class="">
        Renderer
        <div class="float-end align-">
          <router-link class="btn btn-light me-2" to="Parameter"
            >Back</router-link
          >
          <router-link class="btn btn-primary me-2" to="Selector"
            >Select New</router-link
          >
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
          <div v-if="!flag" class="align-middle">
            Light Cruve is Calculating, Plase wait...
          </div>
          <div
            @mouseover="mouseover"
            @mouseleave="monseleave"
            class="col-12 col-sm-12 sub"
            v-if="flag"
          >
            <v-chart :option="lightcurve_option" />
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="row">
        <div class="col-8 sub">
          <p class="h2">About</p>

          <p>
            {{ target_asteroid.Description }}
          </p>
          <div>
            <strong>LightCurve</strong>
            <p></p>
            In astronomy, a light curve is a graph of light intensity of a
            celestial object or region, as a function of time.
          </div>
        </div>
        <div class="col-4 sub">
          <img class="w-75" :src="target_asteroid.picture" />
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

function initAnimate(asteriod, param, data) {
  const MAXSIZE = 50;
  let scene;
  let camera;
  let canvas;
  let renderer;
  let mainOBJ;
  let theta = param.theta;
  let phi = param.phi;
  let dt = 1;
  let period = 180;
  let now = 0;
  let scale = null;
  let AU = 149597870.7;
  param.perihelion_distance = param.perihelion_distance
    ? param.perihelion_distance
    : 2;
  param.albedo = param.albedo ? param.albedo : 1;
  let perihelion = param.perihelion_distance * AU; // need to add
  let albedo = param.albedo; // need to add

  function caculateMagnitude(pixels) {
    let Dbs = Math.abs(perihelion - AU);

    let normalize_factor = scale;

    let AREA =
      (Math.pow(50, 2) / 230400) * 8 * pixels * Math.pow(normalize_factor, -2);
    let d = Math.pow(AREA / Math.PI, 0.5);
    let H = -26.74 - 5 * Math.log10((Math.pow(albedo, 0.5) * d) / 2 / AU);
    let m = H + 5 * Math.log10((perihelion * Dbs) / Math.pow(AU, 2));
    m.toFixed(2);
    console.log(m);
    return m;
  }

  function countPixel() {
    let size = renderer.domElement;
    let width = size.width;
    let height = size.height;

    if (width == 0 && height == 0) return;

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
    if (scale && now < 360 && whitePixal > 1000) {
      // data.push([now++, ((whitePixal / 230400) * 2 - 1) * 20]);
      data.push([now++, caculateMagnitude(whitePixal)]);
    }
  }
  function addLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(100, 0, 0);
    light.target.position.set(-100, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  function addCamera() {
    const fov = 45;
    const aspect = 2;
    const near = 0.01;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(100, 0, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  function addHelper(obj, visible) {
    var helper = new THREE.BoxHelper(obj, 0xff0000);
    helper.update();
    // If you want a visible bounding box
    if (visible) scene.add(helper);
    var box3 = new THREE.Box3();
    box3.setFromObject(helper); // or from mesh, same answer
    // camera.position.set(0, box3.max.y + 100, 0);
    camera.position.set(box3.max.x + 100, 0, 0);
  }

  let arrowHelper;
  function addVecotr() {
    const dir = new THREE.Vector3(0, 0, 0);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    const origin = new THREE.Vector3(0, 0, 0);
    const length = 1000;
    const hex = 0xffff00;

    arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    scene.add(arrowHelper);
  }

  function addAxes() {
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
  }

  function animation() {
    if (mainOBJ) {
      let axis = new THREE.Vector3(
        Math.sin((phi * Math.PI) / 180) * Math.sin((theta * Math.PI) / 180),
        Math.cos((theta * Math.PI) / 180),
        Math.cos((phi * Math.PI) / 180) * Math.sin((theta * Math.PI) / 180)
      );
      arrowHelper.setDirection(axis.normalize());
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
  addAxes();
  addVecotr();

  const objLoader = new OBJLoader();
  if (asteriod.type == "upload") {
    var obj = objLoader.parse(asteriod.file_text);
    mainOBJ = obj;
    obj.scale.x = obj.scale.y = obj.scale.z = scale = caculateScale(obj);
    scene.add(obj);
    addHelper(obj, false);
  } else {
    objLoader.load(`/static/objs/${asteriod["3D model filename"]}`, (obj) => {
      mainOBJ = obj;
      obj.scale.x = obj.scale.y = obj.scale.z = scale = caculateScale(obj);
      scene.add(obj);
      addHelper(obj, false);
    });
  }

  countPixel();
  requestAnimationFrame(render);
}

function initModel(asteriod, param) {
  const MAXSIZE = 50;
  let scene;
  let camera;
  let canvas;
  let renderer;

  function addLight() {
    const color = 0xffffff;
    const intensity = 0.5;
    let light = new THREE.DirectionalLight(color, intensity);
    light.position.set(100, 100, 0);
    light.target.position.set(-100, -100, 0);
    scene.add(light);
    scene.add(light.target);
    light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-100, 100, 0);
    light.target.position.set(-100, -100, 0);
    scene.add(light);
    scene.add(light.target);
    light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-100, -100, 0);
    light.target.position.set(100, 100, 0);
    scene.add(light);
    scene.add(light.target);
    light = new THREE.DirectionalLight(color, intensity);
    light.position.set(100, -100, 0);
    light.target.position.set(-100, 100, 0);
    scene.add(light);
    scene.add(light.target);
  }

  function addCamera() {
    const fov = 45;
    const aspect = 2;
    const near = 0.01;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(100, 0, 0);
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
    camera.position.set(box3.max.x + 100, 0, 0);
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
  if (asteriod.type == "upload") {
    var obj = objLoader.parse(asteriod.file_text);
    obj.scale.x = obj.scale.y = obj.scale.z = caculateScale(obj);
    scene.add(obj);
    addHelper(obj, true);
  } else {
    objLoader.load(`/static/objs/${asteriod["3D model filename"]}`, (obj) => {
      obj.scale.x = obj.scale.y = obj.scale.z = caculateScale(obj);
      scene.add(obj);
      addHelper(obj, true);
    });
  }

  requestAnimationFrame(render);
}

export default {
  name: "Rendering",
  components: {},
  data() {
    return {
      param: {},
      flag: false,
      asteriod: {},
      animation: false,
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
          name: "phase θ(deg)",
          nameLocation: "middle",
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
          name: "apparent magnitude (m)",
          nameLocation: "middle",
          inverse: true,
          min: function (value) {
                return value.min.toFixed(2) ;
              },
          max: function (value) {
                return value.max.toFixed(2) ;
              },
          axisLabel: {
            inside: true
          }
        },
        series: [
          {
            symbolSize: 8,
            data: [],
            type: "scatter",
            large: true,
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
    this.param = JSON.parse(localStorage.param);
    this.asteriod = JSON.parse(localStorage.asteroid);

    console.log(this.param);
    console.log(this.asteriod);

    this.time = setInterval(this.change, 100);

    //Compute
    let vm = this;
    initAnimate(
      this.asteriod,
      this.param,
      this.lightcurve_option.series[0].data
    );
    setTimeout(function () {
      vm.flag = true;
      // console.log("10 seconds");
    }, 10000);
    // initAnimate(this.asteriod, this.param, this.lightcurve_option.series[0].data);
    initModel(this.asteriod, this.param);
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
  },
};
</script>
<style scoped>
.main {
  height: 800px;
}

.sub {
  height: 400px;
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
