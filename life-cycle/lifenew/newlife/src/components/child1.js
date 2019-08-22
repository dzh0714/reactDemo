import React, { Component } from 'react';

class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "lisi"
        }
    }
    render() {
        return (
            <div className="Child1">
            </div>
        );
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        return null
    }
    getSnapshotBeforeUpdate(prePrps, preState) {
        console.log(prePrps);
        console.log(preState);
        return null

    }

    componentDidUpdate() {
        console.log("df")
    }
}

export default Child1;
