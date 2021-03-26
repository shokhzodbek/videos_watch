import React from 'react';
import './Video.scss';
import { AiFillEye } from 'react-icons/ai';
import logo from '../../assets/lg.png';
function Video() {
	return (
		<div className="video">
			<div className="video_top">
				<img src={logo} alt="" />
				<span>34:5</span>
			</div>
			<div className="video_title">
				<h5>salom</h5>
			</div>
			<div className="video_detail">
				<span>
					<AiFillEye /> 5ml +
				</span>
				<span>5 days ago</span>
			</div>
			<div className="video_channel">
				<img src="" alt="" />
				<p>Rainbow Hat Jr</p>
			</div>
		</div>
	);
}

export default Video;
