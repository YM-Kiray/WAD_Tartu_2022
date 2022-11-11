<template>

    <article class="contentBlock">
        <div>
            <img :src="require('@/assets/images/' + authorImg)">
            <span>{{ author }}</span>
            {{ formatDate(date) }}
        </div>
        <div>
            <img v-if = "imgSrc !== ''" :src="require('@/assets/images/' + imgSrc)" class="imgPost" :alt="imgAltText">
        </div>  
        <p>{{ message }}</p>
        <img :src=image class="imgLike">
    </article>


</template>
<script>

import image from "../assets/images/sealOfApproval.jpg"

export default { 
    name:"MessageCompo",
    props: {
        date: Number, 
        imgSrc: String, 
        message: String, 
        author: String, 
        authorImg: String, 
        imgAltText: String
    },
    data: function(){
        return {
            image: image
        }
    },
    methods:{
        formatDate() {
            let date = new Date(this.date)
            return (date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear())
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