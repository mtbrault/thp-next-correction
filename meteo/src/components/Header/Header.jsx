import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city_name, country_code } = this.props.city;
		return (
			<div id="header">
				<h1>Bienvenue sur myWeather</h1>
				<p>Voici la météo pour la ville de {city_name}, {country_code}</p>
			</div>
		)
	}
}

export default Header;