import React from 'react'

const Rate = (props) => {
	return(
		<div className='more__rate style-radio'>
			{
				props.rate.map((el,i)=>{
					return(
						<label key={i}>
							<input 
								className='check' 
								type='radio' 
								name='rate' 
								checked={el.checked} 
								onChange={() => { props.selectRate(el.id) }} 
							/>
							<span className="fakecheck"></span>
							<span className={el.checked ? 'active' : null}>{el.title}, {el.price} {el.unit} </span>
						</label>
					)
				})
			}
		</div>
	)
}
export default Rate