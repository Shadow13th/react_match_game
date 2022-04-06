import {useNavigate} from 'react-router-dom';
import './Splash.css'

function Splash() {

	const navigate = useNavigate();
	let firstName = localStorage.getItem('user-firstName');


	return (
		<div className='splashContainer'>
			<h2>Welcome back {firstName}</h2>
			<p>You can play!</p>
			<button id='playGame-btn' onClick={() => {navigate('/game')}}>Play Game</button>
		</div>
	)
}

export default Splash