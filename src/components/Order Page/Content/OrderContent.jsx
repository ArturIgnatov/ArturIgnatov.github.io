import React from 'react'
import './OrderContent.sass'
import { Switch, Route } from 'react-router-dom'
import Location from './Location/Location'
import Total from './Total/Total'
import More from './More/More'
import ModelContainer from './Model/ModelContainer'

const OrderContent = () => {
	return (
		<div className='order-page__content'>
			<Switch>
				<Route exact path={'/orderpage'} component={Location}/>
				<Route  path={'/orderpage/model'} component={ModelContainer} />
				<Route  path={'/orderpage/more'} component={More} />
				<Route  path={'/orderpage/total'} component={Total} />
			</Switch>
		</div>
	)
}

export default OrderContent;