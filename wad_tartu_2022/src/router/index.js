import { createRouter, createWebHashHistory } from "vue-router";
import SignupPage from "../views/Signup.vue";
import MainPage from "../views/Main.vue";
import LoginPage from "../views/Login.vue";
import AddPost from "../views/AddPost.vue";
import SinglePost from "../views/Post.vue";


const routes = [{
        path: "/signup",
        name: "signup",
        component: SignupPage
    }, 
    { 
        path: "/login",
        name: "login",
        component: LoginPage

    },
    {
        path: "/",
        name: "MainPage", 
        component: MainPage
    },
    {
        path: "/addPost",
        name: "AddPost", 
        component: AddPost
    },
    {
        path: "/post",
        name: "SinglePost", 
        component: SinglePost
    }

    //, path:"/main", name_ "main", component: HomePage
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;