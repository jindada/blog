import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Table } from 'antd';
import List from './list';
import style from './style.less';
const { Header, Content, Footer } = Layout;


const Blog = () => {
  return (
  	<Layout className={ style.blog }>
	  <Header className={ style.header }>
	  	<div className={ style.logo }>
          <span style={{ color: '#ff0000' }}>j</span>
          <span style={{ color: '#ff7f00' }}>i</span>
          <span style={{ color: '#ffff00' }}>n</span>
          <span style={{ color: '#00ff00' }}>d</span>
          <span style={{ color: '#00ffff' }}>a</span>
          <span style={{ color: '#108ee9' }}>d</span>
          <span style={{ color: '#8b00ff' }}>a</span>
        </div>
        <Menu className={ style.menu } theme="dark" mode="horizontal" defaultSelectedKeys={['react']}>
	      <Menu.Item key="react">react</Menu.Item>
	      <Menu.Item key="css">css</Menu.Item>
	      <Menu.Item key="python">python</Menu.Item>
        </Menu>
      </Header>
	  <Content className={ style.content }>
	    <div style={{ background: '#fff', padding: 24, minHeight: 1000 }}>
	      <List />
	    </div>
	  </Content>
	  <Footer style={{ textAlign: 'center' }}>
	    Created by jindada
	  </Footer>
	</Layout>
  )
}

export default Blog
// const mapStateToProps = ({blog}) => ({blog});

// export default connect(mapStateToProps)(blog);
