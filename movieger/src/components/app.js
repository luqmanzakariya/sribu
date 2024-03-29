import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Search from '../routes/search';

// Redux
import {Provider} from 'preact-redux';
import store from '../store/index'

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Search path="/search/:id"/>
						{/* <Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" /> */}
					</Router>
				</div>
			</Provider>
		);
	}
}
