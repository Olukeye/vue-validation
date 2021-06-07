<template>
    <form>
        <h2>Login</h2>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Email"/>
        </div>
        

         <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password"/>
        </div>
        
        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
// import { useRoute } from 'vue-router';
export default({
    name: 'Login',
 
})
</script>