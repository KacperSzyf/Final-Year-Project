<template>
  <div class="camera">
    <button @click="$router.go(-1);" >Go back!</button>
    <video id="webCam" autoplay="true"/>
  </div>
</template>

<script>
console.log('CameraPage/index loaded');

export default {

  name: "index",
  components: {},
  // data() {
  //   const videoAccess = async() =>
  //   {
  //     try {
  //       const access = await navigator.permissions.query({name: 'camera'})
  //     }
  //   }
  // },
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

    async videoAccess() {
      try {
        const cameraAccess = await navigator.permissions.query({name: 'camera'});
        if (cameraAccess.state == 'granted') return true;
        if (cameraAccess.state == 'denied') return false;
      } catch (err) {
        console.log("An error occurred whilst trying to access webcam :" + err);
      }

    }, //Asynchronous request for camera permissions to avoid TypeError.

    renderCam(video)
    {
      // if (this.videoAccess()) {
      //   navigator.mediaDevices.getUserMedia({video: true}) //Ask for video permission
      //       .then(function (stream) {
      //         video.srcObject = stream;
      //         console.log("Video started streaming");
      //        // this.$emit("video-stream", video);  //Send frames out of vue?
      //       }).catch(err => {
      //   if(err.name == "TypeError") console.log("TypeError! :" + err)}); //If permissions are not granted or webcam doesn't work throw error
      // }
      navigator.mediaDevices.getUserMedia({
        video: this.videoAccess()
      }).then(function (stream){
        video.srcObject = stream;
        console.log("Stream Success");
    }).catch(err => {
      if (err.name == 'NotAllowedError') alert("Webcam permissions denied!");
    });
      },
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
