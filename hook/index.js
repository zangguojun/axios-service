import { useState, useEffect } from 'react'

const defaultConfig = {
  dataIsRes: true,
  showError: true,
}
/**
 * @param {function} serviceName 服务名
 * @param {object} params 参数
 * @param {object} config 配置
 * @returns [dataSource, loading, error, setDataSource]
 */
export const useService = (
  serviceName,
  params,
  config,
) => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)

  const cfg = { ...defaultConfig, ...config }

  const fetchData = () => {
    setLoading(true)
  }

  useEffect(() => {
    fetchData(params)
  }, [params])

  return [
    dataSource,
    loading,
  ]
}

export const useDemo = () => {}
