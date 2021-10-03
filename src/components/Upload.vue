<template>
  <div class="col-md-4 col-sm-12 col-lg-3" style="padding-bottom: 1%;">
    <div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal" id="exampleModal_controller">
      <img class="card-img-top" src="https://i.imgur.com/0FsOqHl.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Upload Your Own</h5>
        <p>Only accept .obj file.</p>
        <div class="text-center">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Click to Upload
          </button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Upload your asteroids</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <img :src="obj.picture" class="w-100">
          <div class="modal-body">

            <label for="input_asteroid_name" class="form-label">Asteroid Name</label>
            <input id="input_asteroid_name" class="form-control mb-3" type="text"
            placeholder="type a name..." aria-label="" v-model="obj.Name">

            <label for="input_asteroid_file" class="form-label">Object File</label>
            <input type="file" accept=".obj" fileCount=1 id="input_asteroid_file" class="mb-3" aria-label=""
             @change="handleUpload($event.target.files)" v-show='true'>

            <!-- <label for="input_asteroid_file" class="form-label">Custom Image (optional)</label>
            <input type="file" accept=".obj" fileCount=1 id="input_asteroid_file" class="" aria-label=""
             @change="handleUpload($event.target.files)" v-show='true'> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="upload">Upload</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export default {
  name: "Upload",
  components: {
  },
  data () {
    return {
      step: 0,
      obj: {
        picture: "https://i.imgur.com/bA4djyL.jpg",
        type: "upload",
        file_text: "",
        Name: "",
        Description: "",
        "3D model link": false,
        "Wiki_Link": false,
        hash: ""
      },
    }
  },
  computed: {
    target_asteroid: function(){
      return this.asteroids[this.select_index]
    }
  },
  mounted () {

  },
  methods: {
    async handleUpload(file){
      try{
        file = file[0]
        this.obj.file_text = await file.text()
      }catch(e){}
    },
    upload(){
      let previous = []
      if(localStorage.custom_objs != undefined){
        previous = JSON.parse(localStorage.custom_objs)
      }
      if(this.obj.file_text == ""){
        alert("Please select a file before upload.")
        return 0
      }
      if(this.obj.Name == ""){
        this.obj.Name = "Custom #" + (previous.length + 1)
      }
      this.obj.hash = uuidv4()
      previous.push(this.obj)
      localStorage.custom_objs = JSON.stringify(previous)
      document.getElementById("exampleModal_controller").click()
      location.reload()
    }
  }
}

</script>
<style lang="">
  .card_unselected:hover{
    border:1px solid #0059a9;
  }

  .card_selected{
    border:3px solid red
  }

  .config{
    display: inline-block;
  }
  .no-focus-btn:focus {
    outline: none;
    box-shadow: none;
  }

</style>
