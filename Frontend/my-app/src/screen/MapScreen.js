import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

import Marker from '../components/Marker';
import GoogleMap from '../components/GoogleMap';

// const Markers = myData.map( (data) => {
//     return (
//         <Marker
//             lat={data.lat}
//             lng={data.lng}
//             text={data.Title}
//         />
//     )
// });

const getInfoWindowString = (place) => `
    <div>
        <div style="font-size: 14px;">
            <a href=${[place.Url]}>
            ${place.Title}
            </a>
        </div>
        </div>
        <div style="font-size: 12px; color: grey;">
            ${place.Date}
            <br />
            ${place.Type}
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
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
        infowindows[i].open(map, marker);
        });
    });
};


class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
        };
    }

    componentDidMount() {
        fetch('nextshark_data.json')
            .then((response) => response.json())
            .then((data) => {
                // data.forEach((result) => {
                //     result.show = false; // eslint-disable-line no-param-reassign
                // });
                this.setState({ places: data });
            });
    }
    

    render() {
        const { places } = this.state;
        return (
        // Important! Always set the container height explicitly
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
            <div style={{ height: '95vh', width: '100%' }}>
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
