const RssParser = require('rss-parser')
const parser = new RssParser()

class RssFeedSource {
    static defaultOptions() {
        return {
            typeName: 'FeedNode',
            feedUrl: null,
        }
    }

    constructor(api, options) {
        this.api = api
        this.options = options

        api.loadSource(async actions => {
            await this.loadFeed(actions)
        })
    }

    async loadFeed(actions) {
        const collection = actions.addCollection({
            typeName: this.options.typeName,
        })

        const feed = await parser.parseURL(this.options.feedUrl)

        for (const item of feed.items) {
            collection.addNode({
                id: item.guid,
                ...item,
            })
        }
    }
}

module.exports = RssFeedSource