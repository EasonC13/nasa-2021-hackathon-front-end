<template>
  <div class="container">
    <canvas id="main"></canvas>
  </div>
</template>
<script>
const axios = require('axios');
import * as THREE from 'three';
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);
var STLLoader = require('three-stl-loader')(THREE)
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



const MAXSIZE = 50;
let scene;
let camera;
let canvas;
let renderer;
let mainOBJ;

function countPixel() {
  let size = renderer.domElement;
  let width = size.width;
  let height = size.height
  let gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true });
  let pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  let imageData = new ImageData(new Uint8ClampedArray(pixels), width, height);

  const allPixal = imageData.data.length/4;
  let blackPixal = 0

  for (let index = 0; index < imageData.data.length; index += 4) {
    const rgba = [imageData.data[index],
    imageData.data[index + 1],
    imageData.data[index + 2],
    (imageData.data[index + 3] / 255)];
    if(rgba[0] == 0 && rgba[1] == 0 && rgba[2] == 0)
      blackPixal++;
  }

  console.log(blackPixal, allPixal, blackPixal/allPixal)
}

function addLight() {
  const color = 0xFFFFFF;
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
  camera.lookAt(new THREE.Vector3(0, 0, 0))
}

function addControls() {
  const controls = new OrbitControls(camera, canvas);
  controls.update();
}

function addAxes() {
  const axesHelper = new THREE.AxesHelper(100);
  scene.add(axesHelper);
}

function animation() {
  if (mainOBJ) {
    mainOBJ.rotateX(Math.PI / 180);
    mainOBJ.rotateY(Math.PI / 180);
    mainOBJ.rotateZ(Math.PI / 180);
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

export default {
  name: "Scene",
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
      asteroids : [],
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
    canvas = document.querySelector('#main');
    renderer = new THREE.WebGLRenderer({ canvas });
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    addCamera()
    addLight()
    addControls();
    addAxes()

    let path = "/static/objs/"
    let filename="Vesta.obj"
    // filename = 'Toutatis_hirestoutatis.obj'
    if(filename.includes(".obj")){
      let objLoader = new THREE.OBJLoader();
      objLoader.load(path+filename, (obj) => {
        mainOBJ = obj;
        obj.scale.x = obj.scale.y = obj.scale.z = caculateScale(obj);
        scene.add(obj);
      });
    }else if(filename.includes(".stl")){
      let stlLoader = new STLLoader()

      stlLoader.load(path+filename, function (geometry) {
        var material = new THREE.MeshNormalMaterial()
        var mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
      })
    }

    countPixel();
    requestAnimationFrame(render);
  },
  methods: {

  }
}

</script>
<style lang="">

</style>
