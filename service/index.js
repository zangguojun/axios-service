import config from './config'
import HTTP from './http'

const http = new HTTP({
  baseURL: 'https://api.bilibili.com/x',
  timeout: 1000,
})

const {
  demoApi,
  ...others
} = http.createService(config)

const Format = (service) => (params) => service(params)

export default {
  demoApi: Format(demoApi),
  ...others,
}
