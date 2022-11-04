// import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    // creating a state
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3df54f33cc184e9e818ba948b9679013&page=1";
    let data = await fetch(url);
    let parssedData = await data.json();
    console.log(parssedData);
    this.setState({
      articles: parssedData.articles,
      totalResults: parssedData.totalResults,
    });
  }
  nxtclick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3df54f33cc184e9e818ba948b9679013&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parssedData = await data.json();
      console.log(parssedData);
      this.setState({
        articles: parssedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  prvclick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3df54f33cc184e9e818ba948b9679013&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parssedData = await data.json();
    console.log(parssedData);
    this.setState({
      articles: parssedData.articles,
      page: this.state.page - 1,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <h3>News Monkey- Top Headlines</h3>
          {/* components */}
          <div className="row px-5">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    discription={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ip2-CksLRyPexC88_6E3WerXvdCB9U96ie4NkrW&s"
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container my-5">
            <button hidden={this.state.page <= 1} className="btn btn-primary float-start ms-5" type="submit" onClick={this.prvclick}>
              &larr; Previous
            </button>
            <button
              className="btn btn-primary float-end me-5"
              hidden={this.state.page + 1 > Math.ceil(this.state.totalResults / 20) ? true : false}
              type="submit"
              onClick={this.nxtclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
