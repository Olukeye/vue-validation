<template>
   <div>
        <h3>HELLO WORLD!</h3>
   </div>
</template>

<script>
import axios from 'axios'
export default({
    name: 'Home',
    async created() {
        const res = await axios.get('user', {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        })
        console.log(res)
    }
})
</script>
