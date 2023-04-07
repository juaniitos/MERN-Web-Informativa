import React from "react";
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper }

const AnyReactComponent = ({text}) => <div>{text}</div>

const Maps = (props) => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent 
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>

        </div>
    )
}

export default Maps;