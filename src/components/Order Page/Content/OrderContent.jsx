import React from 'react'
import './OrderContent.sass'
import { Switch, Route } from 'react-router-dom'
import ModelContainer from './Model/ModelContainer'
import LocationContainer from './Location/LocationContainer'
import MoreContainer from './More/MoreContainer'
import TotalContainer from './Total/TotalContainer'

const OrderContent = (props) => {
	return (
		<div className='order-page__content'>
			<Switch>
				<Route exact path={'/docs/orderpage'} component={LocationContainer} />
				<Route path={'/docs/orderpage/model'} component={ModelContainer} />
				<Route path={'/docs/orderpage/more'} component={MoreContainer} />
				<Route path={'/docs/orderpage/total'} component={TotalContainer} />
			</Switch>
		</div>
	)
}

export default OrderContent;