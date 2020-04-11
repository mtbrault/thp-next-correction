class Paladin extends Character {
	constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160) {
		super(name, hp, dmg, mana);
	}

	lightning = (victim) => {
		if (this.attackVictim(4, victim) && this.mana >= 40) {
			this.hp += 5;
			this.mana -= 40;
		}
	}
}