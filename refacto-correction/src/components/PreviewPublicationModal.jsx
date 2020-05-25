import React from 'react';
import { Modal, Row, Col, Button, List, Tag } from 'antd';

const PreviewPublicationModal = ({ visible, toggleModal, imageData, deletePic }) => {

	const updatePic = () => {
		alert(`J'update la publcation avec l'id : ${imageData.id}`);
	}

	return (
		<Modal width={520} visible={visible} onCancel={toggleModal}
			footer={<Row type="flex">
				<Col span={12} className="text-center">
					<Button type="ghost" icon="edit" onClick={updatePic}>Edit</Button>
				</Col>
				<Col span={12} className="text-center">
					<Button type="danger" icon="delete" onClick={() => deletePic(imageData.id)}>Delete</Button>
				</Col>
			</Row>}>
			<Row type="flex" align="middle">
				<Col xs={24} md={12} className="text-center">
					<img src={imageData.imageUrl} width={200} height={200} alt={imageData.description} />
				</Col>
				<Col xs={24} md={12}>
					<div>
						<b>Description: </b>
						<p>{imageData.description}</p>
					</div>
					<div>
						<b>Hashtag:</b>
						<List
							grid={{ gutter: 16, column: 2 }}
							dataSource={imageData.hashtags}
							renderItem={(tag) => (
								<List.Item>
									<Tag>{`${tag}`}</Tag>
								</List.Item>
							)}
						/>
					</div>
					<div>
						<b>Mention:</b>
						<List
							grid={{ gutter: 16, column: 2 }}
							dataSource={imageData.mentions}
							renderItem={(user) => (
								<List.Item>
									<Tag>{`@${user}`}</Tag>
								</List.Item>
							)}
						/>
					</div>
				</Col>
			</Row>
		</Modal>
	);
}

export default PreviewPublicationModal;