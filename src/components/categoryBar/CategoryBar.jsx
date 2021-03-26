import React, { useState } from 'react';
import './CategoryBar.scss';
const data1 = ['Music', 'Programming', 'React', 'Redux', 'Beauty', 'Movies'];
function CategoryBar() {
	const [element, setElement] = useState('Music');
	const handleClick = (value) => {
		setElement(value);
	};
	return (
		<div className="categories">
			{data1.map((item, i) => (
				<span className={element === item ? 'active' : ''} onClick={() => handleClick(item)} key={i}>
					{item}
				</span>
			))}
		</div>
	);
}

export default CategoryBar;
