import { createRouter, createWebHashHistory } from "vue-router";
import SignupPage from "../views/Signup.vue";
import MainPage from "../views/Main.vue";
import LoginPage from "../views/Login.vue";
import AddPost from "../views/AddPost.vue";
import SinglePost from "../views/Post.vue";
import ContactUsPage from "../views/ContactUs.vue";
import auth from "../auth";



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
        path: "/contactUs",
        name: "contactUs",
        component: ContactUsPage

    },
    {
        path: "/", 
        name: "MainPage", 
        component: MainPage,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/addPost",
        name: "AddPost", 
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/posts/:id",
        name: "SinglePost", 
        component: SinglePost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    }

    //, path:"/main", name_ "main", component: HomePage
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});



export default router;