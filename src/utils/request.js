import  Axios  from "axios";
import qs from 'querystring'
//自定义配置
const instance=Axios.create({
    //请求配置的路径
    timeout:5000,
})
//添加请求的拦截器
instance.interceptors.request.use(function (config) {
    //参数能判断请求的方式url等一些信息
    // console.log("config-请求拦截器", config);
    if (config.method == "post") {
        //在发送请求之前处字符串格式
        config.data = qs.stringify(config.data)
    }
    return config
})
export default instance