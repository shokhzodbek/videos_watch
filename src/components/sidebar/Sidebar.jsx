import React from 'react';
import './Sidebar.scss';
import {
	MdSubscriptions,
	MdExitToApp,
	MdThumbUp,
	MdHistory,
	MdLibraryBooks,
	MdHome,
	MdSentimentDissatisfied
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth_action';

const data = [
	{
		id: '1',
		title: 'Home',
		icon: MdHome
	},
	{
		id: '2',
		title: 'Subscriptions',
		icon: MdSubscriptions
	},
	{
		id: '3',
		title: 'Liked Video',
		icon: MdThumbUp
	},
	{
		id: '4',
		title: 'Library',
		icon: MdLibraryBooks
	},
	{
		id: '5',
		title: 'History',
		icon: MdHistory
	}
];
const NavItem = ({ Icon, title }) => {
	return (
		<div className="sidebar_item">
			<div className="sidebar_item_icon">
				<Icon size={23} />
			</div>

			<span>{title}</span>
		</div>
	);
};
function Sidebar({ sidebar, handle }) {
	const dispatch = useDispatch();
	const LogOut = () => {
		dispatch(log_out);
	};
	return (
		<nav className={`sidebar ${sidebar && 'open'}`} onClick={() => handle()}>
			{data.map((item) => (
				<NavItem key={item.id} Icon={item.icon} title={item.title} />
			))}

			<hr />
			<NavItem onClick={LogOut} Icon={MdExitToApp} title="Log Out" />
			<hr />
		</nav>
	);
}

export default Sidebar;
