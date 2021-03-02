import React, { Component } from "react";
import NewsCardItem from "./NewsCardItem";
import { connect } from "react-redux";
import { fetchNews, fetchOnenews } from ".././actions";
import { Link } from "react-router-dom";

class NewsCards extends Component {
  state = {
    isLoading: true,
    text: "",
  };
  componentDidMount() {
    this.props.fetchNews();
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleClick = (item) => {
    this.props.fetchOnenews(item);
  };
  rendrList() {
    const { text } = this.state;
    const lowercasedFilter = text.toLowerCase();
    const filteredData =
      this.props.news &&
      this.props.news.filter((item) => {
        return Object.keys(item).some(
          (key) =>
            item.author && item.author.toLowerCase().includes(lowercasedFilter)
        );
      });
    return (
      filteredData &&
      filteredData.map((item, index) => {
        return (
          <Link
            to={`/newsDetails/${index}`}
            style={{ color: "#000" }}
            onClick={() => this.handleClick(item)}
          >
            <NewsCardItem className="card" item={item} source={item.source} />
          </Link>
        );
      })
    );
  }
  render() {
    return !this.state.isLoading ? (
      <div>spiner</div>
    ) : (
      <div className="container">
        <input
          className="search-item"
          value={this.props.text}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <section className="cards">{this.rendrList()}</section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { news: state.news.newslists };
};
export default connect(mapStateToProps, { fetchNews, fetchOnenews })(NewsCards);
