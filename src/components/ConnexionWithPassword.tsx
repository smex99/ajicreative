import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

const ConnexionWithPassword = () => {
	const history = useHistory();
	const [password, setPassword] = useState('');
	const email = useSelector((state: any) => state.authReducer.user.email);

	const handleOnChange = (event: any) => {
		setPassword(event.target.value);
	};

	const handleOnSubmit = (event: any) => {
		event.preventDefault();
		history.push('/home');
	};

	return (
		<Container>
			<Row>
				<Col style={{ padding: '20%' }}>
					<Card style={{ width: 600 }}>
						<Card.Body>
							<div className='logo' style={{ padding: 16 }}>
								<img src={Logo} alt='custom-logo' />
							</div>

							<div className='custom-title' style={{ padding: 16 }}>
								<h3 style={{ fontWeight: 600 }}>Entrer le mot de passe</h3>
							</div>

							<div
								className=''
								style={{ padding: 16, fontWeight: 600, color: 'grey' }}
							>
								<p>
									<i className='fa fa-arrow-left'></i> {email}
								</p>
							</div>

							<div className='custom-form' style={{ padding: 16 }}>
								<Form onSubmit={handleOnSubmit}>
									<Form.Group>
										<Form.Control
											value={password}
											type='password'
											name='password'
											placeholder='Mot de passe'
											onChange={handleOnChange}
										/>
									</Form.Group>

									<Button size='lg' variant='primary' type='submit'>
										Se connecter
									</Button>
								</Form>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ConnexionWithPassword;
