import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Thanks.css'

function Thanks(props) {

	const navigate = useNavigate();

	function storeUser() {
		localStorage.setItem("user-firstName", props.details.firstName);
		localStorage.setItem("user-lastName", props.details.lastName);
		localStorage.setItem("user-address", props.details.address);
		localStorage.setItem("user-phone", props.details.phone);
		localStorage.setItem("user-email", props.details.email);
		localStorage.setItem("signedup", true);
	}

	useEffect(() => {
		storeUser()
	})

	return (
		<div className="thanksContainer">
			<h2>Thank you!</h2>
			<p>Thank you {props.details.firstName} {props.details.lastName}!</p>
			<button id="playGame-btn" onClick={() => {navigate('/game')}}>Play Now!</button>
		</div>
	)
}

export default Thanks