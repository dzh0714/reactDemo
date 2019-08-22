import React, { Component } from 'react';
import data from "../mock/data.json"

class RightList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="rightList">
                    {
                        data.map((item, i) => {
                            return <dl key={i}>
                                <dt>
                                    <img src={item.img} alt="" />
                                </dt>
                                <dd>{item.alt}</dd>
                            </dl>
                        })
                    }

           
            </div>
        )
    }
}

export default RightList

