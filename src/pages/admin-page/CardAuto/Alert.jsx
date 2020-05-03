import React from 'react'
import './index.sass'

const Alert = (props) => {
	return(
		<div className='alert'>
			<svg  width="15" height="15" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.73828L7.16406 0.324219L7.75 0.910156L2.75 5.91016L0.425781 3.58594L1.01172 3L2.75 4.73828Z" fill="white" />
			</svg>
			<span>Успех! Машина сохранена</span>
			<div>
				<svg onClick={props.closeAlert} width="12" height="12" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1.50714L8.99286 0.5L5 4.49286L1.00714 0.5L0 1.50714L3.99286 5.5L0 9.49286L1.00714 10.5L5 6.50714L8.99286 10.5L10 9.49286L6.00714 5.5L10 1.50714Z" fill="white" />
				</svg>
			</div>
		</div>
	)
}
export default Alert