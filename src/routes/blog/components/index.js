import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Table, Input, Icon, BackTop, Popover, Modal } from 'antd';
import List from './list';
import style from './style.less';
import './icon.css';
import weixinImg from './images/weixin.png';
import wxpayImg from './images/wxpay.png';
import zfbpayImg from './images/zfbpay.png';
const { Header, Content, Footer } = Layout;
const Search = Input.Search;

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wxPayVisible: false,
      zfbPayVisible: false,
      selectType: 'javascript'
    };
  }

  menuClick = ({ item, key, selectedKeys }) => {
    this.props.dispatch({
      type: 'blog/filter',
      data: { type: key }
    });
    this.setState({
      selectType: key
    })
  }

  searchClick = (value) => {
    this.props.dispatch({
      type: 'blog/filter',
      data: { type: this.state.selectType, keyword: value }
    });
  }

  render() {
    const {  wxPayVisible, zfbPayVisible } = this.state;
    const { loading, listData } = this.props.blog;

    const listProps = {
      loading,
      listData,
    }
    // 微信付款二维码模态框
    const WxPayModal = () => (
      <Modal visible={wxPayVisible} closable maskClosable onCancel={() => { this.setState({wxPayVisible: false}) }} footer={null}>
        <img src={wxpayImg} style={{ width: 500 }} />
      </Modal>
    )
    // 支付宝付款二维码模态框
    const ZfbPayModal = () => (
      <Modal visible={zfbPayVisible} closable maskClosable onCancel={() => { this.setState({zfbPayVisible: false}) }} footer={null}>
        <img src={zfbpayImg} style={{ width: 500 }} />
      </Modal>
    )

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
          <Menu className={ style.menu } theme="dark" mode="horizontal" onSelect={this.menuClick} defaultSelectedKeys={[this.state.selectType]}>
            <Menu.Item key="javascript">javascript</Menu.Item>
            <Menu.Item key="css">css</Menu.Item>
            <Menu.Item key="python">python</Menu.Item>
          </Menu>
          <div className={ style.search }>
            <Search onSearch={ this.searchClick }/>
          </div>
        </Header>
        <Content className={ style.content }>
          <div style={{ background: '#fff', padding: 24, minHeight: 568 }}>
            <List {...listProps} />
          </div>
        </Content>
        <Footer className={ style.footer }>
          <p>
            <span>如果你想请作者喝碗鸡汤：</span>
            <Popover content={<div>邮箱地址：jzs0914@126.com</div>}>
              <i className="iconfont email" style={{ marginTop: 1 }} />
            </Popover>
            <Popover content={<img src={weixinImg} style={{ width: 100, height: 100 }}/>}>
              <i className="iconfont weixin"  />
            </Popover>
            <Popover content={<div>QQ号码：1020433977</div>}>
              <i className="iconfont qq" />
            </Popover>
          </p>
          <p>
          <span>如果你想请作者喝杯咖啡：</span>
            <i className="iconfont weixin" onClick={() => { this.setState({wxPayVisible: true}) }} />
            <i className="iconfont zhifubao" onClick={() => { this.setState({zfbPayVisible: true}) }} />
          </p>
        </Footer>
        <BackTop />
        <WxPayModal />
        <ZfbPayModal />
      </Layout>
    )
  }
}

const mapStateToProps = ({ blog }) => ({ blog });

export default connect(mapStateToProps)(Blog);
