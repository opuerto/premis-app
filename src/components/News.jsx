import React, { Component } from 'react';
import Filter from './Filter';
import NewsList from './NewsList';
import { news } from "../data";

class News extends Component {
    getNews = news;
    state = {
        news:this.getNews
    }

    filterNews = (id)=> {
                      
         if(id !== 0) {
             this.setState({
                 news:this.getNews.filter((item)=>item.categoryID === id)
             })
         } else {
             this.setState({
                 news:this.getNews
             })
         }   
    }

    render() {
        const {news} = this.state;
        return(
            <section className="news" >
                <Filter filterNews={this.filterNews} />
                <NewsList news={news}  />
            </section>
        );
    }
}

export default News;
