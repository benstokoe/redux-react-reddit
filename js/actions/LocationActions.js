import alt from '../alt';

class LocationActions {
    constructor() {
        this.generateActions(
            'updateLocation'
        )
    }
}

export default alt.createActions(LocationActions);
