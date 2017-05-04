import { $get, $post, $put, $delete, $option } from 'isomorphic-fetch-http';

/**
 * async函数 详见 http://es6.ruanyifeng.com/#docs/async
 * 
 * get方法 一般用于查询
 * @param {Object} param
 * export async function get(param) {
 *   return $http.get('url', param);
 * }
 * 
 * post方法 一般用于数据提交
 * @param {Object} param
 * export async function post(param) {
 *   return $http.post('url', param);
 * }
 * 
 * put方法 一般用于数据修改
 * @param {Object} param
 * export async function put(param) {
 *   return $http.put('url', param);
 * }
 * 
 * delete方法 一般用于数据删除
 * @param {Object} param
 * export async function delete(param) {
 *   return $http.delete('url', param);
 * }
 * 
 * option方法 本质是请求头为 "Content-Type": "application/json" 的post方法
 * @param {Object} param
 * export async function option(param) {
 *   return $http.option('url', param);
 * }
 */