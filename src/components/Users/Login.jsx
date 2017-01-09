import React,{PropTypes} from 'react';
import styles from './Login.less';
import { Form,Icon,Input,Button} from 'antd';
const FormItem = Form.Item;

const UserLogin = ({onLogin,form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  }}) => {
  function handleSubmit(e){
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onLogin(getFieldsValue());
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

UserLogin.propTypes = {
    form: PropTypes.object.isRequired,
    onLogin: PropTypes.func,
};

// export default HomePage;
export default Form.create()(UserLogin);
