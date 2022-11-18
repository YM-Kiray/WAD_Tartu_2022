<template> 
    <div class="header">
        <h1>Header Component</h1>
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
.header{
    position: sticky;
    background-color: lightgray;
    text-align: center;
    border-radius: 1em;
    font-family: roboto;
    margin:1em;
    padding:1em;
 }
h1 { 
    font-size: 30px;
    }
</style>


