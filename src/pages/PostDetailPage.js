import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateComment,
  onCreateLike,
  onDeleteLike,
} from "../graphql/subscriptions";
import { getPost } from "../graphql/queries";
import Comment from "../components/Comment";
import LikeBtn from "../components/LikeBtn";
import { Loading, Icon } from "element-react";
import { Link } from "react-router-dom";
import { S3Image } from "aws-amplify-react";
import { distanceInWordsToNow } from "date-fns";

import NewComment from "../components/NewComment";

class PostDetailPage extends React.Component {
  state = {
    post: null,
    isLoading: true,
    isAuthor: false,
  };

  componentDidMount() {
    this.handleGetPost();
    this.createCommentListener = API.graphql(
      graphqlOperation(onCreateComment)
    ).subscribe({
      next: (commentData) => {
        const createdComment = commentData.value.data.onCreateComment;
        const prevComments = this.state.post.comments.items.filter(
          (item) => item.id !== createdComment.id
        );
        const updatedComments = [createdComment, ...prevComments];
        const post = { ...this.state.post };
        post.comments.items = updatedComments;
        this.setState({ post });
      },
    });
    this.createLikeListener = API.graphql(
      graphqlOperation(onCreateLike)
    ).subscribe({
      next: (likeData) => {
        const createdLike = likeData.value.data.onCreateLike;
        const prevLikes = this.state.post.likes.items.filter(
          (item) => item.id !== createdLike.id
        );
        const updatedLikes = [createdLike, ...prevLikes];
        const post = { ...this.state.post };
        post.likes.items = updatedLikes;
        this.setState({ post });
      },
    });
    this.deleteLikeListener = API.graphql(
      graphqlOperation(onDeleteLike)
    ).subscribe({
      next: (likeData) => {
        const deletedLike = likeData.value.data.onDeleteLike;
        const updatedLikes = this.state.post.likes.items.filter(
          (item) => item.id !== deletedLike.id
        );
        const post = { ...this.state.post };
        post.likes.items = updatedLikes;
        this.setState({ post });
      },
    });
  }

  componentWillUnmount() {
    this.createCommentListener.unsubscribe();
  }

  handleGetPost = async () => {
    const input = {
      id: this.props.postId,
    };
    const result = await API.graphql(graphqlOperation(getPost, input));
    console.log({ result });
    this.setState({ post: result.data.getPost, isLoading: false }, () => {});
  };

  checkPostAuthor = () => {
    const { user } = this.props;
    const { post } = this.state;
    if (user) {
      this.setState({ isAuthor: user.username === post.author });
    }
  };

  render() {
    const { post, isLoading } = this.state;
    return isLoading ? (
      <Loading fullscreen={true} />
    ) : (
      <React.Fragment>
        {/*Back Button */}
        <Link className="link" to="/">
          Back to Home Page
        </Link>
        {/*Post MetaData*/}
        <span className="items-center pt-2">
          <h2 className="mb-mr">{post.title}</h2>
        </span>
        <span className="items-center pt-2">{post.content}</span>
        {post.file ? <S3Image imgKey={post.file.key} /> : null}
        <div className="items-center pt-2">
          <span style={{ color: "var(--lightSquidInk)", paddingBottom: "1em" }}>
            <Icon name="date" className="icon" />
            {distanceInWordsToNow(post.createdAt)}
          </span>
        </div>
        <div className="items-center pt-2">
          <LikeBtn
            user={this.props.user}
            post={post}
            postId={this.props.postId}
            like={post.likes.items}
          />
        </div>
        <div className="items-center pt-2">
          {post.likes.items.length}people liked this.
        </div>
        <div>
          Add Comment
          <NewComment postId={this.props.postId} />
        </div>
        {/* Comments */}
        Comments: ({post.comments.items.length})
        <div className="comment-list">
          {post.comments.items.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default PostDetailPage;
