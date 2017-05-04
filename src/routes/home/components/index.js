import React from 'react';
import { connect } from 'dva';
import { Icon, Button, Tooltip } from 'antd';
import style from './style.less';
/**
 * Stateless Functional 无状态函数组件写法
 */
const Home = ({dispatch, location, home}) => {

  return (
    <div className={ style.home }>
      <div className={ style.page }>
        <div className={ style.index }>
          <div className={ style.header }>
            <a className={ style.title }>
              <span>jindada</span>
              <span>blog</span>
            </a>
            <div className={ style.describe }>
              <span>技术博客</span>
            </div>
          </div>
          <div className={ style.footer }>
            <Tooltip title="前往 Github">
              <Button icon="github" ghost>
                <a href="https://github.com/jindada" />
              </Button>
            </Tooltip>
            <Tooltip title="给颗星星">
              <Button icon="star" ghost>
                <a href="https://github.com/jindada/blog" />
              </Button>
            </Tooltip>
            <Tooltip title="进入 blog">
              <Button icon="arrow-right" ghost>
                <a href="https://github.com/jindada" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={ style.down }>
          <Icon type="caret-down" />
        </div>
      </div>
      <div className={ style.page }>
        <p>Dva</p>
      </div>
      <div className={ style.page }>
        <p>Antd</p>
      </div>
      <div className={ style.page }>
        <p>Dora</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({home}) => ({home});

export default connect(mapStateToProps)(Home);