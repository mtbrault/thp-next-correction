import React, { useState } from 'react';
import { Row, Col, Card, Button, Avatar, List, Icon } from 'antd';
import profileJSON from './profileData.json';
import EditAccountModal from './components/EditAccountModal';
import PreviewPubsModal from './components/PreviewPublicationModal';
import UploadModal from './components/UploadPictureModal';

const App = () => {
  const [profileData, setProfileData] = useState(profileJSON);
  const [profileVisible, setProfileVisible] = useState(false);
  const [previewVisible, setPreviewVisibile] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const formatDate = date => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  const upload = values => {
    const { posts } = profileData;

    posts.push({ ...values, id: profileData.posts.length + 1 });
  }

  const deletePicture = id => {
    const { posts } = profileData;

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        posts.splice(i, 1);
        break;
      }
    }
    setPreviewVisibile(false);
    setPreviewData({});
  }

  const updateProfile = data => {
    setProfileData({ ...profileData, ...data })
  }

  const openPreview = data => {
    setPreviewData(data);
    setPreviewVisibile(true);
  }

  return (
    <div style={{ margin: 50 }}>
      <UploadModal visible={uploadVisible} toggleModal={() => setUploadVisible(!uploadVisible)} upload={upload} />
      <EditAccountModal visible={profileVisible} toggleModal={() => setProfileVisible(!profileVisible)} updateProfil={updateProfile} data={profileData} />
      <PreviewPubsModal visible={previewVisible} toggleModal={() => setPreviewVisibile(!previewVisible)} imageData={previewData} deletePic={deletePicture} />
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={profileData.profilePicture} />
                    <h3>{`${profileData.firstname} ${profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => setProfileVisible(true)}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => setUploadVisible(true)}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <List
              grid={{
                gutter: 8, column: 4, xs: 1, sm: 2, md: 2, lg: 3, xl: 4,
              }}
              dataSource={profileData.posts}
              renderItem={(item) => (
                <List.Item>
                  <Card bordered className="card-pubs" onClick={() => openPreview(item)}>
                    <img src={item.imageUrl} width={200} height={200} alt={item.description} />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
