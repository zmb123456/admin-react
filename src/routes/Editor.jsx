import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import { Editor } from 'react-draft-wysiwyg';
import   './react-draft-wysiwyg.css';
import  styles from './styles.css';


function Editor1({location,history}){


 // uploadCallback = (file) => {
 //  return new Promise(
 // 	 (resolve, reject) => {
 // 		 resolve({ link: "http://dummy_image_src.com" });
 // 	 }
 //  );
 // };

	return (
		<MainLayout location={location}>
				<div className={styles.normal}>
          <Editor
						toolbarClassName="home-toolbar"
						wrapperClassName="home-wrapper"
						editorClassName="home-editor"
						// uploadCallback={this.uploadCallback.bind(this)}
					/>
				</div>
		</MainLayout>
		)

};



export default Editor1;
