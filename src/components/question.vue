<template>
    <div class="container">
        <h1>Quest 1: Which object can show this light curve?</h1>
        <img src="https://i.imgur.com/6Wu7PIU.jpg" alt="">
        <div class="row">
            <div class="card img">
                <img src="https://i.imgur.com/40nkHJR.jpg" alt="">
                <div class="card-body">
                    <button class="btn btn-primary" @click="choose(1)">Choose</button>
                </div>
            </div>
            <div class="card img">
                <img src="https://i.imgur.com/gKtwJgB.jpg" alt="">
                <div class="card-body">
                    <button class="btn btn-primary" @click="choose(2)">Choose</button>
                </div>
            </div>
            <div class="card img">
                <img src="https://i.imgur.com/GWZkkdZ.jpg" alt="">
                <div class="card-body">
                    <button class="btn btn-primary" @click="choose(3)">Choose</button>
                </div>
            </div>
            <div class="card img">
                <img src="https://i.imgur.com/5TIhDuX.jpg" alt="">
                <div class="card-body">
                    <button class="btn btn-primary" @click="choose(4)">Choose</button>
                </div>
            </div>
            <div class="card img">
                <img src="https://i.imgur.com/3UM7HYn.jpg" alt="">
                <div class="card-body">
                    <button class="btn btn-primary" @click="choose(5)">Choose</button>
                </div>
            </div>
        </div>

        <div class="alert alert-success" role="alert" v-if="ans == 3">
            Correct!
        </div>
        <div class="alert alert-danger" role="alert" v-if="ans != 3 && ans != 0">
            Wrong, please try again.
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
  name: 'question',
  data () {
    return {
      ans: 0,
      default_ans: 0,
      ans_hash: ""
    }
  }, methods: {
      choose(tag) {
          this.ans = tag;
          console.log(this.ans);
          let hash = uuidv4()
          this.ans_hash = hash
          setTimeout(() => {
            if(this.ans_hash == hash){
              this.ans = this.default_ans
            }
          }, 3000)
      }
  }
}
</script>
<style scoped>
.img, .choose {
    width: 20%;
}

</style>
