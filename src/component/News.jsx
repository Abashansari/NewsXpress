import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
 import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country : 'in',
    category :'sports',
    pageSize:5
    
  }

  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
    

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f02a88e04540436a93a6af8d1963aa35&pageSize=${this.props.pageSize}`)
   let data = await url.json();
   console.log(data);
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false
    });
    console.log(data.articles);
  }

  previousBtn = async () => {

    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f02a88e04540436a93a6af8d1963aa35&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
    this.setState({ loading: true })
    let data = await url.json();
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false
    });
  }


  nextBtn = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    } else {
      let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f02a88e04540436a93a6af8d1963aa35&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
      this.setState({ loading: true })
      let data = await url.json();
      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"35px 0px"}}>Fast, dynamic news delivery powered by - NewsXpress</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousBtn}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.nextBtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
