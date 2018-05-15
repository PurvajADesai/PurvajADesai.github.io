<template>
  <v-container fluid>
      <GmapMap v-bind:center="{lat:21.7679 ,lng:78.8718}" v-bind:zoom="7"
  style="height:700px">
  <GmapMarker v-bind:key="index" v-for="(m, index) in 
  markers" v-bind:position="m.position" v-bind:clickable="true"></GmapMarker>
</GmapMap>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data () {
      return {
        appTitle: 'Simple VueJS App',
        sidebar: false,
        menuItems:[
          {title: 'Home',path:'/home',icon:'home'},
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          {title: 'Sign In',path:'/signin',icon:'lock_open'}
        ],
        center:{lat:21.7679 ,lng:78.8718},
        markers:[{
          position:{lat:21.7679,lng:78.8718}
        }]
      }
    }
  }
  </script>