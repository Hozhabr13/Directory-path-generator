import Axios from 'axios'
import { API_BASE_URL } from '../constants/configs'

class ApiInvoke {
  apiToken: string | null | undefined
  client: (object | null)
  baseURL: string
  timeout: number

  constructor () {
    this.apiToken = ''
    this.client = null
    this.baseURL = API_BASE_URL
    this.timeout = 31000
  }

  /**
   * @param {string} tokenProperty - ACCESS_TOKEN
   * @returns {string} - Sample token
   */
  getCookie = (tokenName: any) => {
    if (localStorage.getItem(tokenName)) {
      return localStorage?.getItem(tokenName)
    }
  }

  /**
   * @param {string} tokenProperty - ACCESS_TOKEN
   * @returns {string} - Sample token
   */
  setCookie = (tokenName: any) => {
    localStorage?.setItem('ACCESS_TOKEN', tokenName)
  }

  /**
   * Initiate Axios instance and configure
   * @returns { object } - Instance of Axios
   */
  init = () => {
    this.apiToken = this.getCookie('ACCESS_TOKEN')
    const headers: any = {
      Accept: 'application/json'
    }
    if (this.apiToken) {
      headers.Authorization = `Bearer ${
          this.apiToken
      }`
    }

    this.client = Axios.create(
      {
        baseURL: this.baseURL,
        timeout: this.timeout,
        headers
      })
    return this.client
  }
}

export default new ApiInvoke()
