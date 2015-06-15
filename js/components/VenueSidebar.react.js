import React from 'react';
import VenueItem from './VenueItem.react';

class VenueSidebar extends React.Component {
    render() {
        const { venues } = this.props;

        const venueItems = [];

        if (Object.keys(venues).length > 0) {
            venues.map(function(venue) {
                venueItems.push(<VenueItem venue={ venue } />);
            });
        }

        return (
            <div id="venue-sidebar">
                <h1>Do They Speak English?</h1>

                <ul>
                    { venueItems }
                </ul>
            </div>
        )
    }
}

export default VenueSidebar;
