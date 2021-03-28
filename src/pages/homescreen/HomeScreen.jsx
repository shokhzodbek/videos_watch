import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CategoryBar from '../../components/categoryBar/CategoryBar';
import Video from '../../components/video/Video';
import { getPopularVideos } from '../../redux/actions/video_action';

function HomeScreen() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPopularVideos);
	}, [dispatch]);

	const { videos } = useSelector((state) => state.homeReducer);
	console.log(videos);
	return (
		<Container>
			<CategoryBar />
			<Row>
				<Col lg={3} md={4}>
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
				</Col>
				<Col lg={3} md={4}>
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
				</Col>
				<Col lg={3} md={4}>
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
				</Col>
				<Col lg={3} md={4}>
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
				</Col>
			</Row>
		</Container>
	);
}

export default HomeScreen;
