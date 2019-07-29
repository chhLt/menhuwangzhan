/**
 * FileName：api
 * Created By No.1 On 2017年12月15日10点43分
 */
import $http from "axios";
import {BaseUrl} from './constUrl'
//请求拦截器
$http.interceptors.request.use((config) => {
  //在发送之前做些什么
  return config;
}, (error) => {
//   console.log(error);
  //对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response;
}, (error) => {
//   console.log(error);
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default {
  /**
   * @param url          *API
   * @param method       *POST  GET
   * @param params       *query
   * @param data body    *POST PUT
   * @returns {Promise}  *params
   */
  Request(url, method, data, params) {
    const pattern = /\?/g;
    // let token = getStore('token');
    // pattern.test(url) ? url += '&' : url += '?';
    var url = BaseUrl + url;
    // console.log(url)
    params || (params = {});
    return new Promise((resolve, reject) => {
      $http.request({
        method: method,
        // url: BASE_URL + url + 'access_token='+ token,
        url: url,
        data: data,
        params: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        let _res = res.data;
        resolve(_res);
      }).catch(error => {
        console.log('接口报错');
        // alert('网络请求错误，请您检查网络后刷新重试');
        console.log("err0r:", error);
        resolve(error);
      });
    });
  },
  //上传文件
  filePost(url, method, data) {
    const pattern = /\?/g;
    return new Promise((resolve, reject) => {
      $http.request({
        method: method,
        // url: fileRoot + url + 'access_token='+ token,
        url: BaseUrl + url,
        data: data,
        // withCredentials:true,
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(res => {
        let _res = res.data;
        resolve(_res);
      }).catch(error => {
        console.log('接口报错');
        // alert('网络请求错误，请您检查网络后刷新重试');
        console.log("err0r:", error);
        reject(error);
      });
    });
  },
  //获取本地模拟数据---在webpack-dev-config.js里配置模拟数据接口
  GetMockData(url, method, data, params) {
    const pattern = /\?/g;
    params || (params = {});
    return new Promise((resolve, reject) => {
      $http.request({
        method: method,
        url: url,
        data: data,
        params: params,
      }).then(res => {
        let _res = res.data;
        resolve(_res);
      }).catch(error => {
        console.log('接口报错');
        // alert('网络请求错误，请您检查网络后刷新重试');
        console.log("err0r:", error);
        resolve(error);
      });
    });
  },
}
