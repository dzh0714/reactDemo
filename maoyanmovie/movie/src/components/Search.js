import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (
            <>
                <header className="searchHeader">
                    <span>&lt;</span>
                    <span>搜索</span>
                    <span>..</span>
                </header>
                <div className="searchInput">
                    <input type="text" onInput={this.inputValue.bind(this)}/>
                </div>
                <section>

                </section>
            </>
        );
    }

}

export default Search;
