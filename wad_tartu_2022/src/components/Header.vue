<template> 
    <div class="contentBlock">
        <p>Header Component</p>
        <nav>
            <router-link to="/">Main</router-link> |
            <router-link to="/signup">SignUp</router-link> 
        </nav>
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


