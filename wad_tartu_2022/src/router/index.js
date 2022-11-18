import { createRouter, createWebHashHistory } from "vue-router";
import SignupPage from "../views/Signup.vue";
import MainPage from "../views/Main.vue";


const routes = [{
        path: "/signup",
        name: "signup",
        component: SignupPage
    }, 
    {
        path: "/",
        name: "MainPage", 
        component: MainPage
    }
    //, path:"/main", name_ "main", component: HomePage
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;