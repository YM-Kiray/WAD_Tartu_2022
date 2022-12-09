<template>
    <div>
        <div class="post">
            <div id="main">
                <form>
                    <div class="atts">
                        <div>A Post</div>
                        <div class="attribute">
                            <label for="body">Body</label>
                            <input type="text" id="body" placeholder="Body" required v-model="body"/>
                        </div>
                    </div>
                    <!--
                    <div v-if="error" class="error">
                        {{error}}
                    </div>
                    -->
                    <div class="buttons">
                        <div class="btn">
                            <button>Update</button>
                        </div>
                        <div class="btn">
                            <button>Delete</button>
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
            id:"",
            body:"",
            date:""
        }
    },

    methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            this.post.id = data.id;
            this.body = data.postText;
            this.date = data.createTime}
        )
        .catch((err) => console.log(err.message));
    },
},
    mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
    // position in the URL. The captured values are populated in the req.params object, with the name 
    // of the route parameter specified in the path as their respective keys
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

