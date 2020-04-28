import React from 'react'
import './Total.sass'


const Total = (props) => {
	let dateOrder = new Date(props.preorder.dateFrom).toLocaleString()
	let Services = (props) => {
		return(
			<>
				{
					props.preoprder.ifFullTank
						? <div>Топливо <span>100%</span></div>
						: null
				}
				{
					props.preoprder.isNeedChildChair
						? <div>Детское кресло <span>Да</span> </div>
						: null
				}
				{
					props.preoprder.isRightWheel
						? <div>Правый руль <span>Да</span> </div>
						: null
				}

			</>
		)
	}
	
	return (
		<div className='total'>
			<div className='total__order'>
				<div className='total__description'>
					<div>{props.preorder.carId.name}</div>
					<div>К 385 НР 13</div>
					<Services preoprder={props.preorder}/>
					<div>Доступна с <span>{dateOrder}</span></div>
				</div>
				{/* <img src={props.preorder.car.img} alt="" /> */}
			</div>
		</div>
	)
}

export default Total;
