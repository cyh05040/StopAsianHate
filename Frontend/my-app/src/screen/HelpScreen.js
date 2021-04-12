import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


class HelpResource extends React.Component {
    state = {
      help: null
    }
  
    async componentDidMount() {
      const idToken = await firebase.auth().currentuser?.getIdToken()
      const response = await fetch('http://localhost:4000/dev/help', {
        headers: {
          'Authorization': idToken
        }
      })
      if (response.status === 401){
        return console.log('unauthorized')
      }
  
      const data = await response.json()
      // save it to your components state so you can use it during render
      this.setState({help:data})
      console.log(this.state.help)
    }
  
    render() {
      return (
        <div>
          <div className="title">Help Section</div>
          <ul>
          {
            this.state.help && this.state.help.map(help => {
              return (
                <li>
                  <div>{help.organization}</div>
                  <div>{help.description}</div>
                </li>
              )
            })
          }
          </ul>
        </div>
      )
    }
  };
  
  // Configure Firebase.
const config = {
    apiKey: "AIzaSyCPwnhzY6WQwb14b9kRNUidRh5npmslpTo",
    authDomain: "stopasianhate-8eeee.firebaseapp.com",
    projectId: "stopasianhate-8eeee",
    storageBucket: "stopasianhate-8eeee.appspot.com",
    messagingSenderId: "131938165564",
    appId: "1:131938165564:web:7e8b3d00d87cd85820b439",
    measurementId: "G-PTZSVBQ7CB"
  };
  firebase.initializeApp(config);
   
class SignInScreen extends React.Component {
    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };
   
    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
  
    }
  
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
   
    render() {
      if (!this.state.isSignedIn) {
        return (
          <div>
            <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        );
      }
      return (
        <div>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <p>Your email is {firebase.auth().currentUser.email}</p>
          <p>Your token is {this.state.data}</p>
  
  
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </div>
      );
    }
  }
  

const HelpScreen = () => {
    return (
        <div>
            <SignInScreen />
            <HelpResource />
        </div>
    )
}

export default HelpScreen