import React, {useState} from 'react'
import NameForm from './NameForm';
import About from './About';
import Thanks from './Thanks';
import Game from './Game';
import Splash from './Splash';
import Legal from './Legal';

import './App.css';
import logo from './logo.png'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom'


function App() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const details = {
		firstName: firstName,
		lastName: lastName,
		address: address,
		phone: phone,
		email: email,
	}

	const handleChange = (e) => {
		let id = e.target.id;
		let value = e.target.value;

		switch(id) {
			case "input-firstName":
				console.log(value)
				setFirstName(value);
				break;
			case "input-lastName":
				console.log(value)
				setLastName(value);
				break;
			case "input-address":
				setAddress(value);
				console.log(value)
				break;
			case "input-phone":
				setPhone(value);
				console.log(value)
				break;
			case "input-email":
				setEmail(value);
				console.log(value)
				break;
			default:
				break;
		}
	}

	return (
		<Router>
			<div className="App">
				<nav>
					<Link to="/react-conversion"><img id='logo' alt='Logo' src={logo}></img></Link>
					<ul>
						<li>
							<Link to="/react-conversion/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/legal">Legal</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Routes>
				<Route exact path='react-conversion/' element={ <NameForm details={details} handleChange={(e) => handleChange(e)}/> } />
				<Route path='/about' element={ <About />} />
				<Route path='/game' element={ <Game />} />
				<Route path='/splash' element={ <Splash />} />
				<Route path='/legal' element={ <Legal />} />
				<Route path='/thanks' element={ <Thanks details={details}/>} />
			</Routes>
		</Router>
	);
}

export default App;
