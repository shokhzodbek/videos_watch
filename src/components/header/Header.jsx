import React from 'react';
import { FaBars, FaYoutube } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdApps, MdNotifications } from 'react-icons/md';
import logo from '../../assets/lg.png';
import './Header.scss';
import { Avatar } from '@material-ui/core';

function Header({ handle }) {
	return (
		<div className="header">
			<FaBars className="header_menu" size={26} onClick={() => handle()} />
			<img src={logo} alt="" className="header_logo" />

			<form>
				<input type="text" placeholder="Search" />
				<button>
					<AiOutlineSearch size={22} />
				</button>
			</form>
			<div className="header_icons">
				<MdNotifications size={28} />
				<MdApps size={28} />
				<div className="avatar">
					<Avatar />
				</div>
			</div>
		</div>
	);
}

export default Header;
