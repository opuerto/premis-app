import React, { Component } from "react";

class Filter extends Component {
  state = {
    categories: [
      {
        id: 0,
        name: "allt",
        selected: true
      },
      {
        id: 1,
        name: "fréttir",
        selected: false
      },
      {
        id: 2,
        name: "íþróttir",
        selected: false
      },
      {
        id: 3,
        name: "tónlist",
        selected: false
      },
      {
        id: 4,
        name: "lífiÐ",
        selected: false
      }
    ]
  };

  handleCategoryClick = id => {
    const { filterNews } = this.props;
    filterNews(id);
    this.categoryActive(id);
    
  };

  categoryActive = id => {
    const { categories } = this.state;
    this.setState({
      categories: categories.map(category => {
        if (category.id === id) {
          return { ...category, selected: true };
        } else {
          return { ...category, selected: false };
        }
      })
    });
  };
  render() {
    const { categories } = this.state;

    const categoryNews = categories.map(category => (
      <div
        key={category.id}
        onClick={() => this.handleCategoryClick(category.id)}
        className={category.selected ? "category category--active" : "category"}
      >
        {category.name}
      </div>
    ));
    return (
      <div className="filter">
        <div className="contain">
          <div className="filter__container">{categoryNews}</div>
        </div>
      </div>
    );
  }
}
export default Filter;
