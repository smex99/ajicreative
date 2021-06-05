import { useSelector } from 'react-redux';
import {
	Navbar,
	Form,
	FormControl,
	Button,
	Nav,
	NavDropdown,
} from 'react-bootstrap';
import Avatar from '../../assets/avatar.jpg';

const CustomNavbar = () => {
	const lastName = useSelector((state: any) => state.authReducer.user.lastName);
	const firstName = useSelector(
		(state: any) => state.authReducer.user.firstName
	);

	return (
		<Navbar className='bg-light justify-content-between' fixed='top'>
			<Navbar.Brand href='#home'>
				<img
					src={Avatar}
					width='40'
					height='40'
					style={{ borderRadius: '50%' }}
					className='d-inline-block align-top'
					alt='avatar'
				/>
			</Navbar.Brand>
			<Nav
				className='mr-auto my-2 my-lg-0'
				style={{ maxHeight: '100px' }}
				navbarScroll
			>
				<NavDropdown
					title={firstName ? `${firstName} ${lastName}` : 'Guest User'}
					id='navbarScrollingDropdown'
				>
					<NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
					<NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action5'>
						Something else here
					</NavDropdown.Item>
				</NavDropdown>
			</Nav>

			<Nav className='mr-auto'>
				<div className='app-title'>
					<Navbar.Text style={{ color: 'white' }}>Actualité</Navbar.Text>
				</div>
			</Nav>

			<Form className='d-flex'>
				<FormControl
					type='search'
					placeholder='Recherche'
					className='mr-2'
					aria-label='Search'
				/>
				<Button variant='outline-success'>Recherche</Button>
			</Form>
		</Navbar>
	);
};

export default CustomNavbar;
