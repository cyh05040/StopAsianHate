import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



const HomeScreen = () => {
    return (
        <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">#STOPAAPIHATENYC</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#story">Story</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#news">News</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Report</a></li>
                        <li class="nav-item">
                            <Link to={'/map'}><a class="nav-link" >Map</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">STOP THE HATE</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">#I Still Believe in our city</h2>
                    <a class="btn btn-secondary js-scroll-trigger" href="#story">Story of my life</a>
                </div>
            </div>
        </header>
        {/* <!-- Story--> */}
        <section class="about-section text-center" id="story">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Story</h2>
                        <p class="text-white-50">
                            nani nani nani nani nani naani nania nania nani 
                            <a href="https://nani.today/">the preview page</a>
                            .nani nani anani anani nanai nanaiananiananainaianianiana
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src="/img/background.png" alt="..." />
            </div>
        </section>
        {/* <!-- News--> */}
        <section class="projects-section bg-warning" id="news">
            <div class="container">
                {/* <!-- Featured News Row--> */}
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="/img/background.png" alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>NextShark</h4>
                            <p class="text-black-50 mb-0">Police Data Shows 150% Increase in Hate Attacks on Asians Across Major Cities</p>
                        </div>
                    </div>
                </div>
                {/* <!-- News One Row--> */}
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src="/img/background.png" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">NBC</h4>
                                    <p class="mb-0 text-white-50">Woman Charged With Hate Crime and Battery For Using Racial Slurs, Spitting on Asian</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src="/img/background.png" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">NEW YORK TIMES</h4>
                                    <p class="mb-0 text-white-50">Elderly Asian Man Left Brain Dead After Violent Robbery in Oakland</p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Sign Up--> */}
        <section class="signup-section" id="signup">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Recieve alerts around you</h2>
                        {/* <form class="form-inline d-flex">
                            <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                            <button class="btn btn-primary mx-auto" type="submit">Sign Up</button>
                        </form> */}
                        <SignInScreen />
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Donation--> */}
        <section class="contact-section bg-black" id="donate">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">EnoughIsEnough</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="https://givebutter.com/enoughisenough">https://givebutter.com/enoughisenough</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Stop AAPI Hate</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="https://donate.givedirect.org/?cid=14711">https://donate.givedirect.org/?cid=14711</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">AAPI Women Lead</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="https://www.imreadymovement.org/donate">https://www.imreadymovement.org/donate</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="footer bg-black small text-center text-white-50"><div class="container">Copyright &copy; #STOPAAPIHATENYC 2021</div></footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    </body>

    )
}

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
   

class Incident extends React.Component {
    state = {
      incident: null
    }
  
    async componentDidMount() {
      const idToken = await firebase.auth().currentUser?.getIdToken()
      console.log(idToken)
      const response = await fetch('http://localhost:4000/dev/incident', {
        headers: {
          'Authorization': idToken
        }
      })
      if (response.status === 401){
        return console.log('unauthorized')
      }
  
      const data = await response.json()
      // save it to your components state so you can use it during render
      this.setState({incident:data})
      console.log(this.state.incident)
    }
  
    render() {
      return (
        <div>
          <ul>
          {
            this.state.incident && this.state.incident.map(incident => {
              return (
                <li>
                  <br/>
                  <div class="text-white-50">Location: {incident.neighborhood}</div>
                  <div class="text-white-50">Description: {incident.description}</div>
                  <div class="text-white-50">Type: {incident.type}</div>
                  <img class="img-fluid" src={incident.img} alt="..." />
                </li>
              )
            })
          }
          </ul>
        </div>
      )
    }
  };
  

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
          <p class="text-white-50">Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <p class="text-white-50">Your email is {firebase.auth().currentUser.email}</p>
          <p class="text-white-50">Your token is {this.state.data}</p>
          <button onClick={() => firebase.auth().signOut()} class="btn btn-secondary mx-auto" type="submit">
            <a>Sign-out</a>
          </button>
          <Incident />
        </div>
      );
    }
  }
  



export default HomeScreen
