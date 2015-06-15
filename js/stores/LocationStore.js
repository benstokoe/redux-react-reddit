import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
    constructor() {
        this.bindActions(LocationActions);

        this.position = {
            lat: 0,
            lng: 0
        }
    }

    onUpdateLocation(position) {
        const coords = position.coords;

        this.position = {
            lat: coords.latitude,
            lng: coords.longitude
        };
    }
}

export default alt.createStore(LocationStore);
