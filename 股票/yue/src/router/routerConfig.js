import Search from "../components/Search";
import Zixuan from "../components/Zixuan"

export default {
    routes: [{
            path: "/search",
            component: Search
        },
        {
            path: "/",
            redirect: "/zixuan"

        }, {
            path: "/zixuan",
            component: Zixuan
        }
    ]
}