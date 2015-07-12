import alt from '../alt';
import FoursquareActions from '../actions/FoursquareActions';

class FoursquareStore {
    constructor() {
        this.bindActions(FoursquareActions);

        this.venues = [];
    }

    onUpdateVenues(venues) {
        this.venues = venues;
    }
}

export default alt.createStore(FoursquareStore);
