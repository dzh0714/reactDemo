import React,{Component} from "react";
import DataSource from '../db/DataSource';


//更新数据
class BlogPost extends Component{
	constructor(props) {
	        super(props);
	        this.state = {
	            blog: DataSource.getBlogById(1)
	        }

	        this.changeBlog = this.changeBlog.bind(this);
	        this.handle = this.handle.bind(this);
	 }
	 
    render() {
        return (
            <div>
                <h1>{this.state.blog.content}</h1>
                <button onClick={this.changeBlog}>修改数据</button>
            </div>
        );
    }

    changeBlog() {
        const newBlog = {id:1, content: "哈哈哈哈哈"};
        DataSource.updateBlog(newBlog);
    }

    

    componentDidMount() {
        //订阅
        DataSource.addChangeListener(this.handle)

    }

    handle() {
        this.setState({
            blog: DataSource.getBlogById(1)
        })
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handle);
    }

}

export default BlogPost;