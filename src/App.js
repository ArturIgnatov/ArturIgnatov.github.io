import React from 'react';
import Content from './components/Start Page/Content/Content'
import Pannel from './components/Start Page/Pannel/Pannel';
import SliderContainer from './components/Start Page/Slider/SliderContainer';

const App = () => {
  return (
	  <div className='app'>
		  <Pannel/>
		  <Content/>
		  <SliderContainer/>
	  </div>
  )
}

export default App;
