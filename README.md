# gridsome-source-rss

> Use an RSS feed as a source for gridsome

![Version](https://img.shields.io/npm/v/gridsome-source-rss)
![Downloads](https://img.shields.io/npm/dm/gridsome-source-rss)

## Install

- `yarn add gridsome-source-rss`
- `npm install gridsome-source-rss`

## Usage

```
module.exports = {
  plugins: [
    {
      use: "gridsome-source-rss",
      options: {
        feedUrl: "https://hnrss.org/frontpage",
        typeName: 'HNFrontpageItem'
        // Parser options, see: https://www.npmjs.com/package/rss-parser
        parser: {}
      }
    },
  ],
}
```

## Options

### feedUrl

URL of the feed.

### typeName

Type name of the collection, defaults to `FeedNode`.

### parser

Parser options, see the [`rss-parser` documentation](https://www.npmjs.com/package/rss-parser). Can be used to set e.g. HTTP headers.
