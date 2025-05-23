// import React from 'react'

// export default function NewsData() {
//   return (
//     <>
//     <div>       
//            const apiKey = pub_ec91e55dc2634650a3bd6c35444f38c0
//         const url = fetch("https://newsdata.io/api/1/latest?apikey=pub_ec91e55dc2634650a3bd6c35444f38c0&q=YOUR_QUERY&size=10")
//   //  let search = fetch(" https://newsdata.io/api/1/latest?apikey=pub_ec91e55dc2634650a3bd6c35444f38c0&q=pizza")
//     let data = url.json()
//     </div>
//     <>
//   )
// }
import React, { useEffect, useState } from 'react';

export default function NewsData() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_ec91e55dc2634650a3bd6c35444f38c0&q=pizza&size=10");
        const data = await response.json();
        setNews(data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
