import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
    constructor() {
        this.bindActions(VenueActions);

        this.venues = [];
    }

    onUpdateVenues(venues) {
        this.venues = venues;
    }
}

export default alt.createStore(VenueStore);
