const portfinder = require('portfinder');
const pupperteer = require('puppeteer');

const app = require('../index');

let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
})

afterEach(() => {
    server.close();
})

test('Strona główa umożliwia przejście na stronę o nas', async () => {
    const browser = await pupperteer.launch();
    const page = await browser.newPage();

    await page.goto(`http://localhost:${port}`);
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id=about]')
    ]);

    expect(page.url()).toBe(`http://localhost:${port}/about`);
    await browser.close();
})