import React from "react";
import { render } from "@testing-library/react";
import { container } from "aws-amplify";
import { distanceInWordsToNow } from "date-fns";
import {
  Notification,
  Popover,
  Button,
  Dialog,
  Card,
  Form,
  Input,
  Radio,
} from "element-react";

class Comment extends React.Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="card-container">
        <Card bodyStyle={{ padding: 0, minWidth: "200px" }}>
          <div className="card-body">
            <h3 className="m-0">{comment.author}</h3> @
            {distanceInWordsToNow(comment.createdAt)}
          </div>
          <div className="text-center">
            <span className="mx-1">{comment.content}</span>
          </div>
        </Card>
      </div>
    );
  }
}

export default Comment;
