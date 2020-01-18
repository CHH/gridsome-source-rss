const RssParser = require('rss-parser')
const omit = require('lodash.omit')

class RssFeedSource {
    static defaultOptions() {
        return {
            typeName: 'FeedNode',
            feedUrl: null,
            parser: {}
        }
    }

    constructor(api, options) {
        this.api = api
        this.options = options
        this.rss = new RssParser(this.options.parser)

        api.loadSource(async actions => {
            await this.loadFeed(actions)
        })
    }

    async loadFeed(actions) {
        const collection = actions.addCollection({
            typeName: this.options.typeName,
        })

        const feed = await this.rss.parseURL(this.options.feedUrl)
        const feedMeta = omit(feed, ['items'])

        for (const item of feed.items) {
            collection.addNode({
                id: item.guid,
                feedMeta,
                ...item,
            })
        }
    }
}

module.exports = RssFeedSource