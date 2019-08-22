import React, { Component } from 'react';
class Detail extends Component {
  render() {
    let data = this.props.history.location.state.item
   
    return (
      <div className="detail">
        <header>
          <span>&lt;</span>
          <span>影片详情</span>
          <span>..</span>
        </header>
        <section className="detailWrap">

            <img src={data.img} alt=""/>
            <div>
              <h1>{data.nm}</h1>
              <p>{data.star}</p>
            </div>
            
        </section>
      </div>
    );
  }

}

export default Detail;
