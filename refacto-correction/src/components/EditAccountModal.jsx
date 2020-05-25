import React, { useState } from 'react';
import { Modal, Row, Col, Input } from 'antd';

const EditAccountModal = ({ toggleModal, visible, data, updateProfil }) => {

	const [email, setEmail] = useState(data.email);
	const [firstname, setFirstname] = useState(data.firstname);
	const [lastname, setLastname] = useState(data.lastname);
	const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);

	return (
		<Modal
			title="Edit your account"
			okText="Update"
			visible={visible}
			onOk={() => updateProfil({ email, firstname, lastname, phoneNumber })}
			onCancel={() => toggleModal()}
		>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>EMail</b>
					<Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</Col>
			</Row>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>Firstname</b>
					<Input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
				</Col>
			</Row>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>Lastname</b>
					<Input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
				</Col>
			</Row>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>Phone number</b>
					<Input id="phone" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
				</Col>
			</Row>
		</Modal>
	);

}

export default EditAccountModal;