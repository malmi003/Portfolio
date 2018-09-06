import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import axios from "axios";

const style = {
    // width: '80%',
    height: "400px",
    // maxHeight: '400px',
    position: "static !important",
    'marginTop': '2rem',
    'marginBottom': '2rem',
}
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        };
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{
                    lat: 44.998724,
                    lng: -93.257541
                }}
                onClick={this.onMapClicked}
                style={style}
            >
                <Marker
                    title={"This is where I call home, but I travel too!"}
                    onClick={this.onMarkerClick}
                    name={'NE Minneapolis, MN'}
                    icon={{
                        url: "/images/location-pin.png",
                        anchor: new window.google.maps.Point(32, 32),
                        scaledSize: new window.google.maps.Size(64, 64)
                    }}
                    position={{ lat: 44.998724, lng: -93.257541 }}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey,
      key: props.key
    }
  ))(MapContainer)