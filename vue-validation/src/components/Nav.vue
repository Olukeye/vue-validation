<template>

  <nav class="navbar navbar-expand navbar-light fixed-top">
   <div class="container">
     <router-link to="/" class="navbar-brand">VEVI</router-link>
     <div class="collapse navbar-collapse">
       <!-- if its not user or has not sign up, do not show logout link -->
       <ul class="navbar-nav ml-auto" v-if="!user">
         <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
         </li>
         <li class="nav-item">
            <router-link to="/signup" class="nav-link" >signup</router-link>
         </li>
         <li class="nav-item">
           <a href="#" class="nav-link">Sign out</a>
         </li>
       </ul>
              <!--so if its user, show logout on the home page -->
        <ul class="navbar-nav ml-auto" v-if="user">
        <li class="nav-item">
          <a href="javascript:void(0)" @click="handleClick" class="nav-link">Sign out</a>
        </li>
      </ul>

     </div>
   </div>
 </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default({
    name: 'Nav',
    methods: {
      handleClick() {
        localStorage.removeItem('token');
        this.$router.push('/');
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
})
</script>