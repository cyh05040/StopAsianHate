import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../story.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoryScreen = () => {
    return (
        <div class="gradient-bg-color" id="story">
            {/* navbar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="storyNav">
                <div class="container">
                    <Link to={'/'}>
                        <a class="navbar-brand js-scroll-trigger">#STOPAAPIHATENYC</a>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to={'/'}><a class="nav-link" >Home</a></Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to={'/story'}><a class="nav-link">Story</a></Link>
                            </li> */}
                            {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#photo">Photo</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#news">News</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Report</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* disply title */}
            <div class="full-section d-flex align-items-center story-top-padding">
                <div class="container">
                    <div class="text-center">
                        <h1 class="display-1 story-h1">The Story of Kristy</h1>
                        <p>Meet Kristy, a Malaysian-Chinese girl, who comes to live in the States</p>
                        <img src="/img/arrow-down.svg" height="50" width="50"></img>
                    </div>
                </div>
            </div>

            <div class="full-section d-flex align-items-center img-padding">
                <div class="container">
                    <div class="text-center">
                        <h1 class="display-2 story-h1">2005</h1>
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
                                <h1 class="text-right story-h1">Kristy is an Asian immigrant.</h1>
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
                                <h1 class="story-h1">Kristy’s parents worked hard.</h1>
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
                    <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto img-padding">
                        <img class="img-fluid" src="/img/4.png" width="60%"/>
                    </div>
                    <div class="row  align-items-start">
                        <div class="col-md-6 col-sm-18 d-flex">
                            <h1 class="display-4 story-h1">This is racism because</h1>
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
                                <h1 class="story-h1">Kristy tries another interest</h1>
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
                        <div class="row d-flex justify-content-center">
                            <div class="col-8 text-left">
                                <p>
                                After work, Kristy’s mom would take her to the parking lot of a church near their apartment, so Kristy could practice rollerblading. Lots of other kids and their families would use the parking lot to practice rollerblading, skateboarding, and riding their bikes.
                                </p>
                            </div>
                            <div class="col-4 text-center">
                                <h1 class="story-h1">
                                    Rollerblading
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto img-padding">
                        <img class="img-fluid" src="/img/6.png" width="70%"/>
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
                    <div class="row align-items-start">
                        <div class="col-md-6 col-sm-18 d-flex">
                            <h1 class="display-4 story-h1">This is racism because</h1>
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

            <div class="full-section d-flex align-items-center img-padding">
                <div class="container">
                    <div class="text-center">
                        <h1 class="display-2 story-h1">2020</h1>
                    </div>
                </div>
            </div>

            {/* story 7 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="align-items-center">
                        <div class="d-flex justify-content-center">
                            <h2 class="col-6 text-center paragraph-padding">
                                As a member of the AAPI community, Kristy saw more and more incidents of racism after the start of the <u>coronavirus pandemic</u>.
                            </h2>
                        </div>
                        <div class="row text-left">
                            <div class="col-5 d-flex">
                                <p>
                                Now a college student, Kristy often went to a cafe near her apartment to work on her homework. She plopped her bag down on her usual bench and opened her laptop to start an essay for her Polish literature class.
                                </p>
                            </div>
                            <div class="col-6 d-flex ml-auto">
                                <p>
                                She noticed that the person sitting to her left moved to the other side of the room. And then the person sitting to her right. When she finally finished her essay, Kristy looked up and saw that the side of the coffee shop she was sitting on was completely empty.
                                </p>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto img-padding">
                            <img class="img-fluid" src="/img/7.png" width="70%"/>
                        </div>
                        <div class="text-left">
                            <p>
                            As people left and came into the coffee shop, she noticed that no one was sitting on the side of the room she was sitting in. Feeling awkward, Kristy packed up her stuff and left.
                            </p>
                            <p>
                            Through the windows, she saw a barista rush over to wipe down her table while the other customers flooded to take over that side of the room.
                            </p>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto img-padding">
                            <img class="img-fluid" src="/img/8.png" width="70%"/>
                        </div>
                        <div class="row align-items-start">
                            <div class="col-md-6 col-sm-18 d-flex">
                                <h1 class="display-4 story-h1">This is racism because</h1>
                            </div>
                            <div class="col-md-6 col-sm-18 d-flex">
                                <div class="text-left">
                                    <p>
                                    Looking Asian does not mean that you have COVID-19. There is no correlation between looks and having the virus. This is an example of ostracism, which just means ignoring and excluding people.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hr-text"/>

            {/* story 8 */}
            <div class="full-section d-flex align-items-center story-padding">
                <div class="container">
                    <div class="align-items-center">
                        <div class="text-left">
                            <p>
                            Lockdown orders came a couple days after, but after what happened at the coffee shop, Kristy did not feel like going out in public unless she needed to.
                            </p>
                            <p>But groceries only last so long. After a month of not leaving her apartment, she went to a grocery store to stock up on flour to make sourdough bread. Wearing a mask and gloves, she entered the bodega down the street, and noticed that all heads turned in her direction when she stepped into the store. 
                            </p>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-center ml-auto img-padding">
                            <img class="img-fluid" src="/img/9.png" width="70%"/>
                        </div>
                        <div class="text-left">
                            <p>
                            Most people hurried away, and Kristy tried to be sad about it, since everyone was scared of everyone else, but as she reached the aisle with baking supplies, a woman stepped into front her. Glaring at Kristy, the stranger yelled, “Get out of my way!” Not knowing how to respond, Kristy stood there in shock.
                            </p>
                            <p>The woman yelled again, “You don’t even speak English,” spit on the ground next to Kristy, and shoved Kristy out of her way. Kristy made eye contact with another shopper standing in the same aisle, but he quickly looked away and hurried over to check out. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                @import url("https://use.typekit.net/jyt8jsq.css");
            </style>
        </div>
    )
}

export default StoryScreen