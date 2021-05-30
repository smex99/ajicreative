import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import AccessCode from './components/AccessCode';
import ConnexionWithPassword from './components/ConnexionWithPassword';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Connexion />
					</Route>

					<Route path='/inscription'>
						<Inscription />
					</Route>

					<Route path='/access_code'>
						<AccessCode />
					</Route>

					<Route path='/connexion'>
						<ConnexionWithPassword />
					</Route>

					<Route path='/home'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
