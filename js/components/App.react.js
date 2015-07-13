import React from 'react';
import { GoogleMaps, Marker } from 'react-google-maps';
import FoursquareUtils from '../utils/FoursquareUtils';
import VenueUtils from '../utils/VenueUtils';
import LocationStore from '../stores/LocationStore';
import FoursquareStore from '../stores/FoursquareStore';
import VenueStore from '../stores/VenueStore';
import VenueSidebar from './VenueSidebar.react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    const position = LocationStore.getState().position;
    this.state = {
      position: {
        lat: position.lat,
        lng: position.lng,
      },
      venues: FoursquareStore.getState().venues,
      venue: VenueStore.getState().venue
    }
  }

  componentDidMount() {
    LocationStore.listen(this._onChange);
    FoursquareStore.listen(this._onChange);
    VenueStore.listen(this._onChange);

    FoursquareUtils.getVenues(0,0);
    VenueUtils.getVenue();
  }

  componentWillUnmount() {
    LocationStore.unlisten(this._onChange);
    FoursquareStore.unlisten(this._onChange);
    VenueStore.unlisten(this._onChange);
  }

  render() {
    const { props, state } = this;
    const { googleMapsApi } = props;
    const { position } = state;

    console.log(state);
    //<div id="venue-map">
      //<GoogleMaps containerProps={{
        //style: {
          //height: '100%',
          //width: '100%'
          //},
        //}}
        //ref='map'
        //googleMapsApi={google.maps}
        //zoom={15}
        //center={{lat: position.lat, lng: position.lng}}
        //onCenterChanged={this._handleCenterChanged.bind(this)}>
        //{ state.venues.map(toMarker, this) }
        //</GoogleMaps>
      //</div>

    return (
      <div id="venue-view">
        <VenueSidebar venues={ state.venues } />
      </div>
    )

    function toMarker (marker, index) {
      return (
        <Marker
          position={ marker.venue.location }
          key={ marker.venue.id }
        />
      );
    }
  }

  _handleCenterChanged() {
    const center = this.refs.map.getCenter();
    if (!center.equals(this.state.center)) {
      //console.log(center);
    }
  }

  _onChange() {
    const position = LocationStore.getState().position;

    this.setState({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      venues: FoursquareStore.getState().venues,
      venue: VenueStore.getState().venue
    });
  }
}

export default App;
