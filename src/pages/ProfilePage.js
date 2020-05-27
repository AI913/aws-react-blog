import React from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import {
  Tag,
  Button,
  Tabs,
  Icon,
  Table,
  Dialog,
  Form,
  Message,
  Notification,
  Input,
} from "element-react";

class ProfilePage extends React.Component {
  state = {
    email: this.props.userAttributes && this.props.userAttributes.email,
    emailDialog: false,
    verificationCode: "",
    verificationForm: false,
    columns: [
      { prop: "name", width: "150" },
      { prop: "value", width: "350" },
      {
        prop: "tag",
        width: "150",
        render: (row) => {
          if (row.name === "Email") {
            const emailVerified = this.props.userAttributes.email_verified;
            return emailVerified ? (
              <Tag type="success">Verified</Tag>
            ) : (
              <Tag type="danger">Unverified</Tag>
            );
          }
        },
      },
      {
        prop: "operations",
        render: (row) => {
          switch (row.name) {
            case "Email":
              return (
                <Button
                  onClick={() => this.setState({ emailDialog: true })}
                  type="info"
                  size="small"
                >
                  Edit
                </Button>
              );
            case "Delete Profile":
              return (
                <Button type="danger" size="small">
                  Delete
                </Button>
              );
            default:
              return;
          }
        },
      },
    ],
  };

  handleUpdateEmail = async () => {
    try {
      const updatedAttributes = {
        email: this.state.email,
      };
      const result = await Auth.updateUserAttributes(
        this.props.user,
        updatedAttributes
      );
      if (result === "SUCCESS") {
        this.sendVerificationCode("email");
      }
    } catch (err) {
      console.error(err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error updating email"}`,
      });
    }
  };

  sendVerificationCode = async (attr) => {
    await Auth.verifyCurrentUserAttribute(attr);
    this.setState({ verificationForm: true });
    Message({
      type: "info",
      customClass: "message",
      message: `Verification code sent to ${this.state.email}`,
    });
  };

  handleVerifyEmail = async (attr) => {
    try {
      const result = await Auth.verifyCurrentUserAttributeSubmit(
        attr,
        this.state.verificationCode
      );
      Notification({
        title: "Success",
        message: "Email successfully verified",
        type: `${result.toLowerCase()}`,
      });
      setTimeout(() => window.location.reload(), 3000);
    } catch (err) {
      console.error(err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error updating email"}`,
      });
    }
  };

  render() {
    const {
      columns,
      email,
      emailDialog,
      verificationCode,
      verificationForm,
    } = this.state;
    const { user, userAttributes } = this.props;
    return (
      userAttributes && (
        <React.Fragment>
          <Tabs activeName="1" className="profile-tabs">
            <Tabs.Pane
              label={
                <React.Fragment>
                  <Icon name="document" className="icon" />
                  Summary
                </React.Fragment>
              }
              name="1"
            >
              <h2 className="header">Profile Summary</h2>
              <Table
                columns={columns}
                data={[
                  {
                    name: "Your ID",
                    value: userAttributes.sub,
                  },
                  {
                    name: "Username",
                    value: user.username,
                  },
                  {
                    name: "Email",
                    value: userAttributes.email,
                  },
                  {
                    name: "Phone Number",
                    value: userAttributes.phone_number,
                  },
                  {
                    name: "Delete Profile",
                    value: "Sorry to see you go",
                  },
                ]}
                showHeader={false}
                rowClassName={(row) =>
                  row.name === "Delete Profile" && "delete-profile"
                }
              />
            </Tabs.Pane>
          </Tabs>
          {/* Email Dialog */}
          <Dialog
            size="large"
            customClass="dialog"
            title="Edit Email"
            visible={emailDialog}
            onCancel={() => this.setState({ emailDialog: false })}
          >
            <Dialog.Body>
              <Form labelPosition="top">
                <Form.Item label="Email">
                  <Input
                    value={email}
                    onChange={(email) => this.setState({ email })}
                  />
                </Form.Item>
                {verificationForm && (
                  <Form.Item lable="Enter Verification Code" labelWidth="120">
                    <Input
                      onChange={(verificationCode) =>
                        this.setState({ verificationCode })
                      }
                      value={verificationCode}
                    />
                  </Form.Item>
                )}
              </Form>
            </Dialog.Body>
            <Dialog.Footer>
              <Button onClick={() => this.setState({ emailDialog: false })}>
                Cancel
              </Button>
              {!verificationForm && (
                <Button type="primary" onClick={this.handleUpdateEmail}>
                  Save
                </Button>
              )}
              {verificationForm && (
                <Button
                  type="primary"
                  onClick={() => this.handleVerifyEmail("email")}
                >
                  Submit
                </Button>
              )}
            </Dialog.Footer>
          </Dialog>
        </React.Fragment>
      )
    );
  }
}

export default ProfilePage;
