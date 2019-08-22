import Home from "../components/home";
import Assistant from "../components/Assistant"
import Jifen from "../components/Jifen"

let routerConfig = [{ navTitle: "首页", path: "/home", component: Home },
    {
        navTitle: "员工管理",
        path: "/person",
        component: null,
        subNavs: [{
                subNavTitle: "档案管理",
                path: "/dangan"
            },
            { subNavTitle: "积分管理", path: "" },
            { subNavTitle: "课程管理", path: "" },
            { subNavTitle: "代课费管理", path: "" },
            { subNavTitle: "生日提醒", path: "" },
            { subNavTitle: "薪酬管理", path: "" },
            { subNavTitle: "离职管理", path: "" },
        ]
    },
    { navTitle: "助手管理", path: "/assistant", component: Assistant },
    { navTitle: "积分管理", path: "/intergral", component: Jifen },
    { navTitle: "员工考勤", path: "/check", component: null }
];


export default routerConfig