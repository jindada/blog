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
              <span style={{ color: '#ff0000' }}>j</span>
              <span style={{ color: '#ff7f00' }}>i</span>
              <span style={{ color: '#ffff00' }}>n</span>
              <span style={{ color: '#00ff00' }}>d</span>
              <span style={{ color: '#00ffff' }}>a</span>
              <span style={{ color: '#108ee9' }}>d</span>
              <span style={{ color: '#8b00ff' }}>a</span>
              <span>blog</span>
            </a>
            <div className={ style.describe }>
              <span>兄弟，来碗热乎乎的代码吧</span>
            </div>
          </div>
          <div className={ style.footer }>
            <Tooltip title="前往 Github">
              <a href="https://github.com/jindada">
                <Button icon="github" ghost />
              </a>
            </Tooltip>
            <Tooltip title="赏颗星星吧">
              <a href="https://github.com/jindada/blog">
                <Button icon="star" ghost />
              </a>
            </Tooltip>
            <Tooltip title="进入 blog">
              <a href="/#/blog">
                <Button icon="arrow-right" ghost />
              </a>
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