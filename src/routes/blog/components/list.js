import React from 'react';
import { Table, Tag, Icon } from 'antd';
import uuid from 'uuidjs';
import { labelColor } from '../../../config';

const List = ({ loading, listData }) => {

	const columns = [{
	  title: '标题',
	  dataIndex: 'title',
	  key: 'title',
	  render: (text, record) => <a href={ record.href } target="_blank">{ text }</a> 
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
	  <Table loading={loading} dataSource={listData} columns={columns} showHeader={false} pagination={pagination} />
	)
}

export default List