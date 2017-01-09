import React,{PropTypes} from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Login from '../components/Users/Login';


function HomePage({loaction,dispatch,users}) {

  const {userName,password} = users;

  const userLoginProps = {
    onLogin(loginData){
      dispatch({
        type:'users/login',
        payload:loginData,
      })
    }
  };


  return (
    <Login {...userLoginProps} />
  );
};

function mapStateToProps({ users }) {
  return { users };
}

HomePage.propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
};

// export default HomePage;
export default connect(mapStateToProps)(HomePage);
