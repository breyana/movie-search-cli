# movie-search-cli

## Exercise

Write a Node.js script called `movie-search.js` that takes a `search term` as
the first argument. Your script should then print in the console the titles,
release years, and title types of the movies in the "Title" section of the
page that IMDB displays in response to a search for that term, parenthesizing
the years and types as IMDB does.

### Example usage

```bash
$ node movie-search.js "findingnemo"
Finding Nemo (2003)
Finding Nemo (2003) (Video Game)
Finding Nemo (2001) (TV Episode)
Finding Dory (2016)
Finding Nemo Submarine Voyage (2007) (Short)
Finding Nemo: Studio Tour of Pixar (2003) (Video)
Finding Nemo Attraction & Stage Show (2007) (TV Episode)
```

### Specs

- use Node.js's `http` module to make a request to `imdb.com`
- use the [cheerio library](https://github.com/cheeriojs/cheerio) to extract contents from the HTML page.
- functions are tested with mocha and chai
