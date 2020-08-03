module.exports={

    '@tags' : ['google'],
    'Google advance search: elon musk'(browser){

        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvanceSearch();

        const resultPageLanguageSelector = '[aria-label="Search Hindi pages"]';
        const resultPageLastUpdatorSelector ='[aria-label="Past month"]';


        page
        .navigate()
        .setQuery(mainQuery)
        .selectFilter('@googleLanguageDropDown','lang_hi')
        .search()


        const searchResult = `#searchform input[name="q"][value="${mainQuery}"]`;

        browser
        .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
        .assert.urlContains('lr=lang_hi', 'language is hindi')
        .assert.urlContains('as_qdr=m','Time period is last month')


        browser.assert.visible(searchResult,'UI: Elon Mask is set in query result');

        browser.assert.containsText(resultPageLanguageSelector,'Search Hindi pages','UI: Result page language');
        browser.assert.containsText(resultPageLastUpdatorSelector,'Past month','UI: Result page history selector');
        browser.saveScreenshot('tests_output/google.png')
    
    }
}