import React from 'react'
import './Login.sass'
import logo from '../../../assets/images/svg/logo.svg'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import { login, setError } from '../../../redux/admin-page'

const Login = (props) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const onChangeLogin = (e) => {
		setLogin(e.target.value)
		props.setError(undefined)
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value)
		props.setError(undefined)
	}
	const inlogin = (e)=> {
		e.preventDefault()
		props.login({ username: login, password: password })
	}
	
	if (props.isAuth === true) {
		return <Redirect to={'/adminpage'}/>
	}
	return (
		<div className='login-page'>
			<div className='auth'>
				<div className='auth__logo'>
					<img src={logo} alt="" />
					Need for drive
				</div>
				<div className='auth__form'>
					<span>Вход</span>
					<form>
						{
							props.error
								? <span className='login-error'>Ошибка! Неверный логин или пароль</span>
								: null
						}
						<div className='loginpage__item'>
							<label>Логин</label>
							<input 
								type='text' 
								name='login'
								onChange={onChangeLogin} 
								value={login}
							/>
						</div>
						<div className='loginpage__item'>
							<label>Пароль</label>
							<input 
								type='password' 
								name='login' 
								onChange={onChangePassword}
								value={password}
							/>
						</div>
						<div className='submit'>
							<span >Запросить доступ</span>
							<input 
								type="submit" 
								onClick={inlogin} 
								name="" 
								value="Войти"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => ({
	isAuth: state.adminPage.isAuth,
	error: state.adminPage.error
})

export default connect(mapStateToProps, { login, setError })(Login)