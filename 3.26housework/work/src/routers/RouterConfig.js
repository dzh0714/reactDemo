import Add from "../components/Add"
import Look from "../components/Look"

export default {
    routes: [{
        path: "/add",
        component: Add
    }, {
        path: "/look",
        component: Look
    }, {
        path: "/",
        redirect: "/add"
    }]
}