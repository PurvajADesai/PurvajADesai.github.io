<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
        
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
      </v-flex>
    </v-layout>
    <p>{{customer.first_name}}</p>
  </v-container>
</template>
<script>
export default {
  name:'customers',
    data () {
      return {
        appTitle: 'Simple VueJS App',
        sidebar: false,
        menuItems:[
          {title: 'Home',path:'/home',icon:'home'},
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          {title: 'Sign In',path:'/signin',icon:'lock_open'}
        ],
        customers:[]
      }
    },
    methods: {
        fetchCustomers(){ 
    this.$http.get('http//slimapp/api/customers')
    .then(function(response){
      this.customers=JSON.parse(response.body); 
    })
        }
    },
      created: function(){
    this.fetchCustomers();
  }
  }
  </script>