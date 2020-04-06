import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPageContainer from './components/Start Page/StartPageContainer';
import PannelContainer from './components/Start Page/Pannel/PannelContainer';
import OrderPageConteiner from './components/Order Page/OrderPageContainer';

const App = () => {
	return (
			<div className='app'>
				<PannelContainer />
				<Switch>
					<Route exact path='/' component={StartPageContainer} />
					<Route path='/orderpage' component={OrderPageConteiner} />
				</Switch>
			</div>
	)
}

export default App;
