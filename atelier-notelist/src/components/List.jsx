import React from 'react';
import shortid from 'shortid';

const List = ({ list, update }) => (
	<>
		{list.map((data, index) => (
			<div key={shortid.generate()} onClick={() => update(index)}>
				<p>{data.title}</p>
				<p>{data.description}</p>
			</div>
		))}
	</>
);

export default List;