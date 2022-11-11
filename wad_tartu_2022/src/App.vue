<template>
  <MessageCompo v-for="item in items"
    :key="item.id" 
    :date="item.date" 
    :imgSrc="item.imgSrc" 
    :message="item.message"
    :author="item.author"
    :authorImg="item.authorImg"
    :imgAltText="item.imgAltText"/>
</template>

<script>
import MessageCompo from './components/Message.vue'

export default {
  name: 'App',
  components: {
    MessageCompo
  },
  data: function(){
    return {
      items: [
        {id:1,
        date:1234567890123,
        imgSrc:"sealOfApproval.jpg",
        message:"Hello World",
        author:"Mr Happy",
        authorImg:"sealOfApproval.jpg",
        imgAltText:"Gdsdfs"},
        {id:1,
        date:2234567890123,
        imgSrc:"sealOfApproval.jpg",
        message:"Hello World",
        author:"Mr Happy",
        authorImg:"sealOfApproval.jpg",
        imgAltText:"Gdsdfs"},
        {id:1,
        date:1134567890123,
        imgSrc:"sealOfApproval.jpg",
        message:"Hello World",
        author:"Mr Happy",
        authorImg:"postImg/Mr_Bump.jpg",
        imgAltText:"Gdsdfs"},
      
      ]
    }
  }
}
</script>

<style>
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
