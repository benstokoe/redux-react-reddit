import request from 'superagent';
import VenueActions from '../actions/VenueActions';

const FoursquareUtils = {
    url: 'https://api.foursquare.com/v2/venues/explore',

    getVenues(lat, lng) {
        request
            .get(this.url)
            .query({
                client_id: 'E2UK33W3ZOW1LKTPLUD3XGKAM0BRTAFXCTBYBAQHGVPNYK1P',
                client_secret: 'ZQ5E1JXCGJAS4XNH2JSL532PCFO4H40LBDVKTRKPSLZKV1FP',
                v: '20150613',
                ll: '51.491, -0.299',
                limit: 50,
                radius: 900,
                venuePhotos: 1
            })
            .end(function(err, res) {
                VenueActions.updateVenues(res.body.response.groups[0].items);
            });
    }

};

export default FoursquareUtils;
