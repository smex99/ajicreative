import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

const AccessCode = () => {
	const [code, setCode] = useState('');
	const history = useHistory();
	const ref = useRef('123456789');

	const handleOnSubmit = (event: any) => {
		event.preventDefault();

		if (code === ref.current) history.push('/inscription');
	};

	const handleOnChange = (event: any) => {
		setCode(event.target.value);
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
								<h3 style={{ fontWeight: 600 }}>Code accès</h3>
							</div>

							<div className='custom-form' style={{ padding: 16 }}>
								<Form onSubmit={handleOnSubmit}>
									<Form.Group>
										<Form.Control
											value={code}
											type='text'
											name='code'
											placeholder='Code accès communiqué par votre admin'
											onChange={handleOnChange}
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

export default AccessCode;
