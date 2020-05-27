import React from "react";
import { Auth, Hub } from "aws-amplify";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import PostDetailPage from "./pages/PostDetailPage";
import FBSignInButton from "./components/FBSignInBtn";
import "./App.css";

export const UserContext = React.createContext();

class App extends React.Component {
  state = {
    user: null,
    userAttributes: null,
  };

  componentDidMount() {
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user
      ? this.setState({ user }, () => this.getUserAttributes(this.state.user))
      : this.setState({ user: null });
  };

  getUserAttributes = async (authUserData) => {
    const attributesArr = await Auth.userAttributes(authUserData);
    const attributesObj = Auth.attributesToObject(attributesArr);
    this.setState({ userAttributes: attributesObj });
  };

  onHubCapsule = (capsule) => {
    switch (capsule.payload.event) {
      case "signIn":
        this.getUserData();
        break;
      case "signUp":
        break;
      case "signOut":
        this.setState({ user: null });
        break;
      default:
        return;
    }
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {}
  };
  render() {
    const { user, userAttributes } = this.state;

    return !user ? (
      <Authenticator theme={theme} />
    ) : (
      // <FBSignInButton />
      <UserContext.Provider value={{ user }}>
        <Router>
          <React.Fragment>
            {/* Navbar */}
            <Navbar user={user} handleSignout={this.handleSignout} />
            {/* Routes */}
            <div className="app-container">
              <Route exact path="/" component={HomePage} />
              <Route
                path="/profile"
                component={() => (
                  <ProfilePage user={user} userAttributes={userAttributes} />
                )}
              />
              <Route
                path="/postdetail/:postId"
                component={({ match }) => (
                  <PostDetailPage user={user} postId={match.params.postId} />
                )}
              />
            </div>
          </React.Fragment>
        </Router>
      </UserContext.Provider>
    );
  }
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#ffc0cb",
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--amazonOrange)",
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px",
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "var(--squidInk)",
  },
};

export default App;
