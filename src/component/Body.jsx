import React, { Component } from 'react';
import BodyItems from './BodyItems';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], 
      // loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-05-22&to=2025-05-22&sortBy=popularity&apiKey=f02a88e04540436a93a6af8d1963aa35&pageSize=20');
    let data = await url.json();
    this.setState({ articles: data.articles });
  }

  previous = async () => {
    let url = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-05-22&to=2025-05-22&sortBy=popularity&apiKey=f02a88e04540436a93a6af8d1963aa35&page=${this.state.page - 1}&pageSize=20`);
    let data = await url.json();
    this.setState({
      page: this.state.page - 1,
      articles: data.articles
    });
  }

  next = async () => {
    let url = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-05-22&to=2025-05-22&sortBy=popularity&apiKey=f02a88e04540436a93a6af8d1963aa35&page=${this.state.page + 1}&pageSize=20`);
    let data = await url.json();
    this.setState({
      page: this.state.page + 1,
      articles: data.articles
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Fast, dynamic news delivery powered by - NewsXpress</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <BodyItems
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
            onClick={this.previous}
          >
            &larr; Previous
          </button>
          <button 
            type="button" 
            className="btn btn-dark" 
            onClick={this.next}
          >
            Next &rarr;
          </button>
        </div>     
      </div>
    );
  }
}
