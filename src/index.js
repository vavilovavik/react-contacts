import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Add from './components/Add';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

ReactDOM.render(
	<Router>
		<Route exact path="/" component={App} />
		<Route exact path="/add" component={Add} />
	</Router>, 
	document.getElementById('root')
);
