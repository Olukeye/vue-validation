<template>
   <div>
        <h3 v-if="user">Hi, {{user.name}}</h3>
        <h3 v-if="!user">Please login!</h3>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default({
    name: 'Home',
    computed: {
      ...mapGetters(['user'])
    }
   
})
</script>

