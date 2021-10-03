<template>
  <div class="container">
    <div>
      <div class="clearfix">
        <h2 class="">
          {{ step_instruction }}
          <div class="float-end align-">
            <router-link class="btn btn-light me-2" to="Selector"
              >Back</router-link
            >
            <router-link class="btn btn-primary me-2" to="Renderer"
              >Next</router-link
            >
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
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Rotate θ
                        </div>
                        <div class="d-inline">
                          <input
                            v-model="param.theta"
                            id=""
                            type="range"
                            value="1"
                            min="0"
                            max="180"
                            step="1"
                            :disabled="false"
                          />
                          <span class="range-value"
                            ><span class="range-val" contenteditable="false">
                              {{ param.theta }} </span
                            ><span class="unit">°</span></span
                          >
                        </div>
                        <br />
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span class="">Rotate</span> ϕ
                        </div>
                        <div class="d-inline">
                          <input
                            v-model="param.phi"
                            id=""
                            type="range"
                            value="1"
                            min="0"
                            max="360"
                            step="1"
                            :disabled="false"
                          />
                          <span class="range-value"
                            ><span class="range-val" contenteditable="false">
                              {{ param.phi }} </span
                            ><span class="unit">°</span></span
                          >
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Rotation axis vector is the spin axis direction of the
                        asteroids. We set this vector in spherical coordinate in
                        fix body frame. Its polar angle measured from a fixed
                        zenith direction, and the azimuthal angle of its
                        orthogonal projection on a reference plane that passes
                        through the origin and is orthogonal to the zenith,
                        measured from a fixed reference direction(body x axis
                        direction) on that plane. For example the direction
                        <span ref="mathJaxEl" class="e-mathjax"
                          >$\hat r = (1, 0\ deg, 0\ deg)$
                        </span>
                        is the vector $\vec v = (0,0,1)$ ( the z axis)in
                        celestial coordinate systems in fix body frame.
                        <br />
                        <img src="https://i.imgur.com/HBiqxAj.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingTwo">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Category
                        </div>
                        <div class="d-inline dropdown">
                          <button
                            class="btn btn-light dropdown-toggle btn-lg"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {{ param.category }}
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li v-for="(cat, index) in categories" :key="index">
                              <button
                                class="dropdown-item btn btn-light btn-lg"
                                @click="changeCat(cat)"
                              >
                                {{ cat }}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <img src="https://i.imgur.com/Mgd15QU.png" alt="" />
                        <ul>
                          <li>Main belt</li>
                          <li>Trojans asteroids</li>
                          <li>Hildas asteroids</li>
                          <li>
                            Near-Earth Apollos class
                            <ul>
                              <li>
                                The Apollo asteroids are Earth-crossing
                                asteroids that have an orbital semi-major axis
                                greater than that of the Earth (a > 1 AU) but
                                perihelion distances less than the Earth’s
                                aphelion distance (q &lt; 1.017 AU)
                              </li>
                            </ul>
                            <img
                              src="https://i.imgur.com/m8owuQh.png"
                              alt=""
                              class="intro_img"
                            />
                          </li>
                          <li>
                            Near-Earth Amors class
                            <ul>
                              <li>
                                The Amor asteroids asteroids whose orbital
                                perihelion of these objects is close to, but
                                greater than, the orbital aphelion of Earth
                                (i.e., the objects do not cross Earth’s orbit),
                                with most Amors crossing the orbit of Mars.
                              </li>
                            </ul>
                            <img
                              src="https://i.imgur.com/NBZM2Gm.png"
                              alt=""
                              class="intro_img"
                            />
                          </li>
                          <li>
                            Near-Earth Aten asteroids
                            <ul>
                              <li>
                                The Aten asteroids are a dynamical group of
                                asteroids whose orbits bring them into proximity
                                with Earth. By definition, Atens are
                                Earth-crossing asteroids (a &lt; 1.0 AU and
                                Q > 0.983 AU).
                              </li>
                            </ul>
                            <img
                              src="https://i.imgur.com/rzhMjgm.png"
                              alt=""
                              class="intro_img"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingThree">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Perihelion Distance
                        </div>
                        <div class="d-inline">
                          <input
                            v-model="param.perihelion_distance"
                            id=""
                            type="range"
                            value="1"
                            min="0.5"
                            max="6"
                            step="0.1"
                            :disabled="false"
                          />
                          <span class="range-value"
                            ><span class="range-val" contenteditable="false">
                              {{ param.perihelion_distance }} </span
                            ><span class="unit">AU</span></span
                          >
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <img
                          src="https://i.imgur.com/mBhfBCP.png"
                          alt=""
                          class="intro_img"
                        /><br />
                        The Asteroid’s two apsides are the farthest point,
                        aphelion, and the nearest point, perihelion, of its
                        orbit around the host Sun. The terms aphelion and
                        perihelion apply in the same way to the orbits of
                        Jupiter and the other planets, the comets of the Solar
                        System.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingFour">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Diameter
                        </div>
                        <div class="d-inline">
                          <input
                            v-model="param.diameter"
                            id=""
                            type="range"
                            value="1"
                            min="0.1"
                            max="100"
                            step="0.1"
                            :disabled="false"
                          />
                          <span class="range-value"
                            ><span class="range-val" contenteditable="false">
                              {{ param.diameter }} </span
                            ><span class="unit">km</span></span
                          >
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        The average Diameter of asteroid.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingFive">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Albedo
                        </div>
                        <div class="d-inline">
                          <input
                            v-model="param.albedo"
                            id=""
                            type="range"
                            value="1"
                            min="0"
                            max="1"
                            step="0.01"
                            :disabled="false"
                          />
                          <span class="range-value"
                            ><span class="range-val" contenteditable="false">
                              {{ param.albedo }} </span
                            ><span class="unit"><!-- Unit --></span></span
                          >
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Albedo (/ælˈbiːdoʊ/; from Latin albedo ‘whiteness’) is
                        the measure of the diffuse reflection of solar radiation
                        out of the total solar radiation and measured on a scale
                        from 0, corresponding to a black body that absorbs all
                        incident radiation, to 1, corresponding to a body that
                        reflects all incident radiation.
                        <br />
                        We need the Albedo of an asteroid to culculate the
                        absolute magnitude and the apparent magnitude.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingSix">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Phase angle δ= {{ param.phase_angle }} °
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Phase angle in astronomical observations is the angle
                        between the light incident onto an observed object and
                        the light reflected from the object. In the context of
                        astronomical observations, this is usually the angle
                        Sun-object-observer.In order to simplify the problem, we
                        set the phase angle = 0 and the asteroid is in
                        conditions of ideal solar opposition.
                        <img
                          src="https://i.imgur.com/psOphVP.png"
                          alt=""
                          class="intro_img"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingSeven">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          Rotation Period = {{ target_asteroid["Rotation period(hr)"]}} (hr)
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        The rotation period of the asteroid around Rotation axis
                        vector where is angular speed direction,
                        counterclockwisely.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="heading11">
                      <div class="ps-3">
                        <button
                          class="
                            float-end
                            btn
                            button-light
                            d-inline
                            no-focus-btn
                          "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          <i class="bi bi-chevron-down"></i>
                        </button>
                        <div
                          class="h4 d-inline"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          Rotation model
                        </div>
                        <div class="d-inline dropdown">
                          <button
                            class="btn btn-light dropdown-toggle btn-lg"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <!-- {{ param.rotation_model }} -->
                            1
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li v-for="(cat, index) in [1, 2]" :key="index">
                              <button
                                class="dropdown-item btn btn-light btn-lg"
                                @click="chageRotationModel(cat)"
                              >
                                {{ cat }}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </h3>
                    <div
                      id="collapse11"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading11"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          Rotation model 1 : Rotation around a fixed axis
                          (special case: non-physical model)
                        </p>
                        We assume that the motion of asteroid is rotation around
                        a fixed axis to simplify the setting and calculation.
                        This setting is not the true rotation motion of the
                        asteroid. Really rotating motion, the axis of rotation
                        will also rotate, especially the rod-shaped or flatter
                        (non-spherical)
                        <a
                          href="https://www.youtube.com/watch?v=9QXRIinrGS0&ab_channel=RussEdmonds"
                          >example</a
                        >
                        , but to calculate this requires numerical integration
                        of the asteroid’s moment of inertia. Some of the moment
                        of inertia distribution does not have an analytical
                        solution, and it is necessary to solve the Euler
                        equation numerically:
                        <a href="https://www.youtube.com/watch?v=1VPfZ_XzisU"
                          >Veritasium介紹The Bizarre Behavior of Rotating
                          Bodies</a
                        >
                        <br /><br />
                        <p>
                          Rotation model 2 : Symmetric top precession model
                          (physical model)
                        </p>
                        In order to simplify the calculation complexity under
                        the physical conditions, we assume such a model based on
                        the geometric configuration of the asteroid. This model
                        is the simplest model that can simulate precession.
                        Assuming that the object is axisymmetric, I1 = 12 is not
                        equal to I3.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="accordion" id="Parameter">
                <div class="accordion-item">
                  <button class="btn  w-100 text-start clearfix" id="intro_headingOne" data-bs-toggle="collapse"
                      data-bs-target="#intro_collapseOne"
                      aria-expanded="true"
                      aria-controls="intro_collapseOne">
                  <h2 class="accordion-header float-start" v-if='target_asteroid["#"]!=undefined'>

                      {{ target_asteroid["#"] + " " + target_asteroid.Name }}

                  </h2>
                  <h2 class="accordion-header float-start" v-if='target_asteroid["#"]==undefined'>

                      {{ target_asteroid.Name }}

                  </h2>
                  <i class="bi bi-question-circle float-end h2"></i>
                  </button>
                  <div
                    id="intro_collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="intro_headingOne"
                    data-bs-parent="#Parameter"
                  >
                    <div class="accordion-body">
                      A newly discovered asteroid is given a provisional
                      designation (such as 2002 AT4) consisting of the year of
                      discovery and an alphanumeric code indicating the
                      half-month of discovery and the sequence within that
                      half-month. Once an asteroid’s orbit has been confirmed,
                      it is given a number, and later may also be given a name
                      (e.g. 433 Eros). The formal naming convention uses
                      parentheses around the number – e.g. (433) Eros – but
                      dropping the parentheses is quite common. Informally, it
                      is common to drop the number altogether, or to drop it
                      after the first mention when a name is repeated in running
                      text. In addition, names can be proposed by the asteroid’s
                      discoverer, within guidelines established by the
                      International Astronomical Union. <a target="_blank"
                      class="" href="https://en.wikipedia.org/wiki/Asteroid">(know more)</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <img
                class="w-100"
                :src="target_asteroid.picture"
                alt="Card image cap"
              /> -->
              <canvas class="w-100" id="animate"></canvas>
              <div class="clearfix">
                <p class="lead float-end">
                  {{ target_asteroid.Description }}
                  <a
                    class="btn btn-light"
                    :href="target_asteroid.Wiki_Link"
                    target="_blank"
                    >read more</a
                  >
                  <a
                    class="btn btn-light"
                    :href="target_asteroid['3D model link']"
                    target="_blank"
                    >Download Model</a
                  >
                </p>
              </div>
              <table class="table table-striped">
                <tbody>
                  <tr :key="key" v-for="key in info_index">
                    <td>{{ key }}</td>
                    <td>{{ target_asteroid[key] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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

export default {
  name: "Parameter",
  components: {},
  data() {
    return {
      step_instruction: "Specify Parameter",
      categories: [
        "Main belt",
        "Trojans asteroids",
        "Hildas asteroids",
        "Near-Earth Apollos class",
        "Near-Earth Amors class",
        "Near-Earth Aten asteroids",
      ],
      param: {
        theta: 0,
        phi: 0,
        category: "",
        perihelion_distance: 0.5,
        diameter: 0.1,
        albedo: 0,
        phase_angle: 0,
        rotation_model: 1,
      },
      info_index: [
        "Discovered by",
        "Discovered date",
        "long (km)",
        "perihelion distance (AU)",
        "Asteroid category",
        "Absolute magnitude (H)",
      ],
    };
  },
  watch: {
    param: {
      handler() {
        localStorage.param = JSON.stringify(this.param);
        this.asteriod = JSON.parse(localStorage.asteroid);
        initAnimate(this.asteriod, this.param, []);
      },
      deep: true,
    },
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
  mounted() {
    let default_param = Object.assign(this.param);
    try {
      this.param = JSON.parse(localStorage.param);
      console.log(target_asteroid);
    } catch (e) {}
    let target_asteroid = this.target_asteroid;
    console.log(target_asteroid);
    if (this.param.key != target_asteroid["3D model link"]) {
      this.param.key = target_asteroid["3D model link"];
      this.param.theta = target_asteroid.theta || default_param.theta;
      this.param.phi = target_asteroid.phi || default_param.phi;
      this.param.category =
        target_asteroid["Asteroid category"] ||
        default_param["Asteroid category"];
      this.param.perihelion_distance =
        target_asteroid["perihelion distance (AU)"] ||
        default_param["perihelion distance (AU)"];
      this.param.diameter =
        target_asteroid["long (km)"] || default_param["long (km)"];
      this.param.albedo = target_asteroid["albedo"] || default_param["albedo"];
      this.param.phase_angle = 0;
    }
    if (this.param.category == "" || this.param.category == "user define" || this.param.category == undefined) {

      this.param.category = this.categories[0];
    }
    console.log(this.param);
  },
  methods: {
    changeCat(cat) {
      this.param.category = cat;
    },
    chageRotationModel(cat){
      this.param.rotation_model = cat;
    },
    pass(e) {
      // e.stopPropagation()
    },
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [
              ["$", "$"],
              ["(", ")"],
            ],
            displayMath: [
              ["$$", "$$"],
              ["[", "]"],
            ],
            processEscapes: true,
            processEnvironments: true,
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: "center",
          "HTML-CSS": {
            styles: { ".MathJax_Display": { margin: 0 } },
            linebreaks: { automatic: true },
          },
        });
        window.MathJax.Hub.Queue([
          "Typeset",
          window.MathJax.Hub,
          this.$refs.mathJaxEl,
        ]);
      }
    },
  },
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML",
      },
    ],
  },
};
</script>
<style lang="">
.card_unselected:hover {
  border: 1px solid #0059a9;
}

.card_selected {
  border: 3px solid red;
}

.config {
  display: inline-block;
}
.no-focus-btn:focus {
  outline: none;
  box-shadow: none;
}
.intro_img {
  width: 90%;
}
</style>
