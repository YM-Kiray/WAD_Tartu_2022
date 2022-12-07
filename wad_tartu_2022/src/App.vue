<template>
  <div>
  <HeaderCompo/>
  <router-view/>
  <FooterCompo/>
  </div>
</template>

<script>
import HeaderCompo from './components/Header.vue'
import FooterCompo from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderCompo,
    FooterCompo
}}
</script>



