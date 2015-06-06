import React from 'react';
import { GoogleMaps } from "react-google-maps";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: {
                lat: 51.490839799999996,
                lng: -0.29986670000000004,
            }
        }
    }

    render() {
        const { props, state } = this;
        const { googleMapsApi } = props;
        const { position } = state;

        return (
            <GoogleMaps containerProps={{
                    style: {
                        height: "1000px",
                        width: "1000px"
                    },
                }}
                ref="map"
                googleMapsApi={google.maps}
                zoom={15}
                center={{lat: position.lat, lng: position.lng}}
                onCenterChanged={this._handleCenterChanged.bind(this)}
            />
        )
    }

    _handleCenterChanged() {
        const center = this.refs.map.getCenter();
        if (!center.equals(this.state.center)) {
            //console.log(center);
        }
    }
}

export default App;
