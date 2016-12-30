import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import Product from '../components/Product/Product';

const Upload1=({ loaction, dispatch ,products })=> {


	const { list } = products;

	// const list=[{
  //   key:'1',
  //   name:'足球',
  //   price:66,
  //   state:1
  // },{
  //   key:'2',
  //   name:'篮球',
  //   price:77,
  //   state:0
  // },{
  //   key:'3',
  //   name:'乒乓球',
  //   price:88,
  //   state:1
  // }];

	const productProps = {
		dataSource:list
	}

	return (
	<MainLayout location={location}>
      <div>
				<Product {...productProps} />
      </div>
    </MainLayout>
    );
};


Upload1.propTypes = {
	products:PropTypes.object,
	loaction:PropTypes.object,
	dispatch:PropTypes.func
};
function mapStateToProps({products}){return {products}};

export default connect(mapStateToProps)(Upload1);
