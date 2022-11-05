// import PropTypes from "prop-types";
import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];

  constructor(props) {
    super(props);
    // creating a state
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `Sachin's News: ${this.props.category}`;
  }

  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=3df54f33cc184e9e818ba948b9679013&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parssedData = await data.json();
    console.log(parssedData);
    this.setState({
      articles: parssedData.articles,
      totalResults: parssedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.UpdateNews();
  }

  country = (txt) => {
    if (txt === "in") {
      return "India";
    } else if (txt === "us") {
      return "America";
    } else if (txt === "il") {
      return "Israel";
    } else if (txt === "au") {
      return "Australia";
    } else if (txt === "za") {
      return "Sourth Africa";
    }
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=3df54f33cc184e9e818ba948b9679013&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parssedData = await data.json();
    console.log(parssedData);
    this.setState({
      articles: this.state.articles.concat(parssedData.articles),
      totalResults: parssedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h3 className="text-center my-4">
          Sachin's News: Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines
        </h3>
        {/* components */}
        {/* {this.state.loading && <Loading />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >

          <div className="container">
            <div className="row px-5">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : "Click read more"}
                      discription={element.description ? element.description.slice(0, 88) : ""}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ip2-CksLRyPexC88_6E3WerXvdCB9U96ie4NkrW&s"
                      }
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
