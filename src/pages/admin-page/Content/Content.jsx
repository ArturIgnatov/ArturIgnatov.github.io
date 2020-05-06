import React from 'react'
import './Content.sass'
import { Route, Switch } from 'react-router-dom'
import Orders from '../Orders'
import CardAuto from '../CardAuto'
import Tables from '../Table'

const Content = (props) => {

	return (
		<div className='admin-page__content'>
			<Switch>
				<Route exact path={'/adminpage'} component={CardAuto} />
				<Route  path={'/adminpage/listcar'} component={Tables} />
				<Route path={'/adminpage/orders/:orderPage?'} component={Orders} />
			</Switch>
		</div>
	)
}

export default Content;