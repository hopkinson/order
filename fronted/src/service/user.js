/**
 * @Date:   2017-11-16T13:30:27+08:00
 * @Last modified time: 2017-11-22T12:28:48+08:00
 */
import axios from '@/plugin/axios'
export const login = params => axios.post('user/login', params)
export const signup = params => axios.post('user/signup', params)
export const getUserInfo = params => axios.get('user/getInfo')
export const getUserInfoByName = params => axios.get('user/getInfoByName', {params: params})
