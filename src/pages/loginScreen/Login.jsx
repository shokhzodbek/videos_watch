import React, { useEffect } from 'react';
import logo from '../../assets/lg.png';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth_action';
import { useHistory } from 'react-router';
function Login() {
	const history = useHistory();
	const dispatch = useDispatch();
	const accessToken = useSelector((state) => state.auth.accessToken);
	useEffect(() => {
		if (accessToken) {
			history.push('/');
		}
	}, [accessToken, history]);
	return (
		<div className="login">
			<div className="login_container">
				<img src={logo} alt="" />
				<button onClick={() => dispatch(login())}>Login with google</button>
				<p>Made with Youtube Api</p>
			</div>
		</div>
	);
}

export default Login;
