import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css'

// let clicks = 0;
// let selectedCards = [];

// function handleCardClick(e) {
// 	clicks += 1;
// 	e.target.innerText = e.target.id
// 	console.log(e.target.id)

// 	selectedCards.push(e.target)

// 	console.log(selectedCards)

// 	if (clicks === 2) {
// 		console.log(clicks)

// 		document.querySelectorAll('.gameCard').forEach(card => {
// 			card.style.pointerEvents = 'none'
// 		})

// 		compareClickedCards(selectedCards[0], selectedCards[1])
		
// 		selectedCards = [];
// 		clicks = 0;
// 	}
// }

// function compareClickedCards(card1, card2) {
// 	console.log('card 1: ' + card1.id, 'card 2: ' + card2.id)

// 	let guess1 = card1.id.substring(0,1)
// 	let guess2 = card2.id.substring(0,1)

// 	if (guess1 === guess2) {
// 		console.log('correct')
// 		card1.style.backgroundColor = 'green'
// 		card2.style.backgroundColor = 'green'
// 	} else {
// 		console.log('wrong')

// 		setTimeout(() => {
// 			card1.innerText = ""
// 			card2.innerText = ""
// 		}, 500)
// 	}

	
	
// }
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function clearStorage() {
	localStorage.clear();
}

let gameTimer;


function Game() {
	const navigate = useNavigate();

	function determineUser() {
		let isUser = localStorage.getItem("signedup");

		if (!isUser) {
			navigate('react-conversion/');
		}
	}

	// Essentially mouted/created
	useEffect(() => {
		determineUser()
	})


	let clicks = 0;
	let selectedCards = [];
	let [pairs, setPairs] = useState(0);

	function startGame() {
		document.querySelector('#startHolder').style.display = 'none'
		document.querySelectorAll('.gameCard').forEach(card => {
			card.style.pointerEvents = 'all'
			card.style.backgroundColor = 'dodgerblue'
			card.innerText = "";
			setPairs(0);

			card.classList.remove('matched')
		})
		distributeCards()
		gameTimer = setTimeout(() => {
			console.log("game over, loser")
			gameOver()
		}, 20000)
	}

	function gameOver() {
		document.querySelectorAll('.gameCard').forEach(card => {
			card.style.pointerEvents = 'none'
		})

		document.querySelector("#lossHolder").style.display = "grid";
	}

	function distributeCards() {
		let gameCards = [...document.querySelectorAll('.gameCard')];
		let copiedArray = new Array(...gameCards);
	
		let shuffledCards = shuffle(copiedArray);

		console.log(gameCards)
		console.log(shuffledCards)

		for (let i = 0; i < 16; i++) {
			shuffledCards[i].style.order = i
		}
	}

	function handleCardClick(e) {

		// console.log(e.target.classList.contains('matched'))

		if (!e.target.classList.contains('matched')) {
			clicks += 1;
			selectedCards.push(e.target)

			e.target.innerText = e.target.id.substring(0,1).toUpperCase();
			e.target.style.pointerEvents = 'none'
			
		} else {
			console.log('do nothing')
			return
		}
		
		if (clicks === 2) {

			document.querySelectorAll('.gameCard').forEach(card => {
				card.style.pointerEvents = 'none'

				setTimeout(() => {
					card.style.pointerEvents = 'all'
				}, 500)
			})

			compareClickedCards(selectedCards[0], selectedCards[1])
			
			selectedCards = [];
			clicks = 0;
		}
	}

	function compareClickedCards(card1, card2) {
		console.log('card 1: ' + card1.id, 'card 2: ' + card2.id)

		let guess1 = card1.id.substring(0,1)
		let guess2 = card2.id.substring(0,1)

		if (guess1 === guess2) {
			console.log('correct')
			
			card1.style.backgroundColor = 'green'
			card1.classList.add('matched')
			
			card2.style.backgroundColor = 'green'
			card2.classList.add('matched')
			
			setPairs(pairs+=1);
			checkMatches()
		} else {
			console.log('wrong')

			setTimeout(() => {
				card1.innerText = ""
				card2.innerText = ""
			}, 500)
		}

		
	}

	function checkMatches() {
		console.log('you have: ' + pairs)

		if (pairs === 5) {
			document.querySelector("#winHolder").style.display = "grid";
			document.querySelectorAll('.gameCard').forEach(card => {
				card.style.pointerEvents = 'none'
			})

			clearTimeout(gameTimer);
		}
	}

	return (
		<article className="gameContainer">
			<h2>Match Game</h2>
			<div className="gameHolder">
				<div onClick={(e) => handleCardClick(e)} id="a1" data-id="A" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="a2" data-id="A" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="b1" data-id="B" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="b2" data-id="B" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="c1" data-id="C" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="c2" data-id="C" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="d1" data-id="D" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="d2" data-id="D" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="e1" data-id="E" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="e2" data-id="E" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="f1" data-id="F" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="f2" data-id="F" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="g1" data-id="G" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="g2" data-id="G" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="h1" data-id="H" className="gameCard"></div>
				<div onClick={(e) => handleCardClick(e)} id="h2" data-id="H" className="gameCard"></div>
			</div>
			<div id='startHolder' className="gameOverHolder">
				<button onClick={startGame}>START GAME</button>
			</div>
			<div id='lossHolder' className="gameOverHolder">
				<h3>You Lose</h3>
				<button onClick={() => {navigate('/splash')}}>Back Home</button>
			</div>
			<div id='winHolder' className="gameOverHolder">
				<h3>You Win!</h3>
				<button onClick={() => {navigate('/splash')}}>Back Home</button>
			</div>
			<h3>You have {pairs} matches.</h3>
			<button onClick={clearStorage}>clear local storage</button>
		</article>
	)
}

export default Game