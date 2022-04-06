import './NameForm.css';
import logo from './logo.png'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function hasCharsCheck(string){
	let pattern = /^[a-zA-Z]+$/;
	if (pattern.test(string)){
		return true;
	}
	return false;
}

function hasAddressCheck(address) {
	let pattern = /^\s*\S+(?:\s+\S+){2}/;
	if (pattern.test(address)){
		return true;
	}
	return false;
}

function NameForm(props) {
	const navigate = useNavigate();

	function determineUser() {
		let isUser = localStorage.getItem("signedup");

		if (isUser) {
			navigate('/splash');
		}
	}

	// Essentially mouted/created
	useEffect(() => {
		determineUser()
	})

	function testInputs(e) {
		e.preventDefault();
		let passed = 0;

		if (hasCharsCheck(props.details.firstName)) {
			passed += 1
		} else {
			displayTextError();
		}

		if (hasCharsCheck(props.details.lastName)) {
			passed += 1
		} else {
			
		}

		if (hasAddressCheck(props.details.address)) {
			passed += 1
		}else {
			
		}
		
		if (document.querySelector('#chbox1').checked && document.querySelector('#chbox2').checked) {
			passed += 1
		} else {
			displayChboxError();
		}

		if (passed === 4) {
			goToThanks()
		} else {
			console.log("errors")
		}

		
	}

	function displayTextError() {
		document.querySelector('#textError').style.display = 'block'

		setTimeout(() => {
			document.querySelector('#textError').style.display = 'none'
		}, 2000)
		
	}

	function displayChboxError() {
		document.querySelector('#chboxError').style.display = 'block'
		setTimeout(() => {
			document.querySelector('#chboxError').style.display = 'none'
		}, 2000)
		
	}

	function goToThanks() {
		console.log(props.details)

		navigate("/thanks");
	}

	return (
		<article className="formPage-container">
			
			<form onSubmit={testInputs}>
				<img id='signup-logo' src={logo} alt="logo" />

				<h2>Sign Up to Play!</h2>

				<p id='textError'>Fill in all fields!</p>
				<section id='doubleRow' className="inputRow">
					<input onChange={props.handleChange} placeholder="First Name" id="input-firstName" type="text"></input>
					<input onChange={props.handleChange} placeholder="Last Name" id="input-lastName" type="text"></input>
				</section>

				<section className="inputRow">
					<input onChange={props.handleChange} placeholder="Your Address" id="input-address" type="text"></input>
				</section>

				<section className="inputRow">
					<input onChange={props.handleChange} placeholder="Your Phone Number" id="input-phone" type="text"></input>
				</section>

				<section className="inputRow">
					<input onChange={props.handleChange} placeholder="Your Email Address" id="input-phone" type="email"></input>
				</section>

				<section className="dropdownRow">
					<label>Date of Birth:</label>
					<div className="dropdownHolder">
						<select name="" id="input-day">
							<option disabled selected value="">DAY:</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
						</select>
						<select name="" id="input-month">
							<option disabled selected value="">MONTH:</option>
							<option value="01">Jan</option>
							<option value="02">Feb</option>
							<option value="03">Mar</option>
							<option value="04">Apr</option>
							<option value="05">May</option>
							<option value="06">Jun</option>
							<option value="07">Jul</option>
							<option value="08">Aug</option>
							<option value="09">Sep</option>
							<option value="10">Oct</option>
							<option value="11">Nov</option>
							<option value="12">Dec</option>
						</select>
						<select name="" id="input-year">
							<option disabled selected value="">YEAR:</option>
							<option value="1990">1990</option>
							<option value="1991">1991</option>
							<option value="1992">1992</option>
							<option value="1993">1993</option>
							<option value="1994">1994</option>
							<option value="1995">1995</option>
							<option value="1996">1996</option>
							<option value="1997">1997</option>
							<option value="1998">1998</option>
							<option value="1999">1999</option>
							<option value="2000">2000</option>
							<option value="2001">2001</option>
							<option value="2002">2002</option>
							<option value="2003">2003</option>
							<option value="2004">2004</option>
							<option value="2005">2005</option>
							<option value="2006">2006</option>
							<option value="2007">2007</option>
							<option value="2008">2008</option>
						</select>
					</div>
				</section>
				<section className="checkboxHolder">
					<p>I consent to:</p>
					<p id='chboxError'>Click BOTH checkboxes!</p>
					<div className="checkboxRow">
						<input type="checkbox" name="" id="chbox1" />
						<p>rules and regulations.</p>
					</div>
					<div className="checkboxRow">
						<input type="checkbox" name="" id="chbox2" />
						<p>receiving communications about BuyMoreDollar products and sponsors.</p>
					</div>
				</section>
				<input type="submit" value="Submit" />
			</form>
		</article>
		
	)
}

export default NameForm