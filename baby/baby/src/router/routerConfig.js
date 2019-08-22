import BabySee from "../components/BabySee";
import BabyListen from "../components/BabyListen";
import Mine from "../components/Mine.js";
import Song from "../components/babySee/Song"
import Cartoon from "../components/babySee/Cartoon"
import Story from "../components/babySee/Story"
import Play from "../components/babySee/Play"


export default {
    routes: [{
            path: "/look",
            component: BabySee,
            children: [{
                path: "/look/song",
                component: Song
            }, {
                path: "/look/story",
                component: Story
            }, {
                path: "/look/cartoon",
                component: Cartoon
            }, {
                path: "/look",
                redirect: "/look/song"
            }, {
                path: "/look/play",
                component: Play
            }]
        },
        {
            path: "/listen",
            component: BabyListen
        }, {
            path: "/mine",
            component: Mine
        }, {
            path: "/",
            redirect: "/look"
        }
    ]
}