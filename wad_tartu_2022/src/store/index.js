import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {postList:[
        {id: 1, likes: 0, author: "Mr Happy", createTime: 1666007757754, postText: "Today is a great day", imgID: "Mr_Happy.jpg", imgAlt: "Mr Happy"}, 
        {id: 2, likes: 0, author: "Mr Grumpy", createTime: 1666007757730, postText: "What a waste of time, I'm not posting my picture!", imgID: "", imgAlt: ""},
        {id: 3, likes: 0, author: "Mr Messy", createTime: 1666007757735, postText: "oops...", imgID: "Mr_Messy.jpg", imgAlt:"Mr Messy"},
        {id: 4, likes: 0, author: "Mr Forgetful", createTime:  1666007757715, postText: "I feel like I'm meant to be somewhere, but I can't remember where...", imgID:"Mr_Forgetful.jpg", imgAlt: "Mr Forgetful"},
        {id: 5, likes: 0, author: "Mr Bump", createTime: 1666007757754, postText: "Ouch... that hurt!", imgID: "Mr_Bump.jpg", imgAlt: "Mr Bump"},
        {id: 6, likes: 0, author: "Mr Rush", createTime:1666007757750, postText:"Sorry, I've got to go!!!", imgID:"Mr_Rush.jpg", imgAlt: "Mr Rush"},
        {id: 7, likes: 0, author: "Mr Nosey", createTime: 1666007757705, postText: "I wonder what is going on there...", imgID:"Mr_Nosey.jpg", imgAlt: "Mr Nosey"},
        {id: 8, likes: 0, author: "Mr Noisy", createTime: 1666007757723, postText:"HELLO! HELLO!", imgID: "Mr_Noisy.jpg", imgAlt: "Mr Noisy"},
        {id: 9, likes: 0, author: "Mr Small", createTime: 1666007757721, postText:"I wish I was a little taller", imgID:  "Mr_Small.jpg", imgAlt: "Mr Small"},
        {id: 10, likes: 0, author: "Mr Happy", createTime: 1666007757754, postText: "I forgot to add, hope you have a great day!", imgID:  "", imgAlt: ""}
        ]},

    getters: {
        getPostList: state => {
            var postList = state.postList.map(post => {
                   return {
                        id: post.id,
                        likes: post.likes,
                        author: post.author,
                        createTime: post.createTime,
                        postText: post.postText,
                        imgID: post.imgID,
                        imgAlt: post.imgAlt
                   }
               });
               return postList
           }
    },
    mutations: {
        like: (state, {postId}) => {
            console.log(postId)
            state.postList.forEach(post => {
                if(post.id == postId){
                    post.likes += 1
                    console.log(post.likes)
                }
            })
        },
        resetLikes: state => {
            state.postList.forEach(post => {
                post.likes = 0
            })
        }

    },

})