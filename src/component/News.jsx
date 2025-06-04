import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default function News({ country, category, apiKey, pageSize, setProgress }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    setProgress(10);
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      setProgress(50);
      const data = await response.json();
      setProgress(90);
      // console.log(data)
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `NewsXpress —${category}`
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page + 1 <= Math.ceil(totalResults / pageSize)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        Fast, dynamic news delivery powered by - NewsXpress
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItems
              title={element.title || ""}
              description={element.description || ""}
              imgUrl={element.urlToImage || ""}
              newsUrl={element.url || ""}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-between'>
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};