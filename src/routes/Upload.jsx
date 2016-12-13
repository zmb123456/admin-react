import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Upload.less';
import Uploads from '../components/Upload/Uploads';

function Upload1({loaction,history}){

	return (
	<MainLayout location={location}>
      <div className={styles.normal}>
        <Uploads/>
      </div>
    </MainLayout>
    )
}

export default Upload1;