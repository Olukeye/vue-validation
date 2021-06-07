<template>
     <nav class="navbar navbar-expand navbar-light fixed-top">
   <div class="container">
     <router-link to="/" class="navbar-brand">VEVI</router-link>
     <div class="collapse navbar-collapse">
       <ul class="navbar-nav ml-auto">
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
     </div>
   </div>
 </nav>
</template>

<script>
export default({
    name: 'Nav'
})
</script>