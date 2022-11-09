import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {postList:[
        {author: "Mr Happy", createTime: 1666007757754, postText: "Today is a great day", imgID: "Mr_Happy.jpg", imgAlt: "Mr Happy"}, 
        {author: "Mr Grumpy", createTime: 1666007757730, postText: "What a waste of time, I'm not posting my picture!", imgID: "", imgAlt: ""},
        {author: "Mr Messy", createTime: 1666007757735, postText: "oops...", imgID: "Mr_Messy.jpg", imgAlt:"Mr Messy"},
        {author: "Mr Forgetful", createTime:  1666007757715, postText: "I feel like I'm meant to be somewhere, but I can't remember where...", imgID:"Mr_Forgetful.jpg", imgAlt: "Mr Forgetful"},
        {author: "Mr Bump", createTime: 1666007757754, postText: "Ouch... that hurt!", imgID: "Mr_Bump.jpg", imgAlt: "Mr Bump"},
        {author: "Mr Rush", createTime:1666007757750, postText:"Sorry, I've got to go!!!", imgID:"Mr_Rush.jpg", imgAlt: "Mr Rush"},
        {author: "Mr Nosey", createTime: 1666007757705, postText: "I wonder what is going on there...", imgID:"Mr_Nosey.jpg", imgAlt: "Mr Nosey"},
        {author: "Mr Noisy", createTime: 1666007757723, postText:"HELLO! HELLO!", imgID: "Mr_Noisy.jpg", imgAlt: "Mr Noisy"},
        {author: "Mr Small", createTime: 1666007757721, postText:"I wish I was a little taller", imgID:  "Mr_Small.jpg", imgAlt: "Mr Small"},
        {author: "Mr Happy", createTime: 1666007757754, postText: "I forgot to add, hope you have a great day!", imgID:  "", imgAlt: ""}
        ]},

    getters: {
        getPostList: state => {
            var postList = state.postList.map(post => {
                   return {
                       author: post.author,
                       createTime: post.createTime,
                       postText: post.postText,
                       imgID: post.imgID,
                       imgAlt: post.imgAlt
                   }
               });
               return postList
           }}

})