import React from 'react';
import Menu from './components/Start Page/Menu/Menu'
import Content from './components/Start Page/Content/Content'
import Slider from './components/Start Page/Slider/Slider'

const App = () => {
  return (
	  <div className='app'>
		  <Menu/>
		  <Content/>
		  <Slider/>
	  </div>
  )
}

export default App;
