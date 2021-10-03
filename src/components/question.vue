<template>
    <div class="container">    
        <h1>選擇此Lightcurve對應的形狀</h1>
        <img src="https://i.imgur.com/6Wu7PIU.jpg" alt="">
        <div class="row">
            <img src="https://i.imgur.com/40nkHJR.jpg" class="img" alt="">
            <img src="https://i.imgur.com/gKtwJgB.jpg" class="img" alt="">
            <img src="https://i.imgur.com/GWZkkdZ.jpg" class="img" alt="">
            <img src="https://i.imgur.com/5TIhDuX.jpg" class="img" alt="">
            <img src="https://i.imgur.com/3UM7HYn.jpg" class="img" alt="">
        </div>
        <div class="row">
            <div class="choose">
                <button class="btn btn-primary" @click="choose(1)">Choose</button>
            </div>
            <div class="choose">
                <button class="btn btn-primary" @click="choose(2)">Choose</button>
            </div>
            <div class="choose">
                <button class="btn btn-primary" @click="choose(3)">Choose</button>
            </div>
            <div class="choose">
                <button class="btn btn-primary" @click="choose(4)">Choose</button>
            </div>
            <div class="choose">
                <button class="btn btn-primary" @click="choose(5)">Choose</button>
            </div>
        </div>
        <div class="alert alert-success" role="alert" v-if="ans == 3">
            答對囉
        </div>
        <div class="alert alert-danger" role="alert" v-if="ans != 3 && ans != 0">
            答錯囉
        </div>
    </div>
</template>
<script>
export default {
  name: 'question',
  data () {
    return {
      ans: 0,
    }
  }, methods: {
      choose(tag) {
          this.ans = tag;
          console.log(this.ans);
      }
  }
}
</script>
<style scoped>
.img, .choose {
    width: 20%;
}

</style>
