import React, { Component } from 'react'
import { differenceInDays, formatDistanceToNow } from 'date-fns';

export default class NewsItems extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date } = this.props

        const formatPublishedDate = (publishedDate) => {
            const parsedDate = new Date(publishedDate);
            const diffDays = differenceInDays(new Date(), parsedDate);
        
            if (diffDays === 1) {
              return "Yesterday";
            } else {
              return formatDistanceToNow(parsedDate, { addSuffix: true });
            }
          };
        return (
            <>
                <div>
                    <div className="card">
                        <img src={imgUrl ? imgUrl : "https://via.placeholder.com/300x200?text=No+Image"} className="card-img-top" alt="No Image" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                By {author ? author : "Unknown"} — {formatPublishedDate(date)}
                                </small>
                            </p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
