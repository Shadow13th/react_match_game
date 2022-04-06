import logo from './logo.png';
import './About.css';
import {useNavigate} from 'react-router-dom';

function About() {

	const navigate = useNavigate()

	return (
		<div className='aboutContainer'>
			<h2>BuyMoreDollars Contest</h2>
			<p>BuyMoreDollars present: an incredible promotion!</p>
			<p><span onClick={() => {navigate('/react-conversion/')}} id="toHome">Sign up</span> with us and, once per day, you can play a skill-testing matching game. If you win you have a chance to win large amounts of BuyMoreDollars!</p>
			
			<table>
				<thead>
					<tr>
					<th># of Prizes</th>
					<th>$BM</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>1</td>
					<td>10,000 $BM</td>
					</tr>
					<tr>
					<td>5</td>
					<td>750 $BM</td>
					</tr>
					<tr>
					<td>10</td>
					<td>100 $BM</td>
					</tr>
					<tr>
					<td>100</td>
					<td>20 $BM</td>
					</tr>
				</tbody>
			</table>

			<p>If you don't manage to win, don't worry! You are still eligible for a consolation coupon for one of our associated partners.</p>

			<div className="menuCardHolder">
				<div onClick={() => {navigate('react-conversion/')}} className="menuCard">
					<img src={logo} alt="Logo" />
					<h3>Sign Up</h3>
				</div>

				<div onClick={() => {navigate('/game')}} className="menuCard">
					<img src={logo} alt="Logo" />
					<h3>PLAY!</h3>
				</div>

				<div onClick={() => {navigate('/legal')}} className="menuCard">
					<img src={logo} alt="Logo" />
					<h3>Legal</h3>
				</div>
			</div>
				


		</div>
	)
}

export default About