import axios from 'axios'
import querystring from 'querystring'

export default class CoinMarketCapAPI {
  constructor({ baseURL } = { baseURL: 'https://api.coinmarketcap.com/v1' }) {
    this.api = axios.create({ baseURL })
  }

  async ticker({ start, limit, convert, id } = {}) {
    let query = {}

    if (typeof id !== "string") {
      id = null
      if (typeof start === "number") query.start = start
      if (typeof limit === "number") query.limit = limit
      if (typeof convert === "string") query.convert = convert.toUpperCase()
    }

    const res = await this.request({
      path: `/ticker${(id) ? '/' + id : ''}`,
      query
    })

    return res
  }

  async market({ convert } = {}) {
    let query = {}
    if (typeof convert === "string") query.convert = convert.toUpperCase()

    const res = await this.request({
      path: `/global`,
      query
    })
    return res
  }

  async request({ path, query }) {
    try {
      const res = await this.api.get(path + '?' + querystring.stringify(query))
      return res.data
    } catch (e) {
      return e.response.data
    }
  }
}
