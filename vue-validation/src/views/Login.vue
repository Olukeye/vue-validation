<template>
    <form @submit.prevent="handleSubmit">
        <h2>Login</h2>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
         <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control"  v-model="password" placeholder="Password"/>
        </div>
        
        <button type="submit" class="btn btn-primary btn-block">Login</button>

        <p class="forgot-password text-right">
            <router-link to="/forgotpassword">Can't Remember password?</router-link>
        </p>
    </form>
</template>

<script>
import axios from 'axios'
export default({
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
         const res = await axios.post('login',{
                email: this.email,
                password: this.password
            });
             localStorage.setItem('token', res.data.token);
             this.$store.dispatch('user', res.data.user)
             this.$router.push('/')
        }
    }
 
})
</script>