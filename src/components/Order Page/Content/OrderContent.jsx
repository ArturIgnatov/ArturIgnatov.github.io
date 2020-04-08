import React from 'react'
import './OrderContent.sass'
import { Switch, Route } from 'react-router-dom'
import ModelContainer from './Model/ModelContainer'
import LocationContainer from './Location/LocationContainer'
import MoreContainer from './More/MoreContainer'
import TotalContainer from './Total/TotalContainer'

const OrderContent = () => {
	return (
		<div className='order-page__content'>
			<Switch>
				<Route exact path={'/orderpage'} component={LocationContainer} />
				<Route  path={'/orderpage/model'} component={ModelContainer} />
				<Route  path={'/orderpage/more'} component={MoreContainer} />
				<Route  path={'/orderpage/total'} component={TotalContainer} />
			</Switch>
		</div>
	)
}

export default OrderContent;