import React from "react";
import NewPost from "../components/NewPost";
import PostList from "../components/PostList";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NewPost />
        <PostList />
      </React.Fragment>
    );
  }
}

export default HomePage;
