<template>
    <div>
        <div class="addpost">
            <div id="main">
                <form>
                    <div class="atts">
                        <div>Add Post</div>
                        <div class="attribute">
                            <label for="text">Body</label>
                            <input type="text" id="text" placeholder="Body" required v-model="text"/>
                        </div>
                    </div>
                    <!--
                    <div v-if="error" class="error">
                        {{error}}
                    </div>
                    -->
                    <div class="add">
                        <button type="button" @click="addPost">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddPost",
    components:{},
    props:{},
    data:()=>{
        return{
            text:""
        }
    },
    methods:{
        addPost(){
            var data = {
                body: this.text
            };
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
            )
            .then((response) => {
                console.log(response.data);
                this.$router.push("/");
            })
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
        }
    }
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

    .add{
        justify-content:center;
        /* background-color: lightyellow; */
        margin-top: 15px;
    }

    button{
        border: 0px solid;
        border-radius: 8px;
        background-color: rgb(139, 180, 221);
        padding: 4px 15px;
        font-size:14px;
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

