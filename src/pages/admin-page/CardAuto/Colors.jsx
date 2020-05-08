import React from 'react'

const Colors = ({el}) => {
	return (
		<label
			key={el}
			className='admin-checkbox'
		>
			<div>
				<input
					type='checkbox'
					value={el}
					defaultChecked={el}
				// onChange={() => selectColors(el)}
				/>
				<span className='fake-admin'></span>
				<span>{el}</span>
			</div>
		</label>
	)
}
export default Colors