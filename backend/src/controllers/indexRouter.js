const router = require('express')
    .Router();

const { maxSymbolsInUrl } = require('../config')(process.env.NODE_ENV);
const UrlShortener = require('../services/UrlShortener');
const { appendPrefix } = require('../shared/utils');
const validator = require('../middleware/validators');

const shortener = new UrlShortener(maxSymbolsInUrl);

router.post('/', validator.urlValidator(), validator.validate, async (req, res) => {
    const { url } = req.body;
    const hash = shortener.cut(url);
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    res.json({ cutUrl: `${fullUrl}${hash}` });
});

router.get('/:shortenLink', async (req, res) => {
    const { shortenLink } = req.params;
    const url = shortener.getOrigin(shortenLink);
    if (url) {
        res.redirect(appendPrefix(url, 'https://'));
    } else {
        res.status(400)
            .send('The origin link has not been found. Did you create a short link?');
    }
});

module.exports = router;
