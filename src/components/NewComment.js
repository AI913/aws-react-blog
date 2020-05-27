import React from "react";
import {
  Form,
  Button,
  Input,
  Notification,
  Radio,
  Progress,
} from "element-react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../graphql/mutations";
import { UserContext } from "../App";

class NewComment extends React.Component {
  state = {
    content: "",
  };

  handleAddComment = async (user) => {
    try {
      const input = {
        content: this.state.content,
        author: user.username,
        commentPostId: this.props.postId,
      };
      const result = await API.graphql(
        graphqlOperation(createComment, { input })
      );
      console.log(result);
      this.setState({ content: "" });
      Notification({
        title: "Success",
        message: "Comment successfully created",
        type: "success",
      });
    } catch (err) {
      console.error("Error adding new comment", err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error adding comment"}`,
      });
    }
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <React.Fragment>
            <div className="flex-center">
              <div>
                <Form className="market-header">
                  <Form.Item label="Write Comment">
                    <Input
                      type="text"
                      placeholder="Comment here..."
                      onChange={(content) => this.setState({ content })}
                      value={this.state.content}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      disabled={!this.state.content}
                      onClick={() => this.handleAddComment(user)}
                    >
                      Add
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default NewComment;
