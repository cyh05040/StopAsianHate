import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoryScreen = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                    <Link to={'/'}>
                        <a class="navbar-brand js-scroll-trigger">#STOPAAPIHATENYC</a>
                    </Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to={'/'}><a class="nav-link" >Home</a></Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to={'/about'}><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/about'}><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></Link>
                            </li> */}
                            {/* <li class="nav-item">
                                <Link to={'/map'}><a class="nav-link" >Map</a></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 1.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 2.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 3.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 4.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 5.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 6.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 7.png" alt="..." /></div>
                <div class="col-xl-8 col-lg-7"><img class="img-fluid" src="/img/Untitled_Artwork 8.png" alt="..." /></div>
            </div>
        </div>
    )
}

export default StoryScreen