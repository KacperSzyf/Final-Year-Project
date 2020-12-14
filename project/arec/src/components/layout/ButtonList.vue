<template>
  <ul class="list">
    <li v-for="button in buttons" :key="button.id">
      <AppButton :button="button" @click="$emit('button-clicked', button.route)"></AppButton>
    </li>
  </ul>

</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  name: "ButtonList",
  components: {AppButton},
  props: ['buttons'],

}
</script>

<style scoped>
.list li{
  margin-bottom: 1%;
}

</style>