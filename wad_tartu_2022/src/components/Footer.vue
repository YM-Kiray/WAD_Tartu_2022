<template> 
    <div class="footer">
        <h1>Footer Component</h1>
        <div class="text-center p-3" style="background-color: lightgrey">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> 
    </div>
    </div>
</template> 

<script>
export default {
  name: 'FooterCompo',
}
</script>

<style scoped>

  .footer{
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
.text-dark{
  color:blue;
  display: sticky;
}

</style>