import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserInformations } from '../state/actions';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

const Inscription = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const handleOnSubmit = (event: any) => {
		event.preventDefault();
		dispatch(setUserInformations({ firstName, lastName, email }));
		history.push('/connexion');
	};

	const handleChangeFirstName = (event: any) => {
		setFirstName(event.target.value);
	};

	const handleChangeLastName = (event: any) => {
		setLastName(event.target.value);
	};

	const handleChangeEmail = (event: any) => {
		setEmail(event.target.value);
	};

	return (
		<Container>
			<Row>
				<Col style={{ padding: '20%' }}>
					<Card style={{ width: 600 }}>
						<Card.Body>
							<div className='' style={{ padding: 16 }}>
								<img src={Logo} alt='custom-logo' />
							</div>

							<div className='custom-title' style={{ padding: 16 }}>
								<h3 style={{ fontWeight: 600 }}>Inscription</h3>
							</div>

							<div className='' style={{ padding: 16, textAlign: 'justify' }}>
								Nous avons besoin de quelques informations supplémentaires pour
								configurer votre compte.
							</div>

							{/* Formulaire  */}
							<div className='' style={{ padding: 16 }}>
								<Form onSubmit={handleOnSubmit}>
									<Form.Group>
										<Form.Control
											type='text'
											name='firstName'
											placeholder='Prénom'
											onChange={handleChangeFirstName}
										/>
									</Form.Group>

									<Form.Group>
										<Form.Control
											type='text'
											name='lastName'
											placeholder='Nom'
											onChange={handleChangeLastName}
										/>
									</Form.Group>

									<Form.Group controlId='formBasicEmail'>
										<Form.Control
											type='email'
											name='email'
											placeholder='E-mail'
											onChange={handleChangeEmail}
										/>
									</Form.Group>

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

export default Inscription;
