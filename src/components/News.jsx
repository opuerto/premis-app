import React, { Component } from 'react';
import Filter from './Filter';

class News extends Component {
    render() {
        return(
            <section className="news" style={{height:'1200px'}}>
                <Filter />
            </section>
        );
    }
}

export default News;
