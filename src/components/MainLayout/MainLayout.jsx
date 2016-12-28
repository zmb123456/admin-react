import React, { PropTypes } from 'react';
import styles from './MainLayout.less';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: props.collapse || false,
    };

       // this.handleClick = this.handleClick.bind(this); //构造函数中绑定
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? styles.ant_layout_aside + ' ' + styles.ant_layout_aside_collapse : styles.ant_layout_aside}>
        <aside className={styles.ant_layout_sider}>
          <div className={styles.ant_layout_logo}></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" />
              {!collapse && <span className={styles.nav_text}>导航一</span>}
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="setting" />导航二</span>}>
              <Menu.Item key="5"><Link to="/editor">editor</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/users">用户列表</Link></Menu.Item>
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
            <Menu.Item key="laptop">
              <Icon type="laptop" />
              {!collapse && <span className={styles.nav_text}>导航三</span>}
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" />
              {!collapse && <span className={styles.nav_text}>导航四</span>}
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" />
              {!collapse && <span className={styles.nav_text}>导航五</span>}
            </Menu.Item>
          </Menu>
          <div className={styles.ant_aside_action} onClick={this.onCollapseChange.bind(this)}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className={styles.ant_layout_main}>
          <div className={styles.ant_layout_header}></div>
          <div className={styles.ant_layout_breadcrumb}>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.ant_layout_container}>
            <div className={styles.ant_layout_content}>
              <div style={{ height: 220 }}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

export default MainLayout;
