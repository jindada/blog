import React from 'react';
import { Table, Tag, Icon } from 'antd';
import uuid from 'uuidjs';
import { labelColor } from '../../../config';

const List = () => {
	const dataSource = [{
	  key: '1',
	  title: 'React组件生命周期过程说明',
	  labels: ['react'],
	  stars: 5,
	  update_time: '2017-05-05 09:07:23'
	}, {
	  key: '2',
	  title: '理解 Babel 插件',
	  labels: ['babel', 'babel-plugin'],
	  stars: 3,
	  update_time: '2017-05-05 09:07:23'
	}];

	const columns = [{
	  title: '标题',
	  dataIndex: 'title',
	  key: 'title',
	  render: (text) => <a>{ text }</a> 
	}, {
	  title: '分类标签',
	  dataIndex: 'labels',
	  key: 'labels',
	  render: (text) => text.map((label) => <Tag key={ label } color={ labelColor[label] }>{ label }</Tag>) 
	}, {
	  title: '推荐指数',
	  dataIndex: 'stars',
	  key: 'stars',
	  render: (text) => Array.from({ length: text }, () => <Icon key={ uuid.generate() } type="star" style={{ color: '#eea236' }} />)
	}, {
	  title: '最后更新时间',
	  dataIndex: 'update_time',
	  key: 'update_time',
	}];

	const pagination = {
		size: 'small',
	    pageSize: 50
	};

	return (
	  <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={pagination} />
	)
}

export default List