import React, { useState } from 'react';
import { Modal, Row, Col, Input } from 'antd';
import MentionsTagsComponent from './MentionsTag';

const UploadPictureModal = ({ visible, toggleModal, upload }) => {

	const [imageUrl, setUrl] = useState('');
	const [description, setDescription] = useState('');
	const [hashtag, setHashtags] = useState('');
	const [mentionList, setMentions] = useState('');

	const uploadPicture = () => {
		const mentions = (mentionList !== '') ? mentionList.split(' ') : [];
		const hashtags = (hashtag !== '') ? (hashtag.replace(new RegExp('#', 'g'), '')).split(' ') : [];

		upload({ imageUrl, description, mentions, hashtags });
		toggleModal();
	}

	return (
		<Modal title="Upload a picture" okText="Upload" visible={visible} onOk={uploadPicture} onCancel={toggleModal}>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>URL:</b>
					<Input id="url" title="Lien" type="text" value={imageUrl} onChange={(e) => setUrl(e.target.value)} />
				</Col>
				<Col span={20}>
					<b>Description:</b>
					<Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
				</Col>
			</Row>
			<MentionsTagsComponent type="mentions" value={mentionList} title="Mention a user" setValue={setMentions} />
			<MentionsTagsComponent type="tags" value={hashtag} title="Hashtags" setValue={setHashtags} />
		</Modal>
	)
}

export default UploadPictureModal;