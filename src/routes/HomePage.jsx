import React,{PropTypes} from 'react';
import { Link } from 'dva/router';
import styles from './HomePage.less';
import { Form,Icon,Input,Button} from 'antd';
const FormItem = Form.Item;

function HomePage({form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    }}) {
  function handleSubmit(e){
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      alert(JSON.stringify(getFieldsValue()));
    });
  };
  return (
    <div className={styles.box}>
      <Form inline onSubmit={handleSubmit} className={styles.normal}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '登录名不能为空！' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入登录名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空！' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>`
    </div>
  );
}

HomePage.propTypes = {
    form: PropTypes.object.isRequired,
};

// export default HomePage;
export default Form.create()(HomePage);
