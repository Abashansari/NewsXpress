import React, { Component } from 'react';
import BodyItems from './BodyItems';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      article_id: [], // Should initialize as an empty array, not `this.article_id`
      loading: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://newsdata.io/api/1/latest?apikey=pub_ec91e55dc2634650a3bd6c35444f38c0&q=india%20latest%20news&size=10'
      );
      const data = await response.json();
      this.setState({ article_id: data.results }); // Assuming the API returns results under `data.results`
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  render() {
    console.log('render');
    return (
      <div className="container my-3">
        <h2>Fast, dynamic news delivery powered by - NewsXpress</h2>
        <div className="row">
          {this.state.article_id.map((element) => {
            return (
              <div className="col-md-4" key={element.source_url}>
                <BodyItems
                  title={element.title ? element.title : "" }
                  description={element.description ? element.description : ""}
                  imgUrl={element.image_url ? element.image_url : ""}
                  newsUrl={element.source_url ? element.source_url: "" }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
