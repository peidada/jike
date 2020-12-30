import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from "element-ui";

// axios.defaults.baseURL = 'https://testgmweb.jhwx.com/';
// axios.defaults.baseURL = 'https://api.jhwx.com/';
// axios.defaults.baseURL = 'https://app.jhwx.com/';

// axios.defaults.withCredentials = true;

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF=8'

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3V1aWQiOiIzNGQ2ZjY1NzVjYzI0NTlhOTI5YjFjNzhjYjM2NTgwZiIsInVzZXJuYW1lIjoi5p2o54eVIiwibW9iaWxlIjoiMTUyMDEwMDYxMzIiLCJleHBpcmVkX2F0IjoiMjAyMC0xMS0xNyAwOTo0ODowNSIsImlhdCI6MTYwNTQ5MTI4NSwiZXhwIjoxNjA1NTc3Njg1fQ.uT3J9Fgq4gwDsB0pkhS97Fh2bncWaoMXH57sN6M0taU';
    config.data = (config.data); // qs.stringify

    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  if (response.data && response.data.code == 10002){
    // location.href = '/';
    return response
  }else{
    return response
  }
},
    err => {
  if (err && err.response) {
    console.log(err, 'err response');
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break;
    }
  } else {
    Message({
      message: '服务器连接超时，请重试',
      type: 'error'
    })
  }
  return Promise.resolve(err.response)
})

export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, { params: params }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  });
}

  /*axios.post(url, qs.stringify(params))*/
export const post = (url,  params={}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, (params)).then(res => { res && res.data ? resolve(res.data) : resolve(res)},
        err => {
        reject(err)
      })
  })
}

export const postphp = (url,  params={}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params)).then(res => { res && res.data ? resolve(res.data) : resolve(res)},
        err => {
        reject(err)
      })
  })
}
