import React from 'react';
import App from './components/App.react';

import GeolocationUtils from './utils/GeolocationUtils';

GeolocationUtils.getLocation();

React.render(
    <App />,
    document.getElementById('app')
)
