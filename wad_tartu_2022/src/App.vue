<template>
  <MessageCompo v-for="item in postList"
    :key="item.id" 
    :createTime="item.createTime" 
    :imgID="item.imgID" 
    :postText="item.postText"
    :author="item.author"
    :imgAlt="item.imgAlt"/>
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
        createTime:1234567890123,
        imgID:"sealOfApproval.jpg",
        postText:"Hello World",
        author:"Mr Happy",
        imgAlt:"Gdsdfs"},
        {id:1,
        createTime:1234567890123,
        imgID:"sealOfApproval.jpg",
        postText:"Hello World",
        author:"Mr Happy",
        imgAlt:"Gdsdfs"},
        {id:1,
        createTime:1234567890123,
        imgID:"sealOfApproval.jpg",
        postText:"Hello World",
        author:"Mr Happy",
        imgAlt:"Gdsdfs"}
      ]
    }
  },
  computed: {
      postList(){
          return this.$store.getters.getPostList
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
