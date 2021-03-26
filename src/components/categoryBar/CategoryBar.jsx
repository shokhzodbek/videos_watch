import React, { useState } from 'react';

const data1 = ['Music', 'Programming', 'React', 'Redux', 'Beauty', 'Movies'];
function CategoryBar() {
	const [element, setElement] = useState('All');
	const handleClick = (value) => {
		setElement(value);
	};
	return (
		<div className="categories">
			{data1.map((item, i) => (
				<span onClick={() => handleClick(item)} key={i}>
					{item}
				</span>
			))}
		</div>
	);
}

export default CategoryBar;
