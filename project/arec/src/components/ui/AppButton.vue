<template>
  <button @click="buttonClicked" class="menuButton" >{{button.name}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    button: {},
  },
  methods: {
    buttonClicked()
    {
      this.$emit('button-clicked', this.button.route);
    }
  }
}
</script>

<style scoped>

.menuButton {
  border: none;
  background: #404040;
  color: #ffffff;
  font-weight: 100;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: 50%;
}

.menuButton:hover {
  color: #404040;
  font-weight: 700;
  letter-spacing: 3px;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.3s ease 0s;
}


</style>