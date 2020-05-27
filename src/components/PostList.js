import React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect, S3Image } from "aws-amplify-react";
import { searchPosts } from "../graphql/queries";
import { onCreatePost } from "../graphql/subscriptions";
import { Loading, Card, Icon, Tag } from "element-react";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";
import { formatPostDate, formatTimePassed } from "../utils/index";
import Error from "./Error";

const PostList = () => {
  const onNewPost = (prevQuery, newData) => {
    let updatedQuery = { ...prevQuery };
    const updatedPostList = [
      newData.onCreatePost,
      ...prevQuery.searchPosts.items,
    ];
    updatedQuery.searchPosts.items = updatedPostList;
    return updatedQuery;
  };
  return (
    <Connect
      query={graphqlOperation(searchPosts, {
        limit: 50,
        sort: {
          field: "createdAt",
          direction: "desc",
        },
      })}
      subscription={graphqlOperation(onCreatePost)}
      onSubscriptionMsg={onNewPost}
    >
      {({ data, loading, errors }) => {
        if (errors.length > 0) return <Error errors={errors} />;
        if (loading || !data.searchPosts) return <Loading fullscreen={true} />;
        return (
          <React.Fragment>
            <h2 className="header">
              <img
                src="https://icon.now.sh/store_mall_directory/527FFF"
                alt="BlogIcon"
                className="large-icon"
              />
              Bloggit
            </h2>
            {data.searchPosts.items.map((post) => (
              <div key={post.id} className="my-2">
                <Card
                  bodyStyle={{
                    padding: "0.7em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ color: "var(--lightSquidLink)" }}>
                      By {post.author} . {distanceInWordsToNow(post.createdAt)}{" "}
                      ago
                    </div>
                    <span className="flex">
                      <Link className="link" to={`/postdetail/${post.id}`}>
                        <h3>{post.title}</h3>
                      </Link>
                      <span style={{ color: "var(--darkAmazonOrage)" }}></span>
                    </span>
                    <span className="flex">
                      <Link className="link" to={`/postdetail/${post.id}`}>
                        {post.content}
                      </Link>
                    </span>
                    <div>
                      {post.file ? (
                        <S3Image
                          imgKey={post.file.key}
                          theme={{
                            photoImg: { maxWidth: "50%", maxHeight: "100%" },
                          }}
                        />
                      ) : null}
                    </div>
                    <div>
                      <Link className="link" to={`/postdetail/${post.id}`}>
                        {post.likes.items.length} likes{" "}
                        {post.comments.items.length} comments
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </React.Fragment>
        );
      }}
    </Connect>
  );
};

export default PostList;
