import React from 'react'
import './Content.sass'
import { Route, Switch } from 'react-router-dom'
import CardsCar from './CardsCar'
import ListCar from './ListCar'
import Orders from './Orders'

const Content = (props) => {

	return (
		<div className='admin-page__content'>
			<Switch>
				<Route exact path={'/adminpage'} component={CardsCar} />
				<Route  path={'/adminpage/listcar'} component={ListCar} />
				<Route  path={'/adminpage/orders'} component={Orders} />
			</Switch>
		</div>
	)
}

export default Content;