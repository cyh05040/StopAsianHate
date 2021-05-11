import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../story.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoryScreen = () => {
    return (
        <div class="gradient-bg-color">
            <style>
                @import url("https://use.typekit.net/jyt8jsq.css");
            </style>
            {/* navbar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="storyNav">
                <div class="container">
                    <Link to={'/'}>
                        <a class="navbar-brand js-scroll-trigger">#STOPAAPIHATENYC</a>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to={'/map'}><a class="nav-link" >Map</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/story'}><a class="nav-link">Story</a></Link>
                            </li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#photo">Photo</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#news">News</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Report</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* disply title */}
            <div class="full-section d-flex align-items-center">
                <div class="container">
                    <div class="text-center" id="story-top-padding">
                        <div>
                            <h1 class="display-1">The Story of Kristy</h1>
                            <p>Meet Kristy, a Malaysian-Chinese girl, who comes to live in the States</p>
                            <img src="/img/arrow-down.svg" height="50" width="50"></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* story 1 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-18 d-flex align-items-center">
                            <div class="text-left">
                                <p>
                                Kristy was born in Malaysia, but came to Ohio with her parents when she was five years old.
                                </p>
                                <p>
                                Her birth name was Sock-Hui, but when she and her family immigrated to the USA, her parents feared that her name would make her stand out and chose the name Kristy.
                                </p>
                                <h1 class="text-right">Kristy is an Asian immigrant.</h1>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-18 d-flex ml-auto">
                            <img class="img-fluid" src="/img/1.png" />
                        </div>
                    </div>
                </div>
            </div>
            {/* story 2 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-18 d-flex mr-auto">
                            <img class="img-fluid" src="/img/2.png" />
                        </div>
                        <div class="col-md-6 col-sm-18 d-flex align-items-center">
                            <div class="text-left">
                                <p>
                                Kristy’s dad was a lawyer back in Malaysia but his degree was not accepted in the US, so he could only work in minimum wage jobs like waiter and store clerk.
                                </p>
                                <p>
                                Her mom had a college degree, but could not speak any English, so she could only work in jobs that she did not need to speak in, so she ended up working in a factory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* story 3 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-18 d-flex align-items-center">
                            <div class="text-left">
                                <h1>Kristy’s parents worked hard.</h1>
                                <p class="text-right">
                                During the night, Kristy’s parents would sit over the dining room table and study English using Kristy’s textbooks and free magazines.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-18 d-flex ml-auto">
                            <img class="img-fluid" src="/img/3.png" width="90%"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* story 4 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="align-items-center">
                        <div class="text-left">
                            <p>
                            After watching the Olympics on TV, Kristy really wanted to try gymnastics and begged her parents to let her enroll. To pay for her classes, her dad worked extra shifts and saved up money.
                            </p>
                            <p>
                            Kristy’s mom called and called the local gymnastics center to try to enroll her in class. But when Kristy’s mom was finally able to speak to the owner, he said that <u>her name sounds Asian</u> so <u>he would not allow Kristy into his gym.</u>
                            </p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto">
                        <img class="img-fluid img-padding" src="/img/4.png" width="50%"/>
                    </div>
                    <div class="row  align-items-start">
                        <div class="col-md-6 col-sm-18 d-flex">
                            <h1 class="display-4">This is racism because</h1>
                        </div>
                        <div class="col-md-6 col-sm-18 d-flex">
                            <div class="text-left">
                                <p>
                                For afterschool activities like gymnastics, everyone should be allowed to join regardless of their background, and it is not fair to exclude someone based on their suspected race.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="hr-text"/>

            {/* story 5 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-18 d-flex mr-auto">
                            <img class="img-fluid" src="/img/5.png" />
                        </div>
                        <div class="col-md-6 col-sm-18 d-flex align-items-center">
                            <div class="text-left">
                                <h1>Kristy tries another interest</h1>
                                <p>
                                Kristy’s mom wanted to protect her daughter and did not tell Kristy why she could not start gymnastics, but encouraged her to try roller blading, since she could learn on her own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* story 6 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="align-items-center">
                        <div class="text-left">
                            <p>
                            After work, Kristy’s mom would take her to the parking lot of a church near their apartment, so Kristy could practice rollerblading. Lots of other kids and their families would use the parking lot to practice rollerblading, skateboarding, and riding their bikes.
                            </p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto">
                        <img class="img-fluid img-padding" src="/img/6.png" width="80%"/>
                    </div>
                    <div class="align-items-center">
                        <div class="text-left paragraph-padding">
                            <p>
                            Next to a church was a preschool. One day, when it was just Kristy and her mom hanging out in the parking lot, the director of the preschool came out and started taking pictures of Kristy and her mom. The director shouted, “Get out of here! I’m going to call the police if you don’t leave this area! 
                            </p>
                            <p>
                            Scared and not wanting to make trouble, Kristy’s mom quickly grabbed Kristy and left.
                            </p>
                        </div>
                    </div>
                    <div class="row  align-items-start">
                        <div class="col-md-6 col-sm-18 d-flex">
                            <h1 class="display-4">This is racism because</h1>
                        </div>
                        <div class="col-md-6 col-sm-18 d-flex">
                            <div class="text-left">
                                <ul>
                                    <li>
                                    Other people had been there before, and the director had never yelled at them or threatened to call the police before.
                                    </li>
                                    <li>
                                    Everyone should be allowed to use public places like parking lots, malls, grocery stores, parks, and more. If you do not own the space, you can’t tell people whether they can use it or not.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="hr-text"/>

        </div>
    )
}

export default StoryScreen