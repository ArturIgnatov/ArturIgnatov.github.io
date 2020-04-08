import React from 'react'
import './More.sass'


const More = (props) => {
	console.log(props);
	
	const radioFilterColorItem = props.colors.map( el => {
		return (

			<label key={el.id}>
				<input className="check" type="radio" name="colors" checked={el.checked} onChange={() => { props.selectColor(el.id, el.title) }} />
				<span className="fakecheck"></span>
				<span className='active'>{el.title}</span>
			</label>
		)
	})

	return (
		<div className='more'>
			<span>Цвет</span>
			<div className='more__colors style-radio'>
				{radioFilterColorItem}
			</div>
			<span>Дата аренды</span>
			<div className='more__date style-input'>
				<label className='location__city' >
					С
					<input type="datetime-local"/>
				</label>
				<label className='location__point input'>
					По
					<input type="datetime-local" placeholder='Введите дату и время' />
				</label>
			</div>
			<span>Тариф</span>
			<label>
				<input type="checkbox" />
			</label>
			<label>
				<input type="checkbox" />
			</label>
			<label>
				<input type="checkbox" />
			</label>
			<span>Доп услуги</span>
			<input type="checkbox" />
			<input type="checkbox" />
			<input type="checkbox" />
		</div>
	)
}

export default More;
