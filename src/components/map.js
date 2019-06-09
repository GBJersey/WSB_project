import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import avatar from './../avatar-2.png';

const MarkerReactComponent = ({ text }) => <div><img src={avatar} alt={text} className="map-marker" />{text}</div>;

class Map extends Component {

    static defaultProps = {
        center: {
            lat: 51.1070477,
            lng: 17.0352641
        },
        zoom: 11
    };
    render() {
        return (
            <div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDTNW406mwNopa6jnXDdq84nLiohAicxT0' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <MarkerReactComponent
                            lat={51.1070477}
                            lng={17.0352641}
                            text="GisMan"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Map;

