import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

class SimpleMap extends Component {
    static defaultProps = {
        center: {
        lat: 59.95,
        lng: 30.33
        },
        zoom: 11
    };

    render() {
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
            <div style={{ height: '93vh', width: '100%' }}>
                <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >

                </GoogleMapReact>
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
