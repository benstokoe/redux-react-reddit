import request from 'superagent';
import VenueActions from '../actions/VenueActions';

const VenueUtils = {
  url: 'http://localhost:3001/api/venues',

  getVenue() {
    request
      .get(this.url)
      .end(function(err, res) {
        console.log(err);
        console.log(res);
        VenueActions.updateVenues(res.body);
      });
  }
};

export default VenueUtils;
