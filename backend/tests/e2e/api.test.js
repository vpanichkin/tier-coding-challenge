const request = require('supertest');
const app = require('../../src/app');

describe('API', () => {

    describe('#indexRouter', () => {
        const originUrl = 'https://google.com';

        test('index page is shortening the link', async () => {
            const pageResponse = await request(app)
                .post('/')
                .send({ url: originUrl });

            expect(pageResponse.status)
                .toBe(200);
            expect(pageResponse.body)
                .toEqual(expect.objectContaining({ shortenUrl: expect.any(String) }));
        });

        test('bad request if hash does not exist', async () => {
            const pageResponse = await request(app)
                .get('/some-non-existing-hash');

            expect(pageResponse.status)
                .toBe(400);
        });

    });

});
