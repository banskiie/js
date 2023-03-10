const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATT = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STR_ATT = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATT = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum HP', '100');

let chosenMaxLife = parseInt(enteredValue);
let gameLog = [];
let lastLoggedEntry;

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	alert('Mother f**ker you\'re so stupid. You didn\'t enter a number so the default is 100.')
	chosenMaxLife = 100;
}


let hasBonusLife = true;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
	let logEntry = {
		event: ev,
		value: val,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth,
	};
	switch (ev) {
		case LOG_EVENT_PLAYER_ATT:
		case LOG_EVENT_PLAYER_STR_ATT:
			logEntry.target = 'MONSTER';
			break;
		case LOG_EVENT_MONSTER_ATT:
		case LOG_EVENT_PLAYER_HEAL:
			logEntry.target = 'PLAYER';
			break;
		default:
			break;
	}
	gameLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {

	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(LOG_EVENT_MONSTER_ATT, playerDamage, currentMonsterHealth, currentPlayerHealth)

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		alert('You lost a life!')
		hasBonusLife = false;
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		removeBonusLife();
	}

	let stringOutcome;

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won!');
		stringOutcome = 'PLAYER WON!'
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert('You lost!');
		stringOutcome = 'MONSTER WON!'
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert('You have a draw!');
		stringOutcome = 'A DRAW!'
	}

	if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
		writeToLog(LOG_EVENT_GAME_OVER, stringOutcome, currentMonsterHealth, currentPlayerHealth)
		reset();
	}
}

function attackMonster(mode) {
	const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATT : LOG_EVENT_PLAYER_STR_ATT;
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth)
	endRound()
}

function attackHandler() {
	attackMonster('ATTACK');
}

function strongAttackHandler() {
	attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
	let healValue =
		currentPlayerHealth >= chosenMaxLife - HEAL_VALUE ? chosenMaxLife - currentPlayerHealth : HEAL_VALUE;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert('Can\'t heal more than your max HP!')
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
	endRound();
}

function printLogHandler() {
	for (let i = 0; i < gameLog.length; i++) {
		console.log(gameLog[i]);
	}

	let j = 0;
	// LABELLED STATEMENTS
	outer: do {
		console.log('OUTER', j);
		inner: for (let k = 0; k < 5; k++) {
			if (k === 3) {
				break outer;
			}
			console.log('INNER', k);
		}
		j++;
	} while (j < 3);

	let i = 0;
	for (const entryLog of gameLog) {
		if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
			console.log(`#${i}`);
			for (const key in entryLog) {
				console.log(`${key} : ${entryLog[key]}`);
			}
			lastLoggedEntry = i;
			break;
		}
		i++;
	}
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)
