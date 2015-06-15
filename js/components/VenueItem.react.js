import React from 'react';

class VenueItem extends React.Component {
    render() {
        const { venue } = this.props;
        const venueInfo = venue.venue;

        return (
            <li>
                <p>{ venueInfo.name }</p>
            </li>
        );
    }
}

export default VenueItem;
