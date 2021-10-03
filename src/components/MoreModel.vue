<template>
  <div class="">

    <!-- Modal -->
    <div class="modal fade" id="moreModal" tabindex="-1" aria-labelledby="moreModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="moreModalLabel">Where to find more asteroid model?</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              We highly recommend you to download asteroid model on <code class="">.obj</code> format from these website:
            </p>
            <p>
              1. <a
                href="https://echo.jpl.nasa.gov/asteroids/shapes/shapes.html"
                target="_blank"
                rel="noopener"
                done=""
                ><span
                  >echo.jpl.nasa.gov</span
                ></a
              ><br />
              2. <a
                href="https://nasa3d.arc.nasa.gov/search/asteroid"
                target="_blank"
                rel="noopener"
                done=""
                ><span>nasa3d.arc.nasa.gov</span></a
              ><br />
              3. <a
                href="https://3d-asteroids.space/"
                target="_blank"
                rel="noopener"
                done=""
                ><span>3d-asteroids.space</span></a
              ><br />
              4. <a
                href="https://astro.troja.mff.cuni.cz/projects/damit/"
                target="_blank"
                rel="noopener"
                done=""
                ><span>astro.troja.mff.cuni.cz/projects/damit/</span></a
              >
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MoreModel",
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
