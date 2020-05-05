import React, { Component } from 'react';
import './Meteo.css';

class Meteo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
		}
	}

	getDayFromDate = (dateToConvert) => {
		const date = new Date(dateToConvert);
		return this.state.day[date.getDay()];
	}

	render() {
		const { list } = this.props;
		return (
			<div id="container">
				{list.map((data, index) => (
					<div key={index} className="day">
						<p>{this.getDayFromDate(data.datetime)}</p>
						<img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt={data.weather.description} />
						<p>max: {data.high_temp}, min: {data.low_temp}</p>
					</div>
				))}
			</div>
		)
	}
}

export default Meteo;