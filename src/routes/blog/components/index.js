import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Table, Input, Icon, BackTop, Popover } from 'antd';
import List from './list';
import style from './style.less';
import './icon.css';
import weixinImg from './images/weixin.png';
import wxpayImg from './images/wxpay.png';
import zfbpayImg from './images/zfbpay.png';
const { Header, Content, Footer } = Layout;
const Search = Input.Search;

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
        <Menu className={ style.menu } theme="dark" mode="horizontal" defaultSelectedKeys={['javascript']}>
	      <Menu.Item key="javascript">javascript</Menu.Item>
	      <Menu.Item key="react">react</Menu.Item>
	      <Menu.Item key="css">css</Menu.Item>
	      <Menu.Item key="python">python</Menu.Item>
        </Menu>
        <div className={ style.search }>
          <Search />
        </div>
      </Header>
	  <Content className={ style.content }>
	    <div style={{ background: '#fff', padding: 24, minHeight: 568 }}>
	      <List />
	    </div>
	  </Content>
	  <Footer className={ style.footer }>
      <p>
        <span>如果你想请作者喝碗鸡汤：</span>
        <Popover content={<div>jzs0914@126.com</div>}>
          <i className="iconfont email" />
        </Popover>
        <i className="iconfont github" />
        <Popover content={<img src={weixinImg} style={{ width: 100, height: 100 }}/>}>
          <i className="iconfont weixin"  />
        </Popover>
        <Popover content={<div>1020433977</div>}>
          <i className="iconfont qq" />
        </Popover>
      </p>
      <p>
      <span>如果你想请作者喝杯咖啡：</span>
        <i className="iconfont weixin" />
        <i className="iconfont zhifubao" />
      </p>
	  </Footer>
    <BackTop />
	</Layout>
  )
}

export default Blog
// const mapStateToProps = ({blog}) => ({blog});

// export default connect(mapStateToProps)(blog);
