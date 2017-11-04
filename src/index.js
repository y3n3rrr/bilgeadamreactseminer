import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appState from './AppState/AppState'

ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
registerServiceWorker();
