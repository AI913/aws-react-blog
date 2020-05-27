import React from "react";
import { Button } from "element-react";
import { API, graphqlOperation } from "aws-amplify";
import { createLike, deleteLike } from "../graphql/mutations";
import { UserContext } from "../App";

class LikeBtn extends React.Component {
  state = {
    liked: "",
  };

  componentDidMount() {
    this.setLiked();
  }

  setLiked() {
    console.log(this.props);
    const { user } = this.props;
    const { post } = this.props;
    if (post.likes.items.find((items) => items.liker === user.username)) {
      this.setState({ liked: true });
    } else {
      this.setState({ liked: false });
      console.log("liked: false");
    }
  }

  handleLike = async (user) => {
    try {
      const input = {
        liker: user.username,
        likePostId: this.props.postId,
      };
      await API.graphql(graphqlOperation(createLike, { input }));
      this.setState({ liked: true });
      console.log("Liked!");
    } catch (err) {
      console.log("Failed to like", err);
    }
  };

  render() {
    const { liked } = this.state;
    const { like } = this.props;
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <React.Fragment>
            {liked ? (
              <Button type="primary">Liked!</Button>
            ) : (
              <Button type="primary" onClick={() => this.handleLike(user)}>
                Like
              </Button>
            )}
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default LikeBtn;
