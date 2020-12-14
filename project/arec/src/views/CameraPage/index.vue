<template>
  <CameraPage>
    <h1>Hello World!</h1>
    <button @click="$router.go(-1)">Go back!</button>
  </CameraPage>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>