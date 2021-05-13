import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import GoogleMap from '../components/GoogleMap';
import places from '../nextshark_data.json'

const types_discrimination = {
	VERBAL: "Verbal Harassment/Name Calling",
	PHYSICAL: "Physical Assault",
	COUGH: "Coughed At/Spat Upon"
}


const getInfoWindowString = (place) => `
    <div>
        <div style="font-size: small;" id="info-title">
            <a href=${[place.Url]}>${place.Title}</a>
        </div>
        <br />
        <div style="font-size: x-small; color: grey;">
            <div id="info-date">${place.Date}</div>
            <div id="info-type">Type of Discrimination: ${types_discrimination[place.Type]}</div>
        </div>
    </div>`;


const apiIsLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lng,
            },
            map,
    }));

    infowindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
            maxWidth: 400,
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
            for (var j = 0; j < infowindows.length; j++ ) {
                infowindows[j].close();
            }
            infowindows[i].open(map, marker);
        });
    });
};


class SimpleMap extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     places: [],
        // };
    }

    // componentDidMount() {
    //     fetch('nextshark_data.json')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({ places: data });
    //         });
    // }
    

    render() {
        // const { places } = this.state;
        return (
        // Important! Always set the container height explicitly
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{   backgroundColor: '#0d3151', }}id="mainNav">
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
            <div id="map" style={{ height: '95%', width: '100%',   
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute', 
                                bottom: 0, }}>
                <GoogleMap
                    defaultZoom={11}
                    defaultCenter={[40.712775,-74.005973]}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
                />
            </div>
        </div>
        );
    }
}

const MapScreen = () => {
    return (
        <div>
            <SimpleMap />
        </div>
    )
}

export default MapScreen
