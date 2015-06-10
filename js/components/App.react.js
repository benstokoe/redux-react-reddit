import React from 'react';
import { GoogleMaps } from 'react-google-maps';
import LocationStore from '../stores/LocationStore';

class App extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);

        const position = LocationStore.getState().position;
        this.state = {
            position: {
                lat: position.lat,
                lng: position.lng,
            }
        }
    }

    componentDidMount() {
        LocationStore.listen(this._onChange);
    }

    componentWillUnmount() {
        LocationStore.unlisten(this._onChange);
    }

    render() {
        const { props, state } = this;
        const { googleMapsApi } = props;
        const { position } = state;

        return (
            <GoogleMaps containerProps={{
                    style: {
                        height: '1000px',
                        width: '1000px'
                    },
                }}
                ref='map'
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

    _onChange() {
        const position = LocationStore.getState().position;

        console.log(position);

        this.setState({
            position: {
                lat: position.lat,
                lng: position.lng
            }
        });
    }
}

export default App;
