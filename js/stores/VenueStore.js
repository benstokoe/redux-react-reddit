import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);

    this.venue = [];
  }

  onUpdateVenues(venue) {
    this.venue = venue;
  }
}

export default alt.createStore(VenueStore);
