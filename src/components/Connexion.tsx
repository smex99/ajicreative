import { NavLink } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

const Connexion = () => {
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
								<h3 style={{ fontWeight: 600 }}>Connexion</h3>
							</div>

							<div className='' style={{ padding: 16 }}>
								<Form>
									<Form.Group controlId='formBasicEmail'>
										<Form.Control type='email' placeholder='E-mail' />
									</Form.Group>

									<div className='' style={{ padding: 16 }}>
										Vous n'avez pas encore de compte ?
										<NavLink to='/access_code'> Créez-en un !</NavLink>
									</div>

									<Button size='lg' variant='primary' type='submit'>
										Suivant
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

export default Connexion;
