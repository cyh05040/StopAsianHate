import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

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


function App() {
  const LogIn = new SignInScreen();
  return ( 
    <div className="App">
      <div class="tabs is-large">
        <ul>
          <li><a>Map</a></li>
          <li><a>Alert</a></li>
          <li><a>Stories</a></li>
          <li><a>Help</a></li>
        </ul>
      </div>
      
      <div className="App-header">
        <div>You are not alone.</div>
        <div>Stop AAPI Hate!</div>
        <SignInScreen />

      
      </div>
      
    </div>
  );
}

export default App;
