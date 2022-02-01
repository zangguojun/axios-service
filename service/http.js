import axios from 'axios'
import { message } from 'antd'

export default class {
  constructor(config) {
    this.service = axios.create(config)
  }

  createService(config) {
    const serviceList = {}
    Object.keys(config).forEach((key) => {
      const {
        url, method, note, ...rest
      } = config[key]
      if (!url) {
        const errorMessgae = `请先填写『${note || key}』的属性url`
        message.error(errorMessgae)
        throw new Error(errorMessgae)
      }
      serviceList[key] = (params) => {
        Object.keys(params || {}).forEach((k) => {
          // eslint-disable-next-line no-param-reassign
          if (params[k] === undefined || params[k] === null) delete params[k]
        })
        return this.service({
          url,
          ...rest,
          ...method === 'post' ? { data: params } : { params },
        })
      }
    })
    return serviceList
  }
  
}
