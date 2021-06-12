const md5 = require('md5');

class UrlShortener {

    static hashUrl(url) {
        return md5(url);
    }

    constructor(maxUrlSymbols = 10) {
        this.cache = new Map();
        this.maxUrlSymbols = maxUrlSymbols;
    }

    getOrigin(hashedUrl) {
        return this.cache.get(hashedUrl);
    }

    cut(url) {
        const hashedUrl = UrlShortener.hashUrl(url)
            .slice(0, this.maxUrlSymbols);
        this.cache.set(hashedUrl, url);
        return hashedUrl;
    }

}

module.exports = UrlShortener;
