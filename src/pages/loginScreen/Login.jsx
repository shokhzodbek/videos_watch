import React from 'react';
import logo from '../../assets/lg.png';
import './Login.scss';
function Login() {
	return (
		<div className="login">
			<div className="login_container">
				<img src={logo} alt="" />
				<button>Login with google</button>
				<p>Made with Youtube Api</p>
			</div>
		</div>
	);
}

export default Login;
