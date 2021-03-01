import React, { Component } from "react";
import NewsCardItem from "./NewsCardItem";
import { connect } from "react-redux";
import { fetchOnenews } from ".././actions";

class NewsDetailsPage extends Component {
  state = {
    display: true,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOnenews(id);
    console.log(this.props.fetchOnenews(id), "id");
  }

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
  return { news: state.news.newslists };
};
export default connect(mapStateToProps, { fetchOnenews })(NewsDetailsPage);
