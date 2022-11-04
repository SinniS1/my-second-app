import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, url } = this.props;
    return (
      <>
        {/* <div>this is a news item componnet</div> */}
        <div className="my-1">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={`Breaking news`}/>
            <div className="card-body">
              <h5 className="card-title">{title + "  . . ."}</h5>
              <p className="card-text">{discription + "  . . ."}</p>
              <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary float-end">
                read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
