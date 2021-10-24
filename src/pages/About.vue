<template>
  <div class="container">
    <div
      id="doc"
      class="markdown-body container-fluid comment-enabled"
      data-hard-breaks="true"
    >
      <h1 id="0-Introduction" data-id="0-Introduction">
        <span>Introduction</span>
      </h1>
      <p>
        <span
          >We made SEAL:Super Emulator for Asteroid Lightcurve. We love to
          explore the unknown world. Through making visualizes websites, we want
          more people to understand the science behind light curves.</span
        >
      </p>
      <p>
        <span
          >The user can use this simulator and NASA open source data to produce
          the time evolution relationship between the apparent magnitude of the
          3D asteroid model and the free rigid body rotation Symmetric top
          precession , 0 phase angle in solar opposition and perihelion.The
          asteroids simulation result in the Main belt and NEO conform to the
          ALCDEF observation data</span
        >
      </p>
      <p>
        <span
          >In addition, there are complete mathematical derivations,
          assumptions, explanations of various terms , and the light curve test
          on the website which can provide students with learning and
          understanding of our light curve calculations. In the future, We
          believe this tool can be used in educational fields.</span
        >
      </p>
      <h2
        id="Three-steps-to-get-your-own-light-curve"
        data-id="Three-steps-to-get-your-own-light-curve"
      >
        <span>Three steps to get your own light curve</span>
      </h2>
      <ol>
        <li>
          <span>Select 3D model:</span>
          <ul>
            <li><span>3D model from nasa data base</span></li>
            <li>
              <span>You can up load your 3D model in the format of (.obj)</span>
            </li>
            <li><span>press next</span></li>
          </ul>
        </li>
        <li>
          <span>Set simulation parameter</span>
          <ul>
            <li><span>Select you Rotation model</span></li>
            <li><span>Set your Apparent magnitude prediction setting</span></li>
            <li><span>press next</span></li>
          </ul>
        </li>
        <li>
          <span>Analyse light curve</span>
          <ul>
            <li><span>Enjoy your light curve</span></li>
            <li>
              <span
                >You can compare it with the real observation data from ALCDEF
                data base</span
              >
            </li>
          </ul>
        </li>
      </ol>
      <h2 id="Physics-model" data-id="Physics-model">
        <span>Physics model</span>
      </h2>
      <p>
        <span
          >Our simulation is based on a mathematical model derived from physics
          (Euler’s rotation equation) and physical assumptions, and our
          simulation results are in line with NASA open source real observation
          data.</span
        >
      </p>
      <h3 id="Conditions" data-id="Conditions"><span>Conditions:</span></h3>
      <h4
        id="1-Phase-angle--0--solar-opposition-perihelion"
        data-id="1-Phase-angle--0--solar-opposition-perihelion"
      >
        <span>1. Phase angle = 0 , solar opposition, perihelion</span>
      </h4>
      <p>
        <span
          >In order to simplify the problem, we set the phase angle = 0 and the
          asteroid is in conditions of ideal solar opposition and it is at
          perihelion.</span
        ><br />
        <img src="https://i.imgur.com/bHtlEBz.png" alt="" loading="lazy" />
      </p>
      <h4
        id="2-Asteroids-are-rigid-bodies"
        data-id="2-Asteroids-are-rigid-bodies"
      >
        <span>2. Asteroids are rigid bodies</span>
      </h4>
      <h4
        id="3-No-external-force-torque-free-Angular-momentum-conservation"
        data-id="3-No-external-force-torque-free-Angular-momentum-conservation"
      >
        <span
          >3. No external force (torque free) Angular momentum
          conservation</span
        >
      </h4>
      <h3
        id="Rotation-model-1--Rotation-around-a-fixed-axis-special-case-non-physical-model"
        data-id="Rotation-model-1--Rotation-around-a-fixed-axis-special-case-non-physical-model"
      >
        <span
          >Rotation model 1 : Rotation around a fixed axis (special case:
          non-physical model)</span
        >
      </h3>
      <p>
        <span
          >We assume that the motion of asteroid is rotation around a fixed axis
          to simplify the setting and calculation. This setting is not the true
          rotation motion of the asteroid. Really rotating motion, the axis of
          rotation will also rotate, especially the rod-shaped or flatter
          (non-spherical) </span
        ><a
          href="https://www.youtube.com/watch?v=9QXRIinrGS0&amp;ab_channel=RussEdmonds"
          target="_blank"
          rel="noopener"
          done=""
          ><span>[Example link]</span></a
        ><span
          >, but to calculate this requires numerical integration of the
          asteroid’s moment of inertia. Some of the moment of inertia
          distribution does not have an analytical solution, and it is necessary
          to solve the Euler equation numerically: </span
        ><a
          href="https://www.youtube.com/watch?v=1VPfZ_XzisU&amp;ab_channel=Veritasium"
          target="_blank"
          rel="noopener"
          done=""
          ><span>Veritasium: The Bizarre Behavior of Rotating Bodies</span></a
        >
      </p>
      <h3
        id="Rotation-model-2--Symmetric-top-precession-model-physical-model"
        data-id="Rotation-model-2--Symmetric-top-precession-model-physical-model"
      >
        <span
          >Rotation model 2 : Symmetric top precession model (physical
          model)</span
        >
      </h3>
      <p>
        <span
          >In order to simplify the calculation complexity under the physical
          conditions, we assume such a model based on the geometric
          configuration of the asteroid. This model is the simplest model that
          can simulate precession. Assuming that the object is axisymmetric, I1
          = 12 is not equal to I3.</span
        >
      </p>
      <p>
        <span>For Euler’s equations (rigid body dynamics)</span><br />
        <img src="https://i.imgur.com/sRWtsFA.png" alt="" loading="lazy" />
      </p>
      <h3
        id="Apparent-magnitude-prediction-model"
        data-id="Apparent-magnitude-prediction-model"
      >
        <span>Apparent magnitude prediction model</span>
      </h3>
      <p><img src="https://i.imgur.com/K8C68lX.png" alt="" loading="lazy" /></p>
      <p>
        <span class="mathjax"
          ><span class="MathJax_Preview" style="color: inherit"></span
          ><span
            id="MathJax-Element-47-Frame"
            class="mjx-chtml MathJax_CHTML"
            tabindex="0"
            data-mathml='<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>d</mi><mrow class="MJX-TeXAtom-ORD"><mi>b</mi><mi>o</mi></mrow></msub></math>'
            role="presentation"
            style="font-size: 119%; position: relative"
            ><span id="MJXc-Node-556" class="mjx-math" aria-hidden="true"
              ><span id="MJXc-Node-557" class="mjx-mrow"
                ><span id="MJXc-Node-558" class="mjx-msubsup"
                  ><span class="mjx-base" style="margin-right: -0.003em"
                    ><span id="MJXc-Node-559" class="mjx-mi"
                      ><span
                        class="mjx-char MJXc-TeX-math-I"
                        style="
                          padding-top: 0.475em;
                          padding-bottom: 0.265em;
                          padding-right: 0.003em;
                        "
                        >d</span
                      ></span
                    ></span
                  ><span
                    class="mjx-sub"
                    style="
                      font-size: 70.7%;
                      vertical-align: -0.219em;
                      padding-right: 0.071em;
                    "
                    ><span id="MJXc-Node-560" class="mjx-texatom" style=""
                      ><span id="MJXc-Node-561" class="mjx-mrow"
                        ><span id="MJXc-Node-562" class="mjx-mi"
                          ><span
                            class="mjx-char MJXc-TeX-math-I"
                            style="
                              padding-top: 0.475em;
                              padding-bottom: 0.265em;
                            "
                            >b</span
                          ></span
                        ><span id="MJXc-Node-563" class="mjx-mi"
                          ><span
                            class="mjx-char MJXc-TeX-math-I"
                            style="
                              padding-top: 0.213em;
                              padding-bottom: 0.265em;
                            "
                            >o</span
                          ></span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              ></span
            ><span class="MJX_Assistive_MathML" role="presentation"
              ><math xmlns="http://www.w3.org/1998/Math/MathML"
                ><msub
                  ><mi>d</mi
                  ><mrow class="MJX-TeXAtom-ORD"
                    ><mi>b</mi><mi>o</mi></mrow
                  ></msub
                ></math
              ></span
            ></span
          >
          <script type="math/tex" id="MathJax-Element-47">
            d_{bo}
          </script></span
        ><span> is the distance between the body and the observer</span><br />
        <span class="mathjax"
          ><span class="MathJax_Preview" style="color: inherit"></span
          ><span
            id="MathJax-Element-48-Frame"
            class="mjx-chtml MathJax_CHTML"
            tabindex="0"
            data-mathml='<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>d</mi><mrow class="MJX-TeXAtom-ORD"><mi>b</mi><mi>s</mi></mrow></msub></math>'
            role="presentation"
            style="font-size: 119%; position: relative"
            ><span id="MJXc-Node-564" class="mjx-math" aria-hidden="true"
              ><span id="MJXc-Node-565" class="mjx-mrow"
                ><span id="MJXc-Node-566" class="mjx-msubsup"
                  ><span class="mjx-base" style="margin-right: -0.003em"
                    ><span id="MJXc-Node-567" class="mjx-mi"
                      ><span
                        class="mjx-char MJXc-TeX-math-I"
                        style="
                          padding-top: 0.475em;
                          padding-bottom: 0.265em;
                          padding-right: 0.003em;
                        "
                        >d</span
                      ></span
                    ></span
                  ><span
                    class="mjx-sub"
                    style="
                      font-size: 70.7%;
                      vertical-align: -0.219em;
                      padding-right: 0.071em;
                    "
                    ><span id="MJXc-Node-568" class="mjx-texatom" style=""
                      ><span id="MJXc-Node-569" class="mjx-mrow"
                        ><span id="MJXc-Node-570" class="mjx-mi"
                          ><span
                            class="mjx-char MJXc-TeX-math-I"
                            style="
                              padding-top: 0.475em;
                              padding-bottom: 0.265em;
                            "
                            >b</span
                          ></span
                        ><span id="MJXc-Node-571" class="mjx-mi"
                          ><span
                            class="mjx-char MJXc-TeX-math-I"
                            style="
                              padding-top: 0.213em;
                              padding-bottom: 0.265em;
                            "
                            >s</span
                          ></span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              ></span
            ><span class="MJX_Assistive_MathML" role="presentation"
              ><math xmlns="http://www.w3.org/1998/Math/MathML"
                ><msub
                  ><mi>d</mi
                  ><mrow class="MJX-TeXAtom-ORD"
                    ><mi>b</mi><mi>s</mi></mrow
                  ></msub
                ></math
              ></span
            ></span
          >
          <script type="math/tex" id="MathJax-Element-48">
            d_{bs}
          </script></span
        ><span> is the distance between the body and the Sun</span><br />
        <span class="mathjax"
          ><span class="MathJax_Preview" style="color: inherit"></span
          ><span
            id="MathJax-Element-49-Frame"
            class="mjx-chtml MathJax_CHTML"
            tabindex="0"
            data-mathml='<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>H</mi></math>'
            role="presentation"
            style="font-size: 119%; position: relative"
            ><span id="MJXc-Node-572" class="mjx-math" aria-hidden="true"
              ><span id="MJXc-Node-573" class="mjx-mrow"
                ><span id="MJXc-Node-574" class="mjx-mi"
                  ><span
                    class="mjx-char MJXc-TeX-math-I"
                    style="
                      padding-top: 0.475em;
                      padding-bottom: 0.265em;
                      padding-right: 0.057em;
                    "
                    >H</span
                  ></span
                ></span
              ></span
            ><span class="MJX_Assistive_MathML" role="presentation"
              ><math xmlns="http://www.w3.org/1998/Math/MathML"
                ><mi>H</mi></math
              ></span
            ></span
          >
          <script type="math/tex" id="MathJax-Element-49">
            H
          </script></span
        ><span>
          is the absolute magnitude of Solar System bodies which is defined as
          the apparent magnitude that the object would have if it were one
          astronomical unit (AU) from both the Sun and the observer, and in
          conditions of ideal solar opposition (an arrangement that is
          impossible in practice).</span
        >
      </p>
      <p><img src="https://i.imgur.com/QhIQsMd.png" alt="" loading="lazy" /></p>
      <h2 id="Reference-links" data-id="Reference-links">
        <span>Reference links</span>
      </h2>
      <h3
        id="Experimental-Datas-and-records"
        data-id="Experimental-Datas-and-records"
      >
        <span>Experimental Datas and records</span>
      </h3>
      <p>
        <a
          href="https://sbn.psi.edu/pds/resource/lc.html"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://sbn.psi.edu/pds/resource/lc.html</span></a
        ><br />
        <a
          href="https://alcdef.org/index.php"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://alcdef.org/index.php</span></a
        ><br />
        <a
          href="https://astro.troja.mff.cuni.cz/projects/damit/"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://astro.troja.mff.cuni.cz/projects/damit/</span></a
        >
      </p>
      <h3 id="3D-model-of-asteroids" data-id="3D-model-of-asteroids">
        <span>3D model of asteroids</span>
      </h3>
      <p>
        <a
          href="https://echo.jpl.nasa.gov/asteroids/shapes/shapes.html"
          target="_blank"
          rel="noopener"
          done=""
          ><span
            >https://echo.jpl.nasa.gov/asteroids/shapes/shapes.html</span
          ></a
        ><br />
        <a
          href="https://nasa3d.arc.nasa.gov/search/asteroid"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://nasa3d.arc.nasa.gov/search/asteroid</span></a
        ><br />
        <a
          href="https://3d-asteroids.space/"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://3d-asteroids.space/</span></a
        ><br />
        <a
          href="https://astro.troja.mff.cuni.cz/projects/damit/"
          target="_blank"
          rel="noopener"
          done=""
          ><span>https://astro.troja.mff.cuni.cz/projects/damit/</span></a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    pass() {},
  },
};
</script>
<style lang="">
</style>
