<template> 
    <div class="contentBlock">
        <p>Header Component</p>
        <router-view>
        <nav>
            <router-link to="/">Main</router-link> |
            <router-link to="/signup">Signup Page</router-link> 
        </nav>
        </router-view>
    </div>
</template> 

<script>
export default {
  name: 'HeaderCompo',
}
</script>

<style scoped>
p { 
    font-size: 30px;
    }
</style>


