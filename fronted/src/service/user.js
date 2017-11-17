/**
 * @Date:   2017-11-16T13:30:27+08:00
 * @Last modified time: 2017-11-17T16:46:24+08:00
 */
import axios from '@/plugin/axios'
export const login = params => axios.post('login', params)
