import React, { useState } from 'react';

const Form = ({ submitForm, data, setter }) => {
	console.log(data);

	return (
		<>
			<input type="text" value={data.title} onChange={e => setter.setTitle(e.target.value)} placeholder="title" />
			<input type="text" value={data.description} onChange={e => setter.setDescription(e.target.value)} placeholder="desc" />
			<button type="submit" onClick={() => submitForm(data.title, data.description)}>Valider</button>
		</>
	)
}

export default Form;