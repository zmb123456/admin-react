import React,{PropTypes} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import Product from '../components/Product/Product';
import styles from './users.less';
import MainLayout from '../components/MainLayout/MainLayout';


const Product1 = ({loaction,dispatch,product})=>{

      const {    loading, list, total, current, field, keyword,
          currentItem, modalVisible, modalType,}=product;

      const productProps={
        dataSource: list,
        loading,
        total,
        current,
        onPageChange(page) {
          dispatch(routerRedux.push({
            pathname: '/product',
            query: { field, keyword, page },
          }));
        },
      };

      return (
        <MainLayout loaction={loaction}>
          <div className={styles.nomal}>
              <Product {...productProps} />
          </div>
        </MainLayout>
      )
};

const productProps={
  location:PropTypes.object,
  dispatch:PropTypes.fun,
  product:PropTypes.object
}

function mapStateToProps({product}){return {product}};

export default connect(mapStateToProps)(Product1)
