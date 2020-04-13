import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPageContainer from './components/Start Page/StartPageContainer';
import PannelContainer from './components/Start Page/Pannel/PannelContainer';
import OrderPageConteiner from './components/Order Page/OrderPageContainer';
import AdminPage from './pages/admin-page/AdminPage';
import Login from './pages/admin-page/Login/Login';

const App = () => {
	return (
			<div className='app'>
				<Route path='/docs' component={PannelContainer} />
				<Switch>
					<Route exact path='/docs' component={StartPageContainer} />
					<Route path='/docs/orderpage' component={OrderPageConteiner} />
					<Route path='/adminpage' component={AdminPage} />
					<Route path='/login' component={Login} />
				</Switch>
			</div>
	)
}

export default App;
