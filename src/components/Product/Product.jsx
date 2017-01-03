import React,{PropTypes} from 'React';
import {Table,Pagination} from 'antd';

function Product({
  total, current, loading, dataSource,onPageChange
}){

  const columns=[{
    title:'ID',
    dataIndex:'id',
    key:'id'
  },{
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
      <div>
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={record => record.id}
      pagination={false}
    />
    <Pagination
      className="ant-table-pagination"
      total={total}
      current={current}
      pageSize={10}
      onChange={onPageChange}
    />
  </div>
  )
};

Product.propTypes={
    dataSource:PropTypes.array
};
export default Product;
