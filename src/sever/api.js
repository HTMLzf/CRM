import http from '../http'

const BaseUrl = 'http://39.101.217.150:8086';
//登录
export function Login(data){
    return http.fetchPost(BaseUrl + '/account/login',data)
}

//菜单列表
export function Menu(data) {
    return http.fetchGet(BaseUrl + '/menu/list',data)
}
export default {
    Login,
    Menu,
}
