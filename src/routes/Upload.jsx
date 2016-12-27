import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import Editor from '../components/Editor';

function Upload1({loaction,history}){

	return (
	<MainLayout location={location}>
      <div>
        <Editor/>
      </div>
    </MainLayout>
    )
}

export default Upload1;