import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Avatar from '../assets/avatar.jpg';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
} from 'react-virtualized';

const Home = () => {
	const [news, setNews] = useState<any[]>([]);

	const cache = useRef(
		new CellMeasurerCache({
			fixedWidth: false,
			defaultHeight: 760,
		})
	);

	useEffect(() => {
		fetchNewsFromAPI();
	}, []);

	const fetchNewsFromAPI = async () => {
		const { data } = await axios.get(
			'https://newsapi.org/v2/top-headlines?country=ca&apiKey=a536d6b3ceac41bf96b44e1a137c0f93'
		);

		setNews(data.articles);
	};

	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className='content'>
				<Container fluid>
					<Row>
						<Col xl='4' lg='4' md='8' sm='8' xs='12'>
							<div
								style={{
									width: 'auto',
									height: '92vh',
									position: 'inherit',
								}}
							>
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
															<Card
																style={{
																	marginBottom: 8,
																	height: 760,
																}}
															>
																<Card.Header>
																	<div
																		className=''
																		style={{
																			display: 'flex',
																			height: 68,
																			marginBottom: 8,
																			alignContent: 'space-between',
																			alignItems: 'center',
																		}}
																	>
																		<div
																			className='avatar'
																			style={{ padding: 4 }}
																		>
																			<img
																				src={Avatar}
																				alt='avatar'
																				style={{
																					borderRadius: '50%',
																					width: 60,
																					height: 'auto',
																				}}
																			/>
																		</div>

																		<div
																			className='source-link'
																			style={{ padding: 4 }}
																		>
																			<span
																				style={{
																					fontWeight: 600,
																					color: 'purple',
																					fontSize: 14,
																				}}
																			>
																				{article.source.name}
																			</span>
																		</div>

																		<div className='' style={{ padding: 4 }}>
																			<span
																				style={{
																					fontWeight: 500,
																					fontSize: 14,
																					color: 'gray',
																				}}
																			>
																				{article.author}
																			</span>
																		</div>

																		<div className='' style={{ padding: 4 }}>
																			<span
																				style={{
																					fontWeight: 500,
																					fontSize: 14,
																					color: 'gray',
																				}}
																			>
																				{/* {article.publishedAt} */}

																				{moment(article.publishedAt).calendar()}
																			</span>
																		</div>
																	</div>
																	<h6
																		style={{
																			fontWeight: 600,
																			fontSize: 18,
																			marginBottom: 16,
																		}}
																	>
																		{article.title}
																	</h6>
																</Card.Header>

																<Card.Body style={{ maxHeight: 520 }}>
																	<Card.Img
																		variant='top'
																		src={article.urlToImage}
																	></Card.Img>

																	<Card.Text>
																		<p
																			style={{
																				fontWeight: 500,
																				color: 'grey',
																				marginTop: 16,
																				textAlign: 'justify',
																			}}
																		>
																			{article.description}
																		</p>
																	</Card.Text>
																</Card.Body>

																<Card.Footer>
																	<div
																		className='custom-card-footer'
																		style={{
																			display: 'grid',
																			gridTemplateColumns: '1fr 1fr 1fr',
																			alignContent: 'space-between',
																			alignItems: 'center',
																		}}
																	>
																		<div className=''>
																			<span
																				style={{
																					fontSize: 16,
																					color: 'gray',
																					fontWeight: 600,
																				}}
																			>
																				Partager
																				<i
																					className='fa fa-share'
																					style={{ margin: '0px 8px' }}
																				></i>
																				149
																			</span>
																		</div>

																		<div className='' style={{ marginLeft: 8 }}>
																			<span
																				style={{
																					fontSize: 16,
																					color: 'gray',
																					fontWeight: 600,
																				}}
																			>
																				<i
																					className='fa fa-heart'
																					style={{ marginRight: 8 }}
																				></i>
																				20 J'aimes
																			</span>
																		</div>

																		<div className='' style={{ marginLeft: 8 }}>
																			<button
																				type='button'
																				className='btn-custom'
																			>
																				<i className='fa fa-microphone'></i> En
																				parler
																			</button>
																		</div>
																	</div>
																</Card.Footer>
															</Card>
														</div>
													</CellMeasurer>
												);
											}}
										/>
									)}
								</AutoSizer>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Home;
