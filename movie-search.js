const http = require('http')
const cheerio = require('cheerio')

const query = encodeURI(process.argv[2])
const URL = `http://www.imdb.com/find?ref_=nv_sr_fn&q=${query}&s=all`

const printTitles = (rawData) => {
  if (rawData === '' || !rawData) {
    throw new Error('Page has no data')
  }
  const $ = cheerio.load(rawData)
  const titles = []
  //There are multiple sections called .findSection, we only need the movies
  //so we look for the first .findSection, and grab the .result_text from it
  $('.findSection')
    .first()
    .find('.result_text')
    .each((i, elem) => {
      titles[i] = $(elem).text()
    })
  titles.forEach((element) => {
    console.log(element)
  })
  return titles
}

http.get(URL, response => {
  response.setEncoding('utf8')
  let rawData = ''
  response.on('data', (data) => { rawData += data })
  response.on('end', () => {
    try {
      printTitles(rawData)
    } catch (error) {
      console.error(error)
    }

  })
})

module.exports = printTitles
