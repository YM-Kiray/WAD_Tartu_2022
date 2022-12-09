<template>
    <div>
        <div id = "main">
          <aside class="grayBlock"/>
          <main>
            <button class = "top-button" v-on:click="Logout">Logout</button>
        
              <MessageCompo v-for="item in this.posts"
                :key="item.id" :id="item.id" :text="item.text"
                :date="item.date"/>
            
            <div id="botones">
              <button class = "button" v-on:click="addPost">Add Post</button>
              <button class = "button" v-on:click="deleteAll">Delete All</button>
            </div>
          </main>
          <aside class="grayBlock"/>
        </div>
    </div>
</template>


<script>
import MessageCompo from './../components/Message.vue'
import router from '@/router'

export default {
  name: 'MainPage',
  components: {
    MessageCompo
  },
  data: function(){
    return {
      posts: []
    }
  },
  methods: {
    /*
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
    },*/

    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deleteAll(){
      fetch(`http://localhost:3000/api/posts/`, 
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        }
      )
      .then((response) => {
          console.log(response.data);
          this.$router.go();
        }
      )
      .catch((e) => {
        console.log(e);
        }
      );
    },
    addPost(){
      router.push("/addPost")
    }
  },
  mounted() {
    this.fetchPosts();
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

.top-button{
  border: 0px solid;
        border-radius: 8px;
        background-color: rgb(139, 180, 221);
        padding: 4px 15px;
        font-size:14px;
        margin-bottom: 10px;
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
      margin-top: 10px;
    }

</style>

