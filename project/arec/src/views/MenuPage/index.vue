<template>
  <div class="hello">
    <h1>Augmented Reality Environmental Control</h1>
<!--    <ButtonList v-bind:buttons="buttons"></ButtonList>-->
    <ButtonList v-on:button-clicked="redirectUser($event)" v-bind:buttons="buttons"></ButtonList>
  </div>
</template>

<script>
import ButtonList from "@/components/layout/ButtonList";
export default {
  name: 'index',
  components: {ButtonList},
  props: {
  },
  data(){
    return { //Button names that will display on the menu screen
      buttons:[
        { id: 1,
          name: 'Launch App',
          route: '/app'},
        { id: 2,
          name: 'Settings',
          route: '/settings'},
        { id: 3,
          name: 'Quit',
          route: '/quit'}
      ]
    }
  },
  methods: {
    redirectUser(event)
    {
      console.log(event, " FIRED IN Function");
      this.$router.push(event);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
