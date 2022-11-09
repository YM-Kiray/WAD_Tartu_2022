<template> 
    <div>
        <p>Header Component</p>
        <nav>
            <router-link to="/Main">Main</router-link> |
            <router-link to="/Signup">SignUp</router-link> |
        </nav>
    </div>
</template> 

<script>
export default {
  name: 'HeaderCompo',
}
</script>