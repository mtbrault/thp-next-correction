class Healer extends Character {
	constructor(name = "Moana", hp = 8, dmg = 2, mana = 200) {
		super(name, hp, dmg, mana);
	}

	heal = () => {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
		}
	}
}
