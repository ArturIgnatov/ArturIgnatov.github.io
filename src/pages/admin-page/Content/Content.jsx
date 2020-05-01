import React from 'react'
import './Content.sass'
import { Route, Switch } from 'react-router-dom'
import ListCar from './ListCar'
import Orders from '../Orders'
import CardAuto from '../CardAuto'

const Content = (props) => {

	return (
		<div className='admin-page__content'>
			<Switch>
				<Route exact path={'/adminpage'} component={CardAuto} />
				<Route exact path={'/adminpage/listcar'} component={ListCar} />
				<Route exact path={'/adminpage/orders'} component={Orders} />
			</Switch>
		</div>
	)
}

export default Content;