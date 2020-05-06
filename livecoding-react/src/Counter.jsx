import React, { useState, useEffect } from 'react';

const Counter = ({ counter, setCounter }) => {
	return (
		<>
			<p style={{ marginLeft: '5%' }}>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Click</button>
		</>
	)
}

export default Counter;