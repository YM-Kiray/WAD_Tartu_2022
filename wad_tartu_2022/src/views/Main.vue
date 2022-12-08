<template>
    <div>
        <div id = "main">
          <aside class="grayBlock"/>
          <main>
            <button class = "button" v-on:click="Logout">Logout</button>

            <MessageCompo v-for="item in postList"
                :key="item.id"
                :id="item.id" 
                :likes="item.likes"
                :createTime="item.createTime" 
                :imgID="item.imgID" 
                :postText="item.postText"
                :author="item.author"
                :imgAlt="item.imgAlt"/>

            <div id="botones">
              <button class = "button" v-on:click="addPost">Add Post</button>
              <button class = "button" v-on:click="deleteAll">Delete All</button>
              <button class = "button" v-on:click="resetLikes">Reset Likes</button>
            </div>
          </main>
          <aside class="grayBlock"/>
        </div>
    </div>
</template>




<script>
import MessageCompo from './../components/Message.vue'
import store from './../store'
import router from '@/router'


export default {
  name: 'MainPage',
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
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    resetLikes(){
      store.dispatch("resetLikes")
    },
    deleteAll(){
      store.dispatch("deleteAll")
    },
    addPost(){
      router.push("/addPost")
    },
    logout(){
      store.dispatch("logout")
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

.grayBlock{
  background-color: rgb(198, 198, 198);
  border-radius: 1em;
}

#main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  flex-grow: 1;
}

#main > aside:first-child , #main > aside:last-child {
  
  padding: 1.5em;
  width: 15%;
}

.button{
        border: 0px solid;
        border-radius: 8px;
        background-color: rgb(139, 180, 221);
        padding: 4px 15px;
        font-size:14px;
    }

.button:hover{
        background-color: rgb(120, 120, 120);
    }

    #botones{
      display:flex;
      gap: 30px;
      justify-content: center;
    }

</style>

