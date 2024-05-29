
describe('App', async () => {
    let expect: any;
    let $: any = {};
    before(async () => {
        const chai = await import('chai');
        expect = chai.expect;
        $ = (await import('@wdio/globals')).$;
    });

    it('should have a title', async () => {
        await $("~title").waitForDisplayed({ timeout: 11000, reverse: false });
        console.log("Test 1");
        const title = await $("~title").getText();
        console.log(title);
        expect(title).to.contain('Active Orders');
    });

    it('should have a refresh button', async () => {
        await $("~Refresh").waitForDisplayed({ timeout: 11000, reverse: false });
        console.log("Test 2");
        const refresh = await $("~Refresh").getText();
        console.log(refresh);
        expect(refresh).to.contain('Refresh');

    });
});
