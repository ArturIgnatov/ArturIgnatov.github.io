import React from 'react'

const FilterRadio = (props) => {
	return(
		<div className='model__filter style-radio'>
			{
				props.category.map(el => {
					return(
						<label key={el.id}>
							<input
								className='check'
								type='radio' name='model'
								checked={el.checked}
								onChange={() => { props.handlerRadio(el.id) }}
							/>
							<span className='fakecheck'></span>
							<span className={el.checked ? 'active' : null}>{el.name}</span>
						</label>
					)
				})
			}
		</div>
	)
}
export default FilterRadio