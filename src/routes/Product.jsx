import React,{PropTypes} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import Product from '../components/Product/Product';
import styles from './users.less';
import MainLayout from '../components/MainLayout/MainLayout';


function Product1({location,dispatch,product}){

      const { loading, list, total, current,
          currentItem, modalVisible, modalType,}=product;

      const productProps={
        dataSource: list,
        loading,
        total,
        current,
        onPageChange(page) {
          dispatch(routerRedux.push({
            pathname: '/product',
            query: { page },
          }));
        },
      };

      return (
        <MainLayout location={location}>
          <div className={styles.nomal}>
              <Product {...productProps} />
          </div>
        </MainLayout>
      )
};

Product1.propTypes={
  location:PropTypes.object,
  dispatch:PropTypes.func,
  product:PropTypes.object,
};

function mapStateToProps({product}){
  return {product};
};

export default connect(mapStateToProps)(Product1);
