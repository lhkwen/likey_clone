import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN, BASE_URL } from 'src/config/propertySetting';
// import { REFRESH } from './end-point/auth';

const clearFunc = () => {

  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
  if (typeof window !== 'undefined') {
    window.sessionStorage.clear();
    window.location.href = '/login';
  }
};

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
	},
    withCredentials: true,
});

instance.interceptors.request.use((config)=> {
    const token = Cookies.get(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

instance.interceptors.response.use(
    (res) => ({...res}),

    async (error) => {
        const {config, response} = error;
        if(response === undefined) {
            return Promise.reject(error);
        }

        // const originalRequest = config;
        if(response.status === 401) {
            // const refreshToken = Cookies.get(REFRESH_TOKEN);
            // const res = await instance.post(REFRESH, {
            //     refresh_token: refreshToken,
            //     _checkToken: true
            // });
            // // TODO: 고민필요
            // if(res){
            //     const { data } = res.data;
            //     Cookies.set(ACCESS_TOKEN, data.access_token);
            //     originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
            //     return axios.request(originalRequest);
            // }
            clearFunc();
            return Promise.reject(error);
        }
        clearFunc();
        return Promise.reject(error);
       // console.log(error);
    }

)
export default instance;