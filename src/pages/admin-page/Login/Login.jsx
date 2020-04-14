import React from 'react'
import './Login.sass'
import logo from '../../../assets/images/svg/logo.svg'

const Login = (props) => {

	return (
		<div className='login-page'>
			<div className='auth'>
				<div className='auth__logo'>
					<img src={logo} alt="" />
					Need for drive
				</div>
				<div className='auth__form'>
					<span>Вход</span>
					<form action="">
						<div className='loginpage__item'>
							<label>Почта</label>
							<input type='email' name="login" required="" />
						</div>
						<div className='loginpage__item'>
							<label>Пароль</label>
							<input type='password' name="login" required="" />
						</div>
						<div className='submit'>
							<span >Запросить доступ</span>
							<input type="submit" name="" value="Войти"></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;