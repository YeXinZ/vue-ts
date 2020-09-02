import axios from 'axios';
import { MAINHOST, ISMOCK, conmomPrams } from '@/config';
import requestConfig from '@/config/requestConfig';
import { getToken } from '@/utils/common';
import router from '@/router';
const baseURL = process.env.NODE_ENV === 'production' ? MAINHOST : location.origin;
const token = getToken();
class HttpRequest {
    constructor() {
        this.queue = {};
    }
    destroy(url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
            // hide loading
        }
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use((config) => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // show loading
            }
            if (url) {
                this.queue[url] = true;
            }
            return config;
        }, (error) => {
            console.error(error);
        });
        // 响应拦截
        instance.interceptors.response.use((res) => {
            if (url) {
                this.destroy(url);
            }
            const { data, status } = res;
            if (status === 200 && ISMOCK) {
                return data;
            } // 如果是mock数据，直接返回
            if (status === 200 && data && data.code === 0) {
                return data;
            } // 请求成功
            return requestFail(res); // 失败回调
        }, (error) => {
            if (url) {
                this.destroy(url);
            }
            console.error(error);
        });
    }
    async request(options) {
        const instance = axios.create();
        await this.interceptors(instance, options.url);
        return instance(options);
    }
}
// 请求失败
const requestFail = (res) => {
    const errStr = '网络繁忙！';
    // token失效重新登陆
    if (res.data.code === 1000001) {
        return router.replace({ name: 'login' });
    }
    return {
        err: console.error({
            code: res.data.errcode || res.data.code,
            msg: res.data.errmsg || errStr
        })
    };
};
// 合并axios参数
const conbineOptions = (_opts, data, method) => {
    let opts = _opts;
    if (typeof opts === 'string') {
        opts = { url: opts };
    }
    const _data = { ...conmomPrams, ...opts.data, ...data };
    const options = {
        method: opts.method || data.method || method || 'GET',
        url: opts.url,
        header: { 'user-token': token },
        baseURL
    };
    return options.method !== 'GET' ? Object.assign(options, { data: _data }) : Object.assign(options, { params: _data });
};
const HTTP = new HttpRequest();
/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
    const apiObj = {};
    const requestList = requestConfig;
    const fun = (opts) => {
        return async (data = {}, method = "GET") => {
            if (!token) {
                console.error('No Token');
                return router.replace({ name: 'login' });
            }
            const newOpts = conbineOptions(opts, data, method);
            const res = await HTTP.request(newOpts);
            return res;
        };
    };
    Object.keys(requestConfig).forEach((key) => {
        apiObj[key] = fun(requestList[key]);
    });
    return apiObj;
})();
export default Api;
//# sourceMappingURL=request.js.map