import React from 'react'

const Services = (props) => {
	return (
		<div className='more__services '>
			{
				props.services.map( (el,i)=>{
					return(
						<label key={el.id}>
							<input 
								type="checkbox" 
								checked={el.checked} 
								onChange={() => { props.checkedService(el.id) }} 
							/>
							<span className="fake"></span>
							<span className={el.checked ? 'active' : null}>{el.title}, {el.price}р</span>
						</label>
					)
				})
			}
		</div>
	)
}
export default Services