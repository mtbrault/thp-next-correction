import React from 'react';
import { Col, Mentions, Row } from 'antd/es';


const MentionsTagsComponent = ({
	title, type, value, setValue, usersList
}) => {
	const onSelect = (val) => {
		const res = val.substring(0, val.length - 1);
		setValue(res);
	};

	const hashtagsExample = ['THP', 'TheHackingProject', '2020', 'ReactJS'];

	return (
		<Row type="flex" justify="center" className="input-container">
			<Col span={20}>
				<b>{title}</b>
				{type === 'mentions' && (
					<Mentions
						placeholder="Add space between users"
						onChange={(value) => onSelect(value)}
					>
					</Mentions>
				)}
				{type === 'tags' && (
					<Mentions
						placeholder="input # to write hashtags"
						prefix="#"
						defaultValue={value || '#'}
						onChange={(value) => onSelect(value)}
					>
						{hashtagsExample.map((hashtag, key) => (
							<Mentions.Option key={key} value={hashtag}>{`#${hashtag}`}</Mentions.Option>
						))}
					</Mentions>
				)}
			</Col>
		</Row>
	);
};

export default MentionsTagsComponent;