import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

export default class RouterView extends React.Component {
    render() {
        let routes = this.props.data;//接收外面传来的数3据，传的时候必须是 data={}
        let redirectArr = routes.filter((item, i) => item.redirect)//重定向数组

        let redirectDom = redirectArr.map((item, i) => {

            return <Redirect key={i} from={item.path} to={item.redirect}></Redirect>
        })

        //干掉重定向对象
        routes = routes.filter((item) => {
            return !item.redirect
        })

        return (
            <Switch>
                {
                    routes.map((item, i) => {
                        return <Route key={i}
                            path={item.path}
                            render={(props) => {
                                return <item.component {...props} children={item.children} />
                            }}
                        />
                    }).concat(redirectDom)
                }
            </Switch>
        )
    }
}