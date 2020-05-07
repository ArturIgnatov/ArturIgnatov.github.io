import React from 'react'

const Option = ({id, name}) => {
	if (name.length > 10) {
		return (
			<option value={id}>{name.match(/(?<=,\s).*/)[0]}</option>
		)
	}
	return (
		<option value={id}>{name}</option>
	)
}
export default Option