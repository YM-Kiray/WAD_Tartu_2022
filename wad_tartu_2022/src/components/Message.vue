<template>
    <router-link class="link" :to="'/posts/' + this.id">
    <article class="contentBlock">
        
        <div id="fecha">
            <!--<img :src="require('@/assets/images/' + authorImg)">-->
            <!-- <img id="profile-pic" src="../assets/images/me.png"/>-->
            {{ formatDate(date) }}
        </div>
        <!--<div>
            <img v-if = "imgID !== ''" :src="require('@/assets/images/postImg/' + imgID)" class="imgPost" :alt="imgAlt">
        </div>-->  
        <div class="text">
            <p>{{ text }}</p>
        </div>

        <!--
        <div class="likeBlock">
            <p>{{likes + " likes"}}</p>
            <img :src=image class="imgLike" v-on:click="like">
        </div>
        -->
    
    </article>

</router-link>
</template>


<script>

// import store from "@/store"
// import image from "../assets/images/sealOfApproval.jpg"

export default { 
    name:"MessageCompo",
    props: {
        id: Number,
        date: String, 
        text: String
    },
    data: function(){
        return {
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

.link{
    text-decoration:none;
    color:black;
}

.link:hover{
    text-decoration:underline;
}

.imgPost{
  max-height: 100%;
  max-width: 100%;
  max-height: 450px;
}

/*
.likeBlock{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}
*/

.text{
    display: flex;
    padding: 10px 10px 0px 10px;
    margin: 10px 0px 0px 0px;
    justify-content:flex-start;
    text-align:left;
}

#fecha{
    float: right;
}
</style>