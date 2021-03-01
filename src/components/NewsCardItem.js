import React, { Component } from "react";
import NewsDetails from "./NewsDetails";
import Image from "./Image";

export default class NewsCardItem extends Component {
  render() {
    return (
      <div className={this.props.className} id={this.props.source.id}>
        <div className="card-inner">
          <div className="card-front">
            <div className="nav-bar flex font-bold">
              <div className="source-name">{this.props.source.name}</div>
              <div className="author-name">{this.props.item.author}</div>
            </div>
            <div
              className={
                this.props.display
                  ? "image-title-container-flex"
                  : "image-title-container"
              }
            >
              <Image urlToImage={this.props.item.urlToImage} alt="" />
              <p>Title : {this.props.item.title}</p>
            </div>
            {this.props.display ? (
              <NewsDetails details={this.props.item.description} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
