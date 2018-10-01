import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Add from './components/Add';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-dom';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={App} />
			<Route path='add' component={Add} />
		</Route>
	</Router>, 
	document.getElementById('root')
);
