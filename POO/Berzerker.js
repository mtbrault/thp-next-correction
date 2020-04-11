class Berzerker extends Character {
	constructor(name = "Draven", hp = 8, dmg = 4, mana = 0) {
		super(name, hp, dmg, mana);
	}

	buffAttack = () => {
		if (this.attackVictim()) {
			this.attack += 1;
			this.takeDamage(1);
		}
	}
}