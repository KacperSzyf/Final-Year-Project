<template>
  <div class="camera">
    <h1>Hello World!</h1>
    <button @click="$router.go(-1)" >Go back!</button>
    <video id="webCam" autoplay="true"/>
  </div>
</template>

<script>
console.log('CameraPage/index loaded');

export default {

  name: "index",
  components: {},
  mounted() {
    this.$nextTick(function () {
      let video = document.querySelector('#webCam')

      console.log("Fired in streamVide()")
      if (navigator.mediaDevices.getUserMedia()) {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(function (stream) {
              video.srcObject = stream;
              this.$emit("video-stream", video);
            }).catch(err => console.log(err));
      }
    })
  },

}
// streamVideo() {
//   let video = document.querySelector('#webCam')
//
//   console.log("Fired in streamVide()")
//   if (navigator.mediaDevices.getUserMedia()) {
//     navigator.mediaDevices.getUserMedia({video: true})
//         .then(function (stream) {
//           video.srcObject = stream;
//           this.$emit("video-stream", video);
//         }).catch(err => console.log(err));
//   }
// }
</script>

<style scoped>
.camera {
  width: 80%;
  height: 80%;
}

#webCam {
  height: 100%;
  width: 100%;
  border: #404040 4px solid;
}
</style>
