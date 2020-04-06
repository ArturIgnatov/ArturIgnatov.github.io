import React from 'react'
import Content from './Content/Content';
import Modal from './Modal/Modal';
import Slider from './Slider/Slider';

const StartPage = (props) => {

	if (props.startPage.modalActive) {
		return (
			<div className='start-page'>
				<Modal close={props.closeModal} current={props.current} startPage={props.startPage}/>
				<Content />
				<Slider slider={props.startPage} prev={props.prev} next={props.next} current={props.current}/>
			</div>
		)
	}
	return (
		<div className='start-page'>
			<Content />
			<Slider slider={props.startPage} prev={props.prev} next={props.next} current={props.current}/> 
		</div>
	)
}

export default StartPage;