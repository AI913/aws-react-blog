// import React, { Component } from "react";
// import FacebookLoginBtn from "react-facebook-login";

// export default class LoginFacebook extends Component {
//   state = {
//     auth: false,
//     name: "",
//     email: "",
//     picture: "",
//   };

//   componentClicked = () => {};

//   responseFacebook = (response) => {
//     if (response.stauts !== unknown)
//       this.setState({
//         auth: true,
//         name: response.name,
//         picture: response.picture.data.url,
//       });
//   };
//   render() {
//     let facebookData;

//     this.state.auth
//       ? (facebookData = <div></div>)
//       : (facebookData = (
//           <FacebookLoginBtn
//             appId="545072086192871"
//             autoLoad={true}
//             fields="name,email,picture"
//             onClick={this.componentClicked}
//             callback={this.responseFacebook}
//           />
//         ));
//   }
// return (
//             <>
//                 {facebookData}
//             </>
//         );
//     }
// }
