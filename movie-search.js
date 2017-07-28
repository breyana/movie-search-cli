const http = require('http')
const cheerio = require('cheerio')

const search = encodeURI(process.argv[2])
const URL = 'http://www.imdb.com/find?ref_=nv_sr_fn&q=' + search + '&s=all'

http.get(URL, (response) => {
  response.setEncoding('utf8')
  let rawData = ''
  response.on('data', (data) => { rawData += data })
  response.on('end', () => {
    try {
      const $ = cheerio.load(rawData)
      console.log($('.result_text').text())

    } catch (error) {
      console.error(error)
    }

  })
})
