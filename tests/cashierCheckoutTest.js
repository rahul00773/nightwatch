

module.exports = {

    '@tags' : ['google'],
    'Test case for cashier checkout page'(browser){

        const page = browser.page.cashierPage();

        const mid = 'EFsqVC64494744442746';
        const ssoToken ='69cc9ad5-6090-4061-a1c9-68bc464e9500'

        const id ='#checkbox';

        page
        .navigate()
        .setMid(mid)
        .setSsoToken(ssoToken)
        .payTxn()

        browser.expect.element('@id').to.be.selected;

    }


}