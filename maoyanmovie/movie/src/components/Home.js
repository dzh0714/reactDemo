import React, { Component } from "react";
import { connect } from "react-redux"


class Home extends Component {
    render() {
        //console.log(this.props.list);
        return (
            <>
                <header>猫眼电影</header>
                <nav>
                    <span>热映</span>
                    <span>待映</span>
                    <span onClick={() => {
                        this.props.history.push("/search")
                    }}>搜索</span>
                </nav>
                <section>
                    {
                        this.props.list.map((item, i) => {
                            return <dl key={i} onClick={() => {
                                this.props.history.push("/detail/" + item.id, { item: item })
                            }}>
                                <dt><img src={item.img} alt="" /></dt>
                                <dd>
                                    <h2>{item.nm}</h2>
                                    <p>{item.rt}</p>
                                    <p>{item.showInfo}</p>
                                    <p>{item.star}</p>
                                </dd>
                            </dl>
                        })

                    }

                </section>

            </>
        )
    }

}

let HomemapStateToProps = (state) => {
    return {
        list: state.dataList
    }
}

let HomemapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(HomemapStateToProps, HomemapDispatchToProps)(Home)