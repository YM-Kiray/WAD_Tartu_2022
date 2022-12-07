
<template>
    <div>
        <div id="main">
                <div class="atts">
                    <div>
                        <h1>Contact Us</h1>
                        <div class="contacts">
                            <p>Email:  help@testemail.com <br>
                            Phone: 00 49 1234567890 </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ContactUsPage",
  }
</script>

<style scoped>
    *{
        display:flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        text-align: center;
    }


    .attribute{
        justify-content:right;
        /* background-color: lightyellow; */
        flex-direction: column;
        justify-content: center;
        /* width: 40%; */
        padding: 20px 30px;
        background-color:rgb(221, 236, 215);
        margin: 30px 0px;
        border-radius: 15px;
        width:300px;
        text-align: center;
    }


    .atts{
        flex-direction: column;
        /* background-color: lightblue; */
        gap: 10px;
        justify-content:right;
        /* background-color: lightyellow; */
        align-items: center;
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

    .contacts{
        text-align: center;
        /*background-color: darkblue;*/

    }


    #main{
        justify-content: center;
        align-items:center;
        background-color: rgb(198, 198, 198);
        border-radius: 1em;
    }
  
</style>

