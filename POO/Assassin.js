class Assassin extends Character {
	constructor(name = "Carl", hp = 6, dmg = 6, mana = 20) {
		super(name, hp, dmg, mana);
		this.protection = false;
		this.nextVictim = null;
	}

	newTurn = () => {
		if (this.protection) {
			this.shield = 999;
			this.protection = false;
			this.attackVictim(7, this.nextVictim);
			if (this.nextVictim.isAlive()) {
				this.takeDamage(7, true);
			}
		} else {
			this.shield = 0;
			this.nextVictim = null;
		}
	}

	specialAttack = (victim) => {
		if (this.attackVictim() && this.mana >= 20) {
			this.mana -= 20;
			this.nextVictim = victim;
			this.protection = true;
		}
	}
}