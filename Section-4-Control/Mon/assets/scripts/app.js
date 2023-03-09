const ATTACK_DAMAGE = 10;
const STR_ATTACK_DAMAGE = 20;
const MONSTER_ATTACK_DAMAGE = 15;
const HEAL_VALUE = 40;
let heals = 1;
let playerLives = 1;
let chosenMaxLife = 100;
let monsterHP = chosenMaxLife;
let playerHP = chosenMaxLife;
let strongAttacks = 3;
let gameLog = [];

function whileAttacking(dmgOnMonster) {
    const dmgOnPlayer = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    monsterHP -= dmgOnMonster;
    playerHP -= dmgOnPlayer;
    gameLog.push(`Player dealt ${dmgOnMonster} damage to Monster.`)
    gameLog.push(`Monster dealt ${dmgOnPlayer} damage to Player.`)

    if (monsterHP <= 0 && playerHP > 0) {
        alert('YOU WIN!')
        gameLog.push(`Player dealt ${dmgOnMonster} damage and killed the Monster.`)
        refreshGame()
    } else if (playerHP <= 0 && monsterHP > 0) {
        playerLives -= 1;
        if (playerLives < 0) {
            alert('YOU DIED AGAIN. YOU LOST!')
            gameLog.push(`Monster dealt ${dmgOnMonster} damage and killed you permanently.`)
            refreshGame();
        } else {
            bonusLifeEl.textContent = '0';
            alert('YOU DIED. YOU HAVE 1 LIFE LEFT!');
            gameLog.push(`Monster dealt ${dmgOnMonster} damage and took ${playerLives + 1} player live(s).`)
            playerLostLife();
        }
    } else if (playerHP <= 0 && monsterHP <= 0 && !playerLives) {
        alert('DRAW!')
        refreshGame();
    }
}

function playerLostLife() {
    playerHP = chosenMaxLife;
    setPlayerHealth(chosenMaxLife);
}

function refreshGame() {
    gameLog.push(`Game reset.`)
    bonusLifeEl.textContent = 1;
    playerLives = 1;
    heals = 1;
    strongAttacks = 3;
    monsterHP = chosenMaxLife;
    playerHP = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function attackOnClick() {
    const damageDealt = dealMonsterDamage(ATTACK_DAMAGE);
    whileAttacking(damageDealt);
}

function strongAttackOnClick() {
    strongAttacks -= 1;
    if (strongAttacks < 0) {
        alert('You ran out of strong attacks!')
        return;
    }
    const damageDealt = dealMonsterDamage(STR_ATTACK_DAMAGE);
    whileAttacking(damageDealt);
}

function healOnClick() {
    heals -= 1;
    if (heals < 0) {
        alert('You have no more heals!')
        return;
    }
    playerHP += HEAL_VALUE;
    if (playerHP > chosenMaxLife) {
        playerHP = chosenMaxLife
    }
    increasePlayerHealth(HEAL_VALUE);
}

function showLog() {

}

adjustHealthBars(chosenMaxLife);

attackBtn.addEventListener('click', attackOnClick);
strongAttackBtn.addEventListener('click', strongAttackOnClick);
healBtn.addEventListener('click', healOnClick);
logBtn.addEventListener('click', showLog)

