import React, { Component } from "react";
import NewsCardItem from "./NewsCardItem";
import { connect } from "react-redux";
import { fetchNews,fetchOnenews,searchnews} from ".././actions";
import { Link } from "react-router-dom";

class NewsCards extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    return !this.state.isLoading ? (
      <div>spiner</div>
    ) : (
      <div>
        <input  className ="search-item" value={this.props.text}  onChange={(e) =>
              this.props.searchnews(this.props.news, e.target.value)} placeholder="Search..."/>
      <section className="cards">
        {this.props.news &&
          this.props.news.map((item) => (
            <Link to={`/newsDetails/${item.source.id}`}  style={{color:"#000"}}>
              <NewsCardItem className="card"item={item} source={item.source} onClick={()=>{this.handleClick(item.source.id)}}/>
            </Link>
          ))}
      </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { news: state.news.filterednews ,text: state.news.text};
};
export default connect(mapStateToProps, {fetchNews,fetchOnenews,searchnews})(NewsCards);
