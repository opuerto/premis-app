import React from "react";

const NewsList = (props) => {
   const {news} = props;
   const displayNews = news.map((item)=>(
     <div key={item.id} className="col-xl-3 col-md-6 col--center">
         <div className="news-box">
                <div className="news-box__img" style={{backgroundImage:"url("+item.img+")"}}>
                </div>
                <span className="news-box__category">{item.categoryName}</span>
                <div className="news-box__title">
                    <h1>{item.title}</h1>
                </div>
                <span className="news-box__date">{item.date}</span>
                <div className="news-box__excerpt">
                    <p>{item.excerpt}</p>
                </div>
            </div>
     </div>
   ));
  return (
    <section className="news-list">
      <div className="contain">
        <div className="row">
          {displayNews.length > 0 ? displayNews : <h1>Það eru engar fréttir</h1>}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
