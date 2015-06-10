import LocationActions from '../actions/LocationActions';

const GeolocationUtils = {

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                LocationActions.updateLocation(position);
            });
        }
    }

}

export default GeolocationUtils;
