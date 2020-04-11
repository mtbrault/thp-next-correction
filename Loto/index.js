const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArray = () => {
	let array = [];

	while (array.length != 6) {
		let number = getRandomIntInclusive(1, 45);
		if (!array.includes(number))
			array.push(number);
	}
	return array;
}

const lotoCheck = (firstname, lastname, email, loto) => {
	const message = document.getElementById('message');
	const emailRegex = new RegExp('([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$');
	const tirage = getRandomArray();

	if (firstname === "")
		return message.innerHTML = "Veuillez renseigner un prénom";
	else if (lastname === "")
		return message.innerHTML = "Veuillez renseigner un nom";
	else if (!emailRegex.test(email) || email.length < 8 || email.length > 30)
		return message.innerHTML = "Mauvais format d'email";
	else if (loto.length != 6)
		return message.innerHTML = "Vous devez jouer 6 chifres de lotos";
	for (let i = 0; i < loto.length; i++) {
		if (!tirage.includes(parseInt(loto[i])))
			return message.innerHTML = `Perdu ! Les bons numéros sont ${tirage.toString()}`;
	}
	message.innerHTML = "Félicitation ! Vous avez gagné 1 million !!!";
}

const submitForm = () => {
	const firstname = document.getElementById('firstname').value;
	const lastname = document.getElementById('lastname').value;
	const email = document.getElementById('email').value;
	const loto = document.getElementById('lotoNumber').value;

	lotoCheck(firstname, lastname, email, loto.split(','));
}

document.getElementById('submit').onclick = submitForm;
