import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

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
        <div style={{ height: '93vh', width: '100%' }}>
            <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >

            </GoogleMapReact>
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
