import React from 'react'
import './More.sass'

const More = (props) => {
		
	// Рендер радиокнопок выбора цвета
	const radioFilterColorItem = props.colors.map( el => {
		if (el.checked) {
			return (
				<label key={el.id}>
					<input className="check" type="radio" name="color" checked={el.checked} onChange={() => { props.selectColor(el.id) }} />
					<span className="fakecheck"></span>
					<span className='active'>{el.title}</span>
				</label>
			)
		}
		return (
			<label key={el.id}>
				<input className="check" type="radio" name="colors" checked={el.checked} onChange={() => { props.selectColor(el.id, el.title) }} />
				<span className="fakecheck"></span>
				<span>{el.title}</span>
			</label>
		)
	})
	// Рендер радиокнопок выбора тарифа
	const radioRateItem = props.rate.map(el => {
		if (el.checked) {
			return (
				<label key={el.id}>
					<input className="check" type="radio" name="rate" checked={el.checked} onChange={() => { props.selectRate(el.id) }} />
					<span className="fakecheck"></span>
					<span className='active'>{el.title}, {el.price} {el.unit} </span>
				</label>
			)
		}
		return (
			<label key={el.id}>
				<input className="check" type="radio" name="rate" checked={el.checked} onChange={() => { props.selectRate(el.id) }} />
				<span className="fakecheck"></span>
				<span>{el.title}, {el.price} {el.unit} </span>
			</label>
		)
	})
	// Рендер чекбоксов доп услуг 

	const checkboxServicesItem = props.services.map(el => {
		if (el.checked) {
			return(
				<label key={el.id}>
					<input type="checkbox" checked={el.checked} onChange={() => { props.checkedService(el.id)}}/>
					<span className="fake"></span>
					<span className='active'>{el.title}, {el.price}р</span>
				</label>
			)
			
		}
		return (
			<label key={el.id}>
				<input type="checkbox" checked={el.checked} onChange={() => { props.checkedService(el.id)}}/>
				<span className="fake"></span>
				<span>{el.title}, {el.price}р</span>
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
	// Обновление даты 
	

	// const [date, setDate] = useState(moment().format().slice(0, 19))

	// let s = setInterval(() => {
	// 	setDate(moment().format().slice(0, 19))
	// 	clearInterval(s)
	// 	console.log('ye');
	// }, 1000);

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
					<input type="datetime-local" value={valueDateWhis} ref={dateWhis} onChange={updateDateWhis} min={valueDateWhis}/>
				</label>
				<label className='more__dateby'>
					По
					<input type="datetime-local" ref={dateBy} value={vlueDateBy} onChange={updateDateBy} min={valueDateWhis}/>
				</label>
			</div>

			
			<span>Тариф</span>
			<div className='more__rate style-radio'>
				{radioRateItem}
			</div>


			<span>Доп услуги</span>
			<div className='more__services '>
				{checkboxServicesItem}
			</div>


		</div>
	)
}

export default More;
