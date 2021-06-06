import { useEffect, FC } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

import { setNewsFromAPI } from '../state/actions';
import Avatar from '../assets/avatar.jpg';
import Feed from '../components/Feed';
import Navbar from '../components/layout/Navbar';
// import Sidebar from '../components/layout/Sidebar';

const Home: FC = () => {
	const dispatch = useDispatch();

	const lastName = useSelector((state: any) => state.authReducer.user.lastName);
	const firstName = useSelector(
		(state: any) => state.authReducer.user.firstName
	);

	useEffect(() => {
		fetchNewsFromAPI();
	});

	const fetchNewsFromAPI = async () => {
		const { data } = await axios.get(
			'https://newsapi.org/v2/top-headlines?country=ca&apiKey=a536d6b3ceac41bf96b44e1a137c0f93'
		);
		dispatch(setNewsFromAPI(data.articles));
	};

	return (
		<>
			<Navbar />
			{/* <Sidebar /> */}
			<div className='content' id='content'>
				<Container>
					<Row>
						<Col xl='3' lg='3'>
							<Card style={{ borderRadius: 7 }}>
								{/* <Card.Header></Card.Header> */}
								<Card.Body style={{ textAlign: 'center' }}>
									<img
										src={Avatar}
										alt='avatar-img'
										width='60'
										height='60'
										style={{ borderRadius: '50%', marginBottom: 8 }}
									/>
									<h6 style={{ fontWeight: 600 }}>
										{firstName} {lastName}
									</h6>
								</Card.Body>
							</Card>
						</Col>

						<Col xl='6' lg='6'>
							<Form autoComplete='off'>
								<Form.Group controlId='formBasicEmail'>
									<Form.Control type='text' placeholder='Exprimez-vous ?' />
								</Form.Group>
							</Form>

							<Feed />
						</Col>

						<Col xl='3' lg='3'>
							<Card style={{ borderRadius: 7 }}>
								{/* <Card.Header style={{ textAlign: 'center' }}></Card.Header> */}
								<Card.Body>
									<h6 style={{ fontWeight: 600 }}>Recent activities</h6>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Home;
