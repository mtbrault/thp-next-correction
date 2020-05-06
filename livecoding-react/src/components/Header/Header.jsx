import React from 'react';
import './Header.css';

const Header = ({ cityName, countryCode }) => {
	return (
		<div id="header">
			<h1>Bienvenue sur myWeather</h1>
			<p>Voici la météo pour la ville de {cityName}, {countryCode}</p>
		</div>
	)
}

export default Header;