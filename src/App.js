import React from 'react';
import Content from './components/Start Page/Content/Content'
import Slider from './components/Start Page/Slider/Slider'
import Pannel from './components/Start Page/Pannel/Pannel';

const App = () => {
  return (
	  <div className='app'>
		  <Pannel/>
		  <Content/>
		  <Slider/>
	  </div>
  )
}

export default App;
