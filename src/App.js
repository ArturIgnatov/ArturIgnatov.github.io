import React from 'react';
import { Route } from 'react-router-dom';
import OrderPage from './components/Order Page/OrderPage';
import StartPageContainer from './components/Start Page/StartPageContainer';
import PannelContainer from './components/Start Page/Pannel/PannelContainer';

const App = () => {
	return (
			<div className='app'>
				<PannelContainer />
				<Route exact path='/' component={StartPageContainer} />
				<Route path='/orderpage' component={OrderPage} />
			</div>
	)
}

export default App;
