class Fighter extends Character {
	constructor(name = "Grace", hp = 12, dmg = 4, mana = 40) {
		super(name, hp, dmg, mana);
		this.turn = 0;
		this.protection = false;
	}

	newTurn = () => {
		if (this.protection) {
			this.shield = 2;
			this.protection = false;
		} else {
			this.shield = 0;
		}
	}

	darkVision = (victim) => {
		console.log(victim);
		if (this.attackVictim(5, victim) && this.mana >= 20) {
			this.mana -= 20;
			this.protection = true;
		}
	}
}