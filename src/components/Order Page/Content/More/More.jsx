import React from 'react'
import './More.sass'

const More = (props) => {
	console.log(props);
	// Рендер радиокнопок выбора цвета
	const radioFilterColorItem = props.colors.map( el => {
		return (

			<label key={el.id}>
				<input className="check" type="radio" name="colors" checked={el.checked} onChange={() => { props.selectColor(el.id, el.title) }} />
				<span className="fakecheck"></span>
				<span className='active'>{el.title}</span>
			</label>
		)
	})

	// Управление датой C
	let valueDateWhis = props.date.with
	let dateWhis = React.createRef()
	let updateDateWhis = () => {
		let newDate = dateWhis.current.value
		props.changeDateValue(newDate)
	}
	// Управление датой ПО
	let vlueDateBy = props.date.by
	let dateBy = React.createRef()
	let updateDateBy = () => {
		let newDate = dateBy.current.value
		props.cangeDateByValue(newDate)
	}



	return (
		<div className='more'>
			<span>Цвет</span>
			<div className='more__colors style-radio'>
				{radioFilterColorItem}
			</div>

			<span>Дата аренды</span>

			<div className='more__date style-input'>
				<label className='more__datewhis' >
					С
					<input type="datetime-local" ref={dateWhis} value={valueDateWhis} onChange={updateDateWhis} min={props.date.min} />
				</label>
				<label className='more__dateby'>
					По
					<input type="datetime-local" ref={dateBy} value={vlueDateBy} onChange={updateDateBy} />
				</label>
			</div>

			<span>Доп услуги</span>

			<div className='more__services '>
				<label>
					<input  type="checkbox" />
					<span className="fake"></span>
					Полный бак
				</label>
				<label>
					<input  type="checkbox" />
					<span className="fake"></span>
					Детское кресло
				</label>
				<label>
					<input  type="checkbox" />
					<span className="fake"></span>
					Правый руль
				</label>
			</div>
		</div>
	)
}

export default More;
