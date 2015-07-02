import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id       : String,
    language : String,
    rating   : Integer
});

schema.statics.getVenue = function(venueId, language, callback) {

    console.log('hey');

    //Venue.find({}, 'rating').exec(function(err, doc) {
        
        //if (!err) {
            //venue = doc;
        //}

        //callback(venue);
    //});

};

export default Venue = mongoose.model('Venue', schema);
