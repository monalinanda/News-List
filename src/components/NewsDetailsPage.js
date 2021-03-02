import React, { Component } from "react";
import NewsCardItem from "./NewsCardItem";
import { connect } from "react-redux";

class NewsDetailsPage extends Component {
  state = {
    display: true,
  };
  render() {
    return (
      <div className="details-conainer">
        {this.props.news &&
          this.props.news.map((item) => (
            <NewsCardItem
              item={item}
              source={item.source}
              className="details-card"
              display={this.state.display}
            />
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state,"state")
  return { news: state.news.newslists };
};
export default connect(mapStateToProps)(NewsDetailsPage);
