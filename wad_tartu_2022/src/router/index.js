import { createRouter, createWebHashHistory } from "vue-router";
import SignupPage from "../views/Signup.vue";
// import MainView from "../views/FormView.vue";


const routes = [{
        path: "/signup",
        name: "signup",
        component: SignupPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;