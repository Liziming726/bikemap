import axios from "axios";
//创建axios实例
const request = axios.create({
    baseURL: "/",
    timeout: 5000,
});

//请求拦截
request.interceptors.request.use(function(config){
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config
});

//响应拦截
request.interceptors.response.use(function(res){
    return res;
},function(err){
    console.log(err);;
});

export default request;