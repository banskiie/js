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
	if (ev === LOG_EVENT_PLAYER_ATT) {
		logEntry.target = 'MONSTER';
	} else if (ev === LOG_EVENT_PLAYER_STR_ATT) {
		logEntry.target = 'MONSTER';
	} else if (ev === LOG_EVENT_MONSTER_ATT) {
		logEntry.target = 'PLAYER';
	} else if (ev === LOG_EVENT_PLAYER_HEAL) {
		logEntry.target = 'PLAYER';
	}
	gameLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	let i = true;
	let stringOutcome;
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
	let maxDamage;
	let logEvent;
	if (mode === MODE_ATTACK) {
		maxDamage = ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_ATT;
	} else if (mode === MODE_STRONG_ATTACK) {
		maxDamage = STRONG_ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_STR_ATT;
	}
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
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert('Can\'t heal more than your max HP!')
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
	endRound();
}

function printLogHandler() {
	console.log(gameLog)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)
