const fs = require('fs')
const { expect } = require('chai')
const parseTitlesFromHTML = require('../movie-search.js')
const testPage = fs.readFileSync('tests/test-webpage.html', 'utf8')

context('Movie Search Command Line Interface', () => {
  describe('printTitles()', () => {
    it('Puts all titles inside of the .findSection divs in an array', () => {
      expect(parseTitlesFromHTML(testPage)).to.deep.equal([ ' Inception (2010) ',
  ' Inception (2011) (TV Episode)  - Season 1 | Episode 10  - Pulp Interviews (2011) (TV Series)  ',
  ' Inception (2010) (TV Episode) - HBO First Look (1992) (TV Series)  ',
  ' Inception: The Cobol Job (2010) (Video) ' ])
    })
    it('Throws an error if the page is empty', () => {
      expect(() => printTitles('')).to.throw()
    })
  })
})
