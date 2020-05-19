import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPageContainer from './components/Start Page/StartPageContainer';
import PannelContainer from './components/Start Page/Pannel/PannelContainer';
import OrderPageConteiner from './components/Order Page/OrderPageContainer';
import AdminPage from './pages/admin-page/AdminPage';
import Login from './pages/admin-page/Login/Login';
import Preloader from './components/Preloader';
import { connect } from 'react-redux';
import { fetchPayload } from './redux/orderpage-reducer'

const App = (props) => {
	useEffect(()=>{
		props.fetchPayload()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (props.isFetching) {
		return (
			<div className='app'>
				<Route path='/docs' component={PannelContainer} />
				<Preloader/>
			</div>
		)
	}
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

const mapDispatchToProps = (state) =>({
	isFetching: state.orderPage.isFetching
})

export default connect(mapDispatchToProps, { fetchPayload })(App)
