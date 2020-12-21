<template>
  <div class="camera">
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
    // this.$nextTick(function () {
    //   let video = document.querySelector('#webCam')
    //
    //   console.log("Fired in streamVide()")
    //   if (navigator.mediaDevices.getUserMedia()) {
    //     navigator.mediaDevices.getUserMedia({video: true, audio: false})
    //         .then(function (stream) {
    //           video.srcObject = stream;
    //           this.$emit("video-stream", video);
    //         }).catch(err => console.log(err));
    //   }
    // })
    this.renderCam(document.getElementById('webCam')); //run 'renderCam' when the Vue page loads
  },
  methods: {
    renderCam(video)
    {
      if (navigator.mediaDevices.getUserMedia()) {
        navigator.mediaDevices.getUserMedia({video: true, audio: false}) //Ask for video permission
            .then(function (stream) { //If video permission granted create a stream and render video
              video.srcObject = stream;
              this.$emit("video-stream", video);  //Send frames out of vue?
            }).catch(err => console.log(err)); //If permissions are not granted or webcam doesn't work throw error
      }
    }
    },

}
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
