import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import {Upload,Icon,Modal} from 'antd';

const Upload1=({ loaction, dispatch,state })=> {
	 state = {
    previewVisible: false,
    previewImage: ''
  };
	const fileList=[{
		uid: -1,
		name: 'xxx.png',
		status: 'done',
		url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	}];

const handlePreview=  (file) => {
	this.setState({
		previewImage: file.url || file.thumbUrl,
		previewVisible: true,
	});
};

const handleCancel=() => {this.setState({ previewVisible: false });alert('点击了取消')};
const uploadButton = (
	<div>
		<Icon type="plus" />
		<div className="ant-upload-text">Upload</div>
	</div>
);

	return (
	<MainLayout location={location}>
      <div>
				<Upload
          action="/upload.do"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={state.previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
        </Modal>
      </div>
    </MainLayout>
    );
};

export default Upload1;
