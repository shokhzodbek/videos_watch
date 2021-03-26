import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBar from '../../components/categoryBar/CategoryBar';
import Video from '../../components/video/Video';

function HomeScreen() {
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
