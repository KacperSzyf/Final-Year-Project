<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    <ButtonList v-bind:buttons="buttons"></ButtonList>-->
    <ButtonList @click="$router.push('/app')" v-bind:buttons="buttons"></ButtonList>
  </div>
</template>

<script>
import ButtonList from "@/components/layout/ButtonList";

export default {
  name: 'index',
  components: {ButtonList},
  props: {
    msg: String
  },
  data(){
    return { //Button names that will display on the menu screen
      buttons:[
        { id: 1,
          name: 'Launch App',
          route: '/app'},
        { id: 2,
          name: 'Settings',
          route: '/setti'},
        { id: 3,
          name: 'Quit',
          route: '/quit'}
      ]
    }
  },
  methods: {
    // redirectUser(buttonRoute){
    //   // this.$router.push(buttonRoute)
    //   //     .catch(err => console.log(err));
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
