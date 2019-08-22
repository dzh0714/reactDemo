//微博
let blogs = [{
        id: 0,
        content: "搞笑组图：体育场上的失态动作"
    },
    {
        id: 1,
        content: "做哪个星座的老公最难?"
    },
    {
        id: 2,
        content: "娶外国女人做老婆的几个好处"
    }
]

let comments = [{
        id: 0,
        msg: "尴尬"
    },
    {
        id: 1,
        msg: "不知道.."
    },
    {
        id: 2,
        msg: "只爱你一个"
    }
];

let listeners = []

const DataSource = {
        //获取所有微博内容
        getBlogs() {
            return blogs;
        },
        getComments() {
            return comments
        },
        //修改微博{id content}
        updataBlog(newBlog) {
            blogs.forEach((curBlog, i) => {
                if (newBlog.id === curBlog.id) {
                    blogs[i] = Object.assign({}, curBlog, newBlog)
                }
            })
            DataSource.broadCast();
            console.log(DataSource.getBlogs());

        },

        //获取微博
        getBlogById(id) {
            return blogs.find((blog) => {
                return blog.id === id
            })
        },
        addComment(comment) {
            comments.push(comment);
            DataSource.broadCast();
            console.log(DataSource.getComments())

        },
        //订阅
        addChangeListener(handle) {
            listeners.push(handle)
        },
        removeChangeListener(handle) {
            let newListener = [];
            listeners.forEach((listener) => {
                if (listener !== handle) {
                    newListener.push(listener);
                }
            })
            listeners = newListener
        },

        //发布
        broadCast() {
            listeners.map((listener) => {
                listener()
            })
        }

    }
    // let comment = { id: 1, content: "三大屠杀的感受到胜多负少" };
    // DataSource.updataBlog(comment);


// console.log(DataSource.getBlogs());
// console.log(DataSource.getBlogById(1));


export default DataSource