class Game {
	constructor() {
		this.turnLeft = 10;
		this.playersList = [];
		this.turnArray = new Array();
		this.indexPlayerTurn = 0;
	}

	getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	startGame = () => {
		this.startTurn();
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}

	startTurn = () => {
		console.log(`It's turn ${11 - this.turnLeft}`);
		this.playersList.forEach(player => {
			player.newTurn();
		});
		this.turnArray = this.playersList.slice();
		this.indexPlayerTurn = this.getRandomIntInclusive(0, this.turnArray.length - 1);
		console.log(`It's time for ${this.turnArray[this.indexPlayerTurn].name} to play`);
	}

	nextPlayer = () => {
		if (this.turnArray.length > 1) {
			this.turnArray.splice(this.indexPlayerTurn, 1);
			this.indexPlayerTurn = this.getRandomIntInclusive(0, this.turnArray.length - 1);
			console.log(`It's time for ${this.turnArray[this.indexPlayerTurn].name} to play`);
		} else {
			this.watchStats();
			this.skipTurn();
		}
	}

	skipTurn = () => {
		this.turnLeft -= 1.
		if (this.turnLeft <= 0) {
			console.log("Game is finished ! Winners are :");
			this.playersList.forEach(player => {
				if (player.isAlive())
					player.status = "winner";
			});
			this.startTurn();
			this.watchStats();
		} else {
			this.startTurn();
		}

	}

	watchStats = () => {
		this.playersList.forEach(player => {
			if (player.isAlive)
				console.log(`${player.name} : ${player.hp} hp, ${player.dmg} dmg, ${player.mana} mana`);
		});
	}
}

let ulder = new Paladin();
let grace = new Fighter();
let draven = new Berzerker();
let moana = new Healer();
let carl = new Assassin();
let game = new Game();

game.addPlayer(ulder);
game.addPlayer(grace);
game.addPlayer(draven);
game.addPlayer(moana);
game.addPlayer(carl);
game.startGame();