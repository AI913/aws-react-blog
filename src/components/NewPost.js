import React from "react";
import { Storage, Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { PhotoPicker } from "aws-amplify-react";
import { createPost } from "../graphql/mutations";
import { Form, Button, Dialog, Input, Notification } from "element-react";
import aws_exports from "../aws-exports";
import { UserContext } from "../App";

const initialState = {
  title: "",
  content: "",
  image: "",
  imagePreview: "",
  addPostDialog: false,
  isUploading: false,
};

class NewPost extends React.Component {
  state = { ...initialState };

  handleAddPost = async (user) => {
    console.log(this.state);
    if (this.state.image !== "") {
      try {
        this.setState({ addPostDialog: false });
        this.setState({ isUploading: true });
        const { identityId } = await Auth.currentCredentials();
        const filename = `/$(visibility)/${identityId}/${Date.now()}-${
          this.state.image.name
        }`;
        const uploadedFile = await Storage.put(
          filename,
          this.state.image.file,
          {
            contentType: this.state.image.type,
          }
        );
        const file = {
          key: uploadedFile.key,
          bucket: aws_exports.aws_user_files_s3_bucket,
          region: aws_exports.aws_project_region,
        };
        const input = {
          title: this.state.title,
          content: this.state.content,
          author: user.username,
          file,
        };
        const result = await API.graphql(
          graphqlOperation(createPost, { input })
        );
        this.setState({ ...initialState });
        console.info(
          `Create post with a picture: id ${result.data.createPost.id}`
        );
        Notification({
          title: "Success",
          message: "Post successfully created with an image",
          type: "success",
        });
      } catch (err) {
        Notification.error({
          title: "Error",
          message: `#{err.message || "Error adding post with an image"}`,
        });
      }
    } else {
      try {
        this.setState({ addPostDialog: false });
        this.setState({ isUploading: true });
        const input = {
          title: this.state.title,
          content: this.state.content,
          author: user.username,
        };
        const result = await API.graphql(
          graphqlOperation(createPost, { input })
        );
        this.setState({ ...initialState });
        console.info(`Create post: id ${result.data.createPost.id}`);
        Notification({
          title: "Success",
          message: "Post successfully created",
          type: "success",
        });
      } catch (err) {
        Notification.error({
          title: "Error",
          message: `#{err.message || "Error adding post"}`,
        });
      }
    }
  };

  render() {
    const { title, content, image, imagePreview, isUploading } = this.state;
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <React.Fragment>
            <div className="market-header">
              <h1 className="market-title">
                Write a new post
                <Button
                  type="text"
                  icon="edit"
                  className="market-title-button"
                  onClick={() => this.setState({ addPostDialog: true })}
                />
              </h1>
            </div>
            <Dialog
              title="Write New Post"
              visible={this.state.addPostDialog}
              onCancel={() => this.setState({ addPostDialog: false })}
              size="large"
              customClass="dialog"
            >
              <Dialog.Body>
                <Form labelPosition="top">
                  <Form.Item lable="Add Post">
                    <Input
                      placeholder="Title"
                      trim={true}
                      onChange={(title) => this.setState({ title })}
                      value={this.state.title}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder="Content"
                      style={{
                        width: "100%",
                      }}
                      onChange={(content) => this.setState({ content })}
                      value={this.state.content}
                    />
                  </Form.Item>
                  {imagePreview && (
                    <img
                      className="image-preview"
                      src={imagePreview}
                      alt="PostPreview"
                    />
                  )}
                  <PhotoPicker
                    title="Post Image"
                    preview="hidden"
                    onLoad={(url) => this.setState({ imagePreview: url })}
                    onPick={(file) => this.setState({ image: file })}
                    theme={{
                      formContainer: { margin: 0, padding: "0.8em" },
                      formSection: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      sectionHeader: {
                        padding: "0.2em",
                        color: "var(--darkAmazonOrange)",
                      },
                      sectionBody: {
                        margin: 0,
                        width: "250px",
                      },
                    }}
                  />
                </Form>
              </Dialog.Body>
              <Dialog.Footer>
                <Button onClick={() => this.setState({ addPostDialog: false })}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  disabled={!title || !content || isUploading}
                  onClick={() => this.handleAddPost(user)}
                  loading={isUploading}
                >
                  {isUploading ? "Posting..." : "Post"}
                </Button>
              </Dialog.Footer>
            </Dialog>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}
export default NewPost;
