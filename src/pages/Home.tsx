import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import { setNewsFromAPI } from '../state/actions';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
} from 'react-virtualized';
import Navbar from '../components/layout/Navbar';
// import Sidebar from '../components/layout/Sidebar';

const newsFeedStyle = {
	width: 'auto',
	height: '87vh',
};

const Home = () => {
	const dispatch = useDispatch();

	const news = useSelector((state: any) => state.newsReducer.news);
	const lastName = useSelector((state: any) => state.authReducer.user.lastName);
	const firstName = useSelector(
		(state: any) => state.authReducer.user.firstName
	);

	const cache = useRef(
		new CellMeasurerCache({
			fixedWidth: true,
			defaultHeight: 800,
		})
	);

	useEffect(() => {
		fetchNewsFromAPI();
	}, []);

	const fetchNewsFromAPI = async () => {
		const { data } = await axios.get(
			'https://newsapi.org/v2/top-headlines?country=ca&apiKey=a536d6b3ceac41bf96b44e1a137c0f93'
		);
		dispatch(setNewsFromAPI(data.articles));
	};

	return (
		<div>
			<Navbar />
			{/* <Sidebar /> */}
			<div className='content'>
				<Container>
					<Row>
						<Col xl='3' lg='3'>
							<Card>
								<Card.Header style={{ textAlign: 'center' }}>
									<h6 style={{ fontWeight: 600 }}>
										{firstName} {lastName}
									</h6>
								</Card.Header>
								<Card.Body></Card.Body>
							</Card>
						</Col>

						<Col xl='6' lg='6'>
							<Form autoComplete='off'>
								<Form.Group controlId='formBasicEmail'>
									<Form.Control type='text' placeholder='Exprimez-vous' />
								</Form.Group>
							</Form>

							<div style={newsFeedStyle}>
								<AutoSizer>
									{({ width, height }) => (
										<List
											width={width}
											height={height}
											rowHeight={cache.current.rowHeight}
											deferredMeasurementCache={cache.current}
											rowCount={news.length}
											rowRenderer={({ key, index, style, parent }) => {
												const article = news[index];

												return (
													<CellMeasurer
														key={key}
														cache={cache.current}
														parent={parent}
														columnIndex={0}
														rowIndex={index}
													>
														<div key={key} style={style}>
															<PostCard article={article} />
														</div>
													</CellMeasurer>
												);
											}}
										/>
									)}
								</AutoSizer>
							</div>
						</Col>

						<Col xl='3' lg='3'>
							<Card>
								<Card.Header style={{ textAlign: 'center' }}>
									<h6 style={{ fontWeight: 600 }}>Right panel</h6>
								</Card.Header>
								<Card.Body></Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Home;
