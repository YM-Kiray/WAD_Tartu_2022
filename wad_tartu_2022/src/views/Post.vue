<template>
    <div>
        <div class="post">
            <div id="main">
                <form>
                    <div class="atts">
                        <div>A Post</div>
                        <div class="attribute">
                            <label for="text">Body</label>
                            <input type="text" id="text" placeholder="Body" required v-model="this.post.text"/>
                        </div>
                    </div>
                    <!--
                    <div v-if="error" class="error">
                        {{error}}
                    </div>
                    -->
                    <div class="buttons">
                        <div class="btn">
                            <button type="button" @click="updatePost">Update</button>
                        </div>
                        <div class="btn">
                            <button type="button" @click="deletePost">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SinglePost",
    components:{},
    props:{},
    data:()=>{
        return{
            post: {
                id:"",
                text:"",
                date:""
            }
        };
    },

    methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {this.post = data; console.log("Imprimo post body:\n" + this.post.text)})
        .catch((err) => console.log(err.message));
    },
    updatePost(){
        console.log("pido update");
        console.log("Imprimo post body:\n" + this.post.text)
        fetch(`http://localhost:3000/api/posts/${this.post.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.post),
        }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        }
        )
        .catch((e) => {
          console.log(e);
        }
        );
    },
    deletePost(){
        fetch(`http://localhost:3000/api/posts/${this.post.id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        )
        .then((response) => {
          console.log(response.data);
          //this.$router.push("/apost/" + this.post.id);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        }
        )
        .catch((e) => {
          console.log(e);
        });
    }







},
    mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
    // position in the URL. The captured values are populated in the req.params object, with the name 
    // of the route parameter specified in the path as their respective keys
    console.log(this.$route.params.id);
    this.fetchAPost(this.$route.params.id);
    
  },
}
</script>

<style scoped>
    *{
        display:flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    label{
        margin-right: 10px;
        align-items:center;
    }

    input{
        border-radius:8px;
        background-color: rgb(249, 249, 249);
        text-align:center;
        height: 25px;
        border: 0px solid;
        font-size:15px;
    }
    .attribute{
        justify-content:right;
        /* background-color: lightyellow; */
        flex-direction: row;
        align-items: center;
    }

    .error{
        margin-top:10px;
        color:rgb(192, 0, 0);
    }
    .atts{
        flex-direction: column;
        /* background-color: lightblue; */
        gap: 10px;
    }

    .buttons{
        flex-direction:row;
        gap:60px;
    }

    .btn{
        justify-content:center;
        /* background-color: lightyellow; */
        margin-top: 15px;
    }

    button{
        border: 0px solid;
        border-radius: 8px;
        background-color: rgb(139, 180, 221);
        padding: 4px 0px;
        font-size:14px;
        width: 5em;
        align-items: center;
    }

    button:hover{
        background-color: rgb(120, 120, 120);
    }

    form{
        flex-direction: column;
        justify-content: center;
        /* width: 40%; */
        align-items: center;
        padding: 20px 30px;
        background-color:rgb(221, 236, 215);
        margin: 30px 0px;
        border-radius: 15px;
        width:300px;
    }

    #main{
        justify-content: center;
        align-items:center;
        background-color: rgb(198, 198, 198);
        border-radius: 1em;
    }
  
</style>

