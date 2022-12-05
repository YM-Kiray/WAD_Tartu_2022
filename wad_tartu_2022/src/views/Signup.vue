<template>
    <div>
        <div class="signup">
            <div id="main">
                <form v-on:submit.prevent = "validate">
                    <div class="atts">
                        <div class="attribute">
                            <label for="email">Email</label>
                            <input type="text" id="email" placeholder="Email" required v-model="email"/>
                        </div>
                        <div class="attribute">
                            <label for="password">Password</label>
                            <input type="text" id="password" placeholder="Password" required v-model="password"/>
                        </div>
                    </div>
                    <div v-if="error" class="error">
                        {{error}}
                    </div>
                    <div class="submit">
                        <button>Signup </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name:"SignupPage",
    components:{
    },
    props:{},
    data:()=>{
        return{
            email:"",
            password:"",
            error:""
        }
    },
    methods:{
        validate(){
            let regex1 = /[A-Z]/
            let regex21 = /[A-Z]+/
            let regex22 = /[a-z]{2,}/
            let regex23 = /[0-9]+/
            let regex24 = /_+/
            if(this.password.length < 8 || this.password.length > 15){
                this.error = 'Password must be between 8-15 characters.'
                this.password = "";
                return;
            }                
            else if(this.password.match(regex1)==null || this.password.match(regex1).index != 0){
                this.error = 'Password must start with an uppercase alphabet.'
                this.password = "";
                return;
            }
            else if(!(regex21.test(this.password) && regex22.test(this.password) && regex23.test(this.password) && regex24.test(this.password))){
                this.error = 'Password must contain at least 1 uppercase alphabet character, 2 lowercase alphabet characters, 1 numeric value and the character "_"'
                this.password = "";
                return;
            }
            else{
                this.error= ""
                this.password = "";
            }  
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

    .submit{
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

