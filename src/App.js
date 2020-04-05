import React from 'react';
import Pannel from './components/Start Page/Pannel/Pannel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './components/Start Page/StartPage';
import OrderPage from './components/Order Page/OrderPage';

const App = () => {
  return (
	  <BrowserRouter>
		<div className='app'>
			<Pannel/>
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/orderpage' component={OrderPage} />
			</Switch>
		</div>
	  </BrowserRouter>
  )
}

export default App;
