import React,{PropTypes} from 'React';
import {Table,Pagination} from 'antd';

function Product({dataSource}){

  const columns=[{
    title:'名称',
    dataIndex:'name',
    key:'name'
  },{
    title:'价格',
    dataIndex:'price',
    key:'price'
  },{
    title:'状态',
    dataIndex:'state',
    key:'state',
    render:(text,record,index)=>record.state==1?'已售':'未售'
  },{
    title:'操作',
    dataIndex:'',
    key:'x',
    render:()=><a href='#'>删除</a>
  }];
  return(
    <Table
      dataSource={dataSource}
      columns={columns}
    />
  )
};

Product.propTypes={
    dataSource:PropTypes.array
};
export default Product;
