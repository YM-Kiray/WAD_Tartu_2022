<template>
  <HeaderCompo/>
  <router-view/>
  <FooterCompo/>
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



