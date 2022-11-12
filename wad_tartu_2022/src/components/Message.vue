<template>

    <article class="contentBlock">
        <div>
            <!--<img :src="require('@/assets/images/' + authorImg)">-->
            <span>{{ author }}</span>
            {{ formatDate(createTime) }}
        </div>
        <div>
            <img v-if = "imgID !== ''" :src="require('@/assets/images/postImg/' + imgID)" class="imgPost" :alt="imgAlt">
        </div>  
        <p>{{ postText }}</p>
        <img :src=image class="imgLike">
    </article>


</template>
<script>

import image from "../assets/images/sealOfApproval.jpg"

export default { 
    name:"MessageCompo",
    props: {
        createTime: Number, 
        imgID: String, 
        postText: String, 
        author: String, 
        imgAlt: String
    },
    data: function(){
        return {
            image: image
        }
    },
    methods:{
        formatDate() {
            console.log(this.$store)
            let createTime = new Date(this.createTime)
            return (createTime.getMonth() + "/" + createTime.getDate() + "/" + createTime.getFullYear())
        }
    }

}
</script>

<style>

.contentBlock{
  background-color: lightgray;
  border-radius: 1em;
  font-family: roboto;
  margin:1em;
  padding:1em;
}

.contentBlock > div:first-child {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}

.contentBlock > div:first-child img{
 height:2em;
 width:2em;
}

.imgLike{
  height: 4em;
}

.imgPost{
  max-height: 100%;
  max-width: 100%;
  max-height: 450px;
}

</style>