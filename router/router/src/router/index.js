import React, { Component } from "react";
import data from "./routerConfig"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Manager from "../components/manager";


class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {
                            data.map((item, i) => {
                                return <Link to={item.path} key={i}>{item.navTitle}</Link>
                                // <Route path={item.path} key={i} ></Route>
                            })
                        }
                        
                        {/* {
                            data.map((item, i) => {
                                return <Route path={item.path} key={i} component={item.component}></Route>
                            })
                        } */}
                        
                        {
                            data.map((item, i) => {
                                return <Route path={item.path}
                                    key={i}
                                    render={(props) => {
                                        let Man = item.component ? item.component : Manager;
                                        return <Man subNavs={item.subNavs} path={props.match.path}></Man>
                                    }}>
                                </Route>
                            })
                        }
                    </div>

                </Router>

            </div>
            
        )
    }
}

export default Index